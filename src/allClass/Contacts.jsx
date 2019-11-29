import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';
import Contact from './Contact';
import NewContact from './NewContact';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estAffiche: false,
      contacts: props.contacts,
      etat: '',
      message: '',
      modeEdit: false,
      compteEdit: '',
    };

    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.handleClickHideAlert = this.handleClickHideAlert.bind(this);
    this.handleAddContact = this.handleAddContact.bind(this);
    this.handleDeleteContact = this.handleDeleteContact.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
    this.handleSaveEdit = this.handleSaveEdit.bind(this);
  }

  handleClickEdit(contact) {
    this.setState(({
      modeEdit: true,
      compteEdit: contact.name,
    }));
  }

  handleCancelEdit() {
    this.setState(({
      modeEdit: false,
    }));
  }

  handleSaveEdit(contact) {
    this.setState((previousState) => ({
      contacts: previousState.contacts
        .map((c) => (c.name === contact.name ? Object.assign(c, contact) : c)),
      modeEdit: false,
    }));
  }

  handleClickHideAlert() {
    this.setState(({
      estAffiche: false,
    }));
  }

  handleAddContact(contact) {
    const { contacts } = this.state;
    if (contacts.some((c) => c.name === contact.name)) {
      this.setState(({
        estAffiche: true,
        etat: 'alert-danger',
        message: 'Nom de contact déjà utilisé',
      }));
    } else {
      this.setState((previousState) => ({
        contacts: [...previousState.contacts, contact],
        estAffiche: true,
        etat: 'alert-success',
        message: `Vous avez ajouter le contact : ${contact.name}`,
      }));
    }
  }

  handleDeleteContact(contact) {
    const { contacts } = this.state;
    contacts.splice(contacts.findIndex((c) => c.name === contact.name), 1);
    this.setState(({
      estAffiche: false,
    }));
  }

  render() {
    const {
      estAffiche, etat, message, contacts, compteEdit, modeEdit,
    } = this.state;
    return (
      <div>
        {
          estAffiche && (
          <Alert
            handleClickHideAlert={this.handleClickHideAlert}
            etat={etat}
            message={message}
          />
          )
        }
        <table className="table">
          {
            contacts.map((contact) => (
              <Contact
                contact={contact}
                handleClickEdit={this.handleClickEdit}
                handleDeleteContact={this.handleDeleteContact}
                modeEdit={modeEdit}
                compteEdit={compteEdit}
                handleCancelEdit={this.handleCancelEdit}
                handleSaveEdit={this.handleSaveEdit}
              />
            ))
          }
          <NewContact handleAddContact={this.handleAddContact} />
        </table>
      </div>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      phone: PropTypes.string,
    }),
  ).isRequired,
};
export default Contacts;
