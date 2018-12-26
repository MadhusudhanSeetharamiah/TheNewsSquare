import React, { Component } from "react";
import PropsTypes from "prop-types";

class Notification extends Component {
  componentWillReceiveProps(nexProps) {
    const { notificationMessage: _notificationMessage } = this.props;
    const { notificationMessage } = nexProps;
    if (!_notificationMessage && notificationMessage) {
      if (this.notificationDiv) {
        this.notificationDiv.className = "show";
        let that = this;
        setTimeout(function() {
          that.notificationDiv && (that.notificationDiv.className = " ");
        }, 10000);
      }
    }
  }

  render() {
    return (
      <div
        ref={nfmsg => {
          this.notificationDiv = nfmsg;
        }}
        id="notification_div"
      >
        {this.props.notificationMessage}
      </div>
    );
  }
}

Notification.propTypes = {
  notificationMessage: PropsTypes.string.isRequired
};
export default Notification;
