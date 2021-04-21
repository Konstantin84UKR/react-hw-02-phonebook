import React, { Component } from "react";
import "./filter.module.css";

export default class Filter extends Component {
  onChange = (event) => {
    const { value } = event.target;
    this.setState({ text: value });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.handleChange(name, value);
  };

  render() {
    return (
      <div>
        <span>filter:</span>
        <input
          type="filter"
          name="filter"
          title="filter"
          value={this.props.filter}
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}
