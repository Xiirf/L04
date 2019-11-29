import React from 'react';
import PropTypes from 'prop-types';

class NewContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', phone: '' };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangePhone(event) {
    this.setState({ phone: event.target.value });
  }

  handleSubmit(event) {
    const { handleAddContact } = this.props;
    const { name, phone } = this.state;
    handleAddContact({ name, phone });
    event.preventDefault();
  }

  render() {
    const { name, phone } = this.state;
    return (
      <tr>
        <td>
                Nom :
          <input type="text" value={name} onChange={this.handleChangeName} />
        </td>
        <td>
                Téléphone :
          <input type="text" value={phone} onChange={this.handleChangePhone} />
        </td>
        <td colSpan="2">
          <input type="button" value="Add Contact" onClick={this.handleSubmit} />
        </td>
      </tr>
    );
  }
}

NewContact.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};

export default NewContact;
