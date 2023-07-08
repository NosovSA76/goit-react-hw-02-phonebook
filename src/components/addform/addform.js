import React, { Component } from "react";
import shortid from "shortid";
import {
  NameInputTitle,
  NameInput,
  PhoneInputTitle,
  PhoneInput,
  SectionInputs,
  Submit,
} from "./addform.styled";

export class InputForm extends Component {
  state = {
    name: "",
    phone: "",
    id: "",
  };

  ChangeInput = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    this.setState({ id: shortid.generate() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ id: shortid.generate() });
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", phone: "", id: "" });
  };

  render() {
    return (
      <SectionInputs onSubmit={this.handleSubmit}>
        <NameInputTitle>
          Name
          <NameInput
            name="name"
            value={this.state.name}
            onChange={this.ChangeInput}
          ></NameInput>
        </NameInputTitle>
        <PhoneInputTitle>
          Phone
          <PhoneInput
            name="phone"
            value={this.state.phone}
            onChange={this.ChangeInput}
          ></PhoneInput>
        </PhoneInputTitle>
        <Submit>Додати</Submit>
      </SectionInputs>
    );
  }
}
