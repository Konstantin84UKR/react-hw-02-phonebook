import React, { Component } from "react";
import styles from "./contactList.module.css";

export default class ContactList extends Component {

 
  
  render() {

    const {contactsChange,filter,contactDelete} = this.props
    let odd = true;
  
    return (
      <div>
        <ul>
          {contactsChange.map(({id,name,number}, index) => {
          
            if (name.toUpperCase().includes(filter.toUpperCase())) {

              odd = odd ? false : true
              return (
              
                  <li key={id} className={odd===true ? styles.odd : styles.even}>
                    {`${name} : ${number}`}
                   
                    <button  onClick={() => {
                      contactDelete(id);}}
                    > Delete
                    </button>
                  </li>               
              );
            }
            return false;
          })}
        </ul>
      </div>
    );
  }
}
