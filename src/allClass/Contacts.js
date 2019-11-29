import React from 'react';
import Alert from './Alert';
import Contact from './Contact';
import NewContact from './NewContact';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lastEdit: {name: "Flavien", phone: "123"}, estAffiche: false,
                  contacts : props.contacts, etat: '', message: '', modeEdit: false, compteEdit: ''};

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
      compteEdit: contact.name
    }));
  }

  handleCancelEdit() {
    this.setState(({
      modeEdit: false
    }));
  }

  handleSaveEdit(contact){
    this.setState(previousState =>({
      contacts: previousState.contacts.map(c => (c.name === contact.name ? Object.assign(c, contact) : c)),
      modeEdit: false
    }));
  }

  handleClickHideAlert() {
    this.setState(({
      estAffiche: false
    }));
  }

  handleAddContact(contact){
    this.state.contacts.some(c => c.name === contact.name)?
      this.setState(({
        estAffiche: true,
        etat: "alert-danger",
        message: 'Nom de contact déjà utilisé'
      }))
      :
      this.setState(previousState =>({
        contacts: [...previousState.contacts, contact],
        estAffiche: true,
        etat: "alert-success",
        message: 'Vous avez ajouter le contact : ' + contact.name
      }));
  }

  handleDeleteContact(contact){
    this.state.contacts.splice(this.state.contacts.findIndex(c => c.name === contact.name),1)
    this.setState(previousState =>({
      estAffiche: false
    }));
  }

  render() {
    return (
      <div>
        {
          this.state.estAffiche &&  <Alert handleClickHideAlert = {this.handleClickHideAlert} 
                                    etat = {this.state.etat}
                                    message = {this.state.message}/>
        }
        <table className="table">
          {
            this.state.contacts.map((contact) => (
              <Contact contact = {contact}  handleClickEdit = {this.handleClickEdit} 
                                            handleDeleteContact = {this.handleDeleteContact}
                                            modeEdit = {this.state.modeEdit}
                                            compteEdit = {this.state.compteEdit}
                                            handleCancelEdit = {this.handleCancelEdit}
                                            handleSaveEdit = {this.handleSaveEdit}/>
            ))
          }
          <NewContact handleAddContact = {this.handleAddContact}/>
        </table>
      </div>
    );
  }
}

export default Contacts;