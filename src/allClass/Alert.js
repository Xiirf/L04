import React from 'react';

class Alert extends React.Component {
    render(){
        let boxClass=["alert", "alert-dismissible", "fade", "show"];
        switch(this.props.etat) {
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
            <strong>{this.props.message}</strong>
            <button type="button" onClick = {this.props.handleClickHideAlert} className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        );
    }
}

export default Alert;