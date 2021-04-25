import React, { Component } from "react";
import "./filter.module.css";

export default class Filter extends Component {

  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.handleChange(name, value);
  };

  render() {
    return (
      <div>
        <span>filter:</span>
        <input
          name="filter"
          value={this.props.filter}
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}
