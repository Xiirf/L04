/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { phone: '' };

    this.handleSubmitChange = this.handleSubmitChange.bind(this);
  }

  handleSubmitChange(event) {
    this.setState({ phone: event.target.value });
  }

  render() {
    const {
      contact, handleCancelEdit, handleDeleteContact,
      handleSaveEdit, handleClickEdit, modeEdit, compteEdit,
    } = this.props;
    const { phone } = this.state;
    return (
      <tr>
        <td>
Nom :
          {' '}
          {contact.name}
        </td>
        {
            (modeEdit && compteEdit === contact.name)
              ? (
                <>
                  <td>
Téléphone:
                    {' '}
                    {contact.phone}
                    <input type="text" value={phone} onChange={this.handleSubmitChange} />
                  </td>
                  <td>
                    <input
                      type="button"
                      onClick={() => handleSaveEdit({
                        _id: contact._id,
                        name: contact.name,
                        phone,
                      })}
                      value="Save"
                    />
                    <input
                      type="button"
                      onClick={() => handleCancelEdit(contact)}
                      value="Cancel"
                    />
                  </td>
                </>
              )
              : (
                <>
                  <td>
Téléphone:
                    {' '}
                    {contact.phone}
                  </td>
                  <td>
                    <input
                      type="button"
                      onClick={() => handleClickEdit(contact)}
                      value="Modifier"
                    />
                  </td>
                </>
              )
            }

        <td>
          <input
            type="button"
            onClick={() => handleDeleteContact(contact)}
            value="Supprimer"
          />
        </td>
      </tr>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.exact({
    _id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  handleCancelEdit: PropTypes.func.isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
  handleSaveEdit: PropTypes.func.isRequired,
  handleClickEdit: PropTypes.func.isRequired,
  modeEdit: PropTypes.bool.isRequired,
  compteEdit: PropTypes.string.isRequired,
};

export default Contact;
