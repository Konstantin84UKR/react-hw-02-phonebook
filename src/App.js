import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm.js";
import ContactList from "./components/ContactList/ContactList .js";
import Filter from "./components/Filter/Filter.js";
import styles from "./app.module.css";
import {v4} from 'uuid';

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

// ADD CONTACT ----------------------
  contactAdd( { contacts }, name, number) {
    
    if (contacts.some(item => item.name === name)) {
      alert(`${name} is already in contacts`);
        return {};
    }  
   
    const newContact = {
      id: v4(),
      name: name,
      number: number,
    };

    return {
      contacts: [...contacts, newContact],
    };
  }
  handleAddContacts = (name, number) => {
    this.setState(this.contactAdd(this.state, name, number));
  };
// FILTER ---------------------------
  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

// DELETE CONTACT --------------------
  contactDelete({ contacts }, id) {
    let result = contacts.filter((item) => {
      return item.id !== id;
    });
    return { contacts: result };
  }

  handleContactDelete = (id) => {
    this.setState(this.contactDelete(this.state, id));
  };
//------------------------------------  
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.filter !== nextState.filter) {
      return true;
    }
    if (this.state.contacts !== nextState.contacts) {
      return true;
    }
    return false;
  }

  render() {
    const {contacts,filter} = this.state;

    return (
      <div>
        <div className={styles.container}>
          <h1>Phonebook</h1>
          <ContactForm
            addContacts={this.handleAddContacts}
          />
        </div>
        <div className={styles.container}>
          <h2>Contacts</h2>
          <Filter filter={this.state.filter} handleChange={this.handleChange} />
          <ContactList
            contactsChange={contacts}
            filter={filter}
            contactDelete={this.handleContactDelete}
          />
        </div>
      </div>
    );
  }
}
