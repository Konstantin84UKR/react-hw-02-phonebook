import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm.js";
import ContactList from "./components/ContactList/ContactList .js";
import Filter from "./components/Filter/Filter.js";
import styles from "./app.module.css";

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

  contactAdd(prevState, name, number) {
    let { contacts } = prevState;

    for (let index = 0; index < contacts.length; ++index) {
      if (contacts[index].name === name) {
        alert(`${name} is already in contacts`);
        return {};
      }
    }

    let currentID = contacts[contacts.length - 1].id;
    currentID = parseInt(currentID.substring(3)) + 1;

    const newContact = {
      id: `id-${currentID}`,
      name: name,
      number: number,
    };

    let result = {
      contacts: [...contacts, newContact],
    };
    return result;
  }

  handleAddContacts = (name, number) => {
    this.setState(this.contactAdd(this.state, name, number));
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  addFilter = (prevState, value) => {
    let result = {
      filter: `${prevState.filter}${value}`,
    };
    return result;
  };

  handleChangeFilter = (value) => {
    this.setState(this.addFilter(this.state, value));
  };

  contactDelete(prevState, id) {
    let { contacts } = prevState;
    let result = contacts.filter((item) => {
      return item.id !== id;
    });
    return { contacts: result };
  }

  handleContactDelete = (id) => {
    this.setState(this.contactDelete(this.state, id));
  };

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
    return (
      <div>
        <div className={styles.container}>
          <h1>Phonebook</h1>
          <ContactForm
            name={this.state.name}
            number={this.state.number}
            addContacts={this.handleAddContacts}
            handleChange={this.handleChange}
          />
        </div>
        <div className={styles.container}>
          <h2>Contacts</h2>
          <Filter filter={this.state.filter} handleChange={this.handleChange} />
          <ContactList
            contactsChange={this.state.contacts}
            filter={this.state.filter}
            contactDelete={this.handleContactDelete}
          />
        </div>
      </div>
    );
  }
}
