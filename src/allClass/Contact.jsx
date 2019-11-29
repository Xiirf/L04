import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component {
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
      contact, handleCancelEdit, handleDeleteContact, handleSaveEdit, handleClickEdit, modeEdit, compteEdit,
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
                    <label>
Téléphone:
                      {' '}
                      {contact.phone}
                      <input type="text" value={phone} onChange={this.handleSubmitChange} />
                    </label>
                  </td>
                  <td>
                    <input
                      type="button"
                      onClick={() => handleSaveEdit({
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
    name: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
};

export default Contact;
