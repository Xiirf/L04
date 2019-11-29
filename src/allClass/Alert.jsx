import React from 'react';
import PropTypes from 'prop-types';

class Alert extends React.Component {
  render() {
    const { etat, message } = this.state;
    const { handleClickHideAlert } = this.props;
    const boxClass = ['alert', 'alert-dismissible', 'fade', 'show'];
    switch (etat) {
      case 'alert-warning':
        boxClass.push('alert-warning');
        break;
      case 'alert-success':
        boxClass.push('alert-success');
        break;
      case 'alert-danger':
        boxClass.push('alert-danger');
        break;
      default:
    }

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
};

export default Alert;
