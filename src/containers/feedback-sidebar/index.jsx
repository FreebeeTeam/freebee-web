/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import { FeedbackSidebar } from '../../components';
import { close, open } from '../../redux/actions/ui/feedback-sidebar';
import { thunks } from '../../redux/feedback';
import { isFeedbackSidebarOpenSelector } from '../../redux/selectors/ui';
import type { Feedback } from '../../types/models';

type Props = {
  closeSidebar: () => void,
  openSidebar: () => void,
  sendFeedback: () => void,
  isOpen: boolean,
};

type State = {
  address: string,
  type: string,
  author: string,
  description?: string,
};

class FeedbackSidebarContainer extends React.PureComponent<Props, State> {
  state = {
    address: '',
    type: '',
    author: '',
    description: '',
  }

  handleFieldChange = (name: string) => (e: Event) => {
    this.setState({
      [name]: e.target.value,
    });
  }

  handleSubmit = (): void => {
    const { closeSidebar, sendFeedback } = this.props;
    const {
      type,
      address,
      author,
      description,
    } = this.state;

    const feedback: Feedback = {
      address,
      type,
      author,
      description,
    };

    sendFeedback(feedback);
    closeSidebar();
  }

  handleCancel = (): void => {
    const { closeSidebar } = this.props;

    closeSidebar();
  }

  render() {
    const { isOpen, closeSidebar, openSidebar } = this.props;
    const {
      address,
      author,
      type,
      description,
    } = this.state;

    const feedback: Feedback = {
      address,
      author,
      type,
      description,
    };

    return (
      <FeedbackSidebar
        feedback={feedback}
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
  isOpen: isFeedbackSidebarOpenSelector(state),
});

const mapDispatch = dispatch => ({
  closeSidebar: () => dispatch(close()),
  openSidebar: () => dispatch(open()),
  sendFeedback: (feedback: Feedback) => dispatch(createFeedback(feedback)),
});

export default connect(mapState, mapDispatch)(FeedbackSidebarContainer);
