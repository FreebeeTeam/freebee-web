/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
import FeedbackSidebar from './sidebar';
import { MAP_MODES } from '../../config/map';

import { close, open } from '../../redux/actions/ui/feedback-sidebar';
import { thunks, actions as feedbackActions } from '../../redux/feedback';
import { selectors as markersSelectors } from '../../redux/markers';
import { sharedActions } from '../../redux/shared';

import { validateFeedback, formatAddress } from './helpers';

import type { Feedback } from '../../types/models';

type Props = {
  closeSidebar: () => void,
  setReadMapMode: () => void,
  openSidebar: () => void,
  sendFeedback: () => void,
  resetSuggestedAddress: () => void,
  enqueueSnackbar: (message: string, options: any) => void,
  isOpen: boolean,
  location: any,
  suggestedAddress: any,
  freebieTypes: [],
  isFeedbackAddressLoading: boolean,
};

type State = {
  address: string,
  type: string[],
  author: string,
  description?: string,
};

const defaultState: State = {
  address: null,
  type: [''],
  author: '',
  description: '',
  errors: [],
};

class FeedbackSidebarContainer extends Component<Props, State> {
  state: State = defaultState;

  componentDidUpdate() {
    const { type, address } = this.state;
    const { freebieTypes, suggestedAddress } = this.props;
    if (type === defaultState.type && freebieTypes.length !== 0) {
      this.setState({ type: freebieTypes[0].value });
    }

    if (address === null && suggestedAddress !== null) {
      this.setState({
        address: formatAddress(suggestedAddress.address),
      });
    }
  }

  handleFieldChange = (name: string) => (e: Event) => {
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = (): void => {
    const {
      closeSidebar,
      sendFeedback,
      setReadMapMode,
      location,
    } = this.props;

    const {
      type,
      address,
      author,
      description,
    } = this.state;

    const feedback: Feedback = {
      location,
      address,
      type: type.toString(),
      author,
      description,
    };

    const state = validateFeedback(feedback);

    if (state.hasErrors) {
      this.setState({
        errors: state.errors,
      });
    } else {
      sendFeedback(feedback)
        .then(() => {
          this.props.enqueueSnackbar('Халява успешно отправлена!', {
            variant: 'success',
          });
        })
        .catch(() => {
          this.props.enqueueSnackbar('Ошибка при отправке халявы!', {
            variant: 'error',
          });
        });
      setReadMapMode();
      closeSidebar();
      this.setState({ ...defaultState });
    }
  };

  handleCancel = (): void => {
    const {
      closeSidebar, setReadMapMode, resetSuggestedAddress,
    } = this.props;

    setReadMapMode();
    resetSuggestedAddress();
    this.setState({ ...defaultState });
    closeSidebar();
  };

  render() {
    const {
      isOpen,
      openSidebar,
      freebieTypes,
      isFeedbackAddressLoading,
    } = this.props;

    const {
      address,
      author,
      type,
      description,
      errors,
    } = this.state;

    if (freebieTypes.length === 0) {
      return null;
    }

    const feedback: Feedback = {
      address,
      author,
      type,
      description,
    };

    return (
      <FeedbackSidebar
        feedback={feedback}
        isFeedbackAddressLoading={isFeedbackAddressLoading}
        errors={errors}
        freebieTypes={freebieTypes}
        isOpen={isOpen}
        open={openSidebar}
        submit={this.handleSubmit}
        cancel={this.handleCancel}
        handleFieldChange={this.handleFieldChange}
      />
    );
  }
}

const { createFeedback } = thunks;

const mapState = state => ({
  isOpen: state.ui.feedbackSidebar.open,
  location: markersSelectors.selectNewMarkerPositionInGeoJSON(state),
  freebieTypes: state.markers.shared.markerTypes,
  ...state.feedback.feedbackAddress,
});

const mapDispatch = {
  closeSidebar: close,
  openSidebar: open,
  sendFeedback: createFeedback,
  resetSuggestedAddress: () => feedbackActions.resetAddress(),
  setReadMapMode: () => sharedActions.setMapMode(MAP_MODES.READ),
};

export default connect(mapState, mapDispatch)(withSnackbar(FeedbackSidebarContainer));
