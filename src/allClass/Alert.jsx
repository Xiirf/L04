import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Alert extends Component {
  getEtat() {
    const { etat } = this.props;
    switch (etat) {
      case 'alert-warning':
        return 'alert-warning';
      case 'alert-success':
        return 'alert-success';
      case 'alert-danger':
        return 'alert-danger';
      default:
        return '';
    }
  }

  render() {
    const { handleClickHideAlert, message } = this.props;
    const boxClass = ['alert', 'alert-dismissible', 'fade', 'show'];
    boxClass.push(this.getEtat());
    return (
      <div className={boxClass.join(' ')} role="alert">
        <strong>{message}</strong>
        <button type="button" onClick={handleClickHideAlert} className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

Alert.propTypes = {
  handleClickHideAlert: PropTypes.func.isRequired,
  etat: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Alert;
