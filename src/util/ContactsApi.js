class ContactsApi {
  // API_BASE_URL = 'https://fisapptest.herokuapp.com/api/v1';

  static requestHeaders() {
    return {};
  }

  static getAllContacts() {
    const headers = this.requestHeaders();
    const request = new Request('https://fisapptest.herokuapp.com/api/v1/contacts', {
      method: 'GET',
      headers,
      mode: 'cors',
    });

    return fetch(request)
      .then((response) => response.json()).catch((error) => error);
  }

  static updateContact(id, data) {
    return fetch(`https://fisapptest.herokuapp.com/api/v1/contacts/${id}`, {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res)
      .catch((err) => err);
  }

  static addContact(data) {
    return fetch('https://fisapptest.herokuapp.com/api/v1/contacts', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res)
      .catch((err) => err);
  }

  static deleteContact(id) {
    return fetch(`https://fisapptest.herokuapp.com/api/v1/contacts/${id}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res)
      .catch((err) => err);
  }
}

export default ContactsApi;
