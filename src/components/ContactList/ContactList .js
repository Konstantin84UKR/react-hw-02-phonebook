import React, { Component } from "react";
import styles from "./contactList.module.css";

export default class ContactList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.contactsChange.map((item, index) => {
            let nameFilter = item.name.toUpperCase();
            let filter = this.props.filter.toUpperCase();
            let odd_even = index % 2 === 0 ? styles.odd : styles.even;
            if (nameFilter.indexOf(filter) >= 0) {
              return (
                <div key={item.id} className={odd_even}>
                  <li>
                    {`${item.name} : ${item.number}`}

                    <button
                      onClick={() => {
                        this.props.contactDelete(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                </div>
              );
            }
            return false;
          })}
        </ul>
      </div>
    );
  }
}
