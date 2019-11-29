import React from 'react';
import Contacts from './allClass/Contacts';
import './App.css';

function App() {
  const contacts = [{ name: 'Flavien', phone: '123' }, { name: 'Flavien2', phone: '123' }, { name: 'Flavien3', phone: '123' }];
  return (
    <div className="App">
      <h1>Test</h1>
      <div>
        <Contacts contacts={contacts} />
      </div>
    </div>
  );
}

export default App;
