import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { createOrder } from "../store/actions";

class CreateOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: "",
      location: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createOrder(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="quantity">quantity</label>
        <input
          className="form-input"
          type="text"
          name="quantity"
          value={this.state.quantity}
          onChange={this.handleChange}
        />
        <label htmlFor="location">location</label>
        <input
          className="form-input"
          type="text"
          name="location"
          value={this.state.location}
          onChange={this.handleChange}
        />

        <button className="button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default connect(
  () => ({}),
  { createOrder }
)(CreateOrder);
