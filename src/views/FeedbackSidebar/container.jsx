/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedbackSidebar from './sidebar';
import { MAP_MODES } from '../../config/map';

import { close, open } from '../../redux/actions/ui/feedback-sidebar';
import { thunks } from '../../redux/feedback';
import { selectors as markersSelectors } from '../../redux/markers';
import { sharedActions } from '../../redux/shared';

import type { Feedback } from '../../types/models';

type Props = {
  closeSidebar: () => void,
  setReadMapMode: () => void,
  openSidebar: () => void,
  sendFeedback: () => void,
  isOpen: boolean,
  location: any,
  freebeeTypes: [],
};

type State = {
  address: string,
  type: string[],
  author: string,
  description?: string,
};

const defaultState = {
  address: '',
  type: [''],
  author: '',
  description: '',
};

class FeedbackSidebarContainer extends Component<Props, State> {
  state = defaultState;

  componentDidUpdate() {
    if (this.state.type === defaultState.type
    && this.props.freebeeTypes.length !== 0) {
      this.setState({ type: this.props.freebeeTypes[0].value });
    }
  }

  handleFieldChange = (name: string) => (e: Event) => {
    this.setState({
      [name]: e.target.value,
    });
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

    sendFeedback(feedback);
    setReadMapMode();
    closeSidebar();
    this.setState({ ...defaultState });
  };

  handleCancel = (): void => {
    const { closeSidebar, setReadMapMode } = this.props;

    setReadMapMode();
    closeSidebar();
    this.setState({ ...defaultState });
  };

  render() {
    const {
      isOpen, closeSidebar, openSidebar, freebeeTypes,
    } = this.props;

    const {
      address,
      author,
      type,
      description,
    } = this.state;

    if (freebeeTypes.length === 0) {
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
        freebeeTypes={freebeeTypes}
        isOpen={isOpen}
        close={closeSidebar}
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
  freebeeTypes: state.markers.shared.markerTypes,
});

const mapDispatch = {
  closeSidebar: close,
  openSidebar: open,
  sendFeedback: createFeedback,
  setReadMapMode: () => sharedActions.setMapMode(MAP_MODES.READ),
};

export default connect(mapState, mapDispatch)(FeedbackSidebarContainer);
