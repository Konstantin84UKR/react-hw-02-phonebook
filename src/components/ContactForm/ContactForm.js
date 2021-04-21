import React, { Component } from "react";
import styles from "./contactForm.module.css";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;

    this.props.addContacts(name, number);
    this.setState({
      name: "",
      number: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.elementIntup}>
            <span>Name : </span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          <div className={styles.elementIntup}>
            <span>Number : </span>
            <input
              type="tel"
              name="number"
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              value={this.state.number}
              onChange={this.handleChange}
              required
            />
          </div>

          <button className={styles.button}>Add contact</button>
        </form>
      </div>
    );
  }
}
