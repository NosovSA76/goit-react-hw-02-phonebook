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
    const nameRegex = /^[a-zA-Zа-яА-ЯІіЇїЄєҐґ\s'-]+$/;
    if (name === "name" && value !== "" && !nameRegex.test(value)) {
      alert(
        "Name may contain only letters, apostrophe, dash, spaces, and Cyrillic characters. For example Adrian, Jacob Mercer, Іван, Олена"
      );
      return;
    }
    const phoneRegex = /^[+\-\d]+$/;
    if (name === "phone" && value !== "") {
      if (!phoneRegex.test(value)) {
        alert("Phone may contain only +, -, and digits.");
        return;
      }
      if (value.length > 15) {
        alert("Phone number should not exceed 15 characters.");
        return;
      }
    }
    this.setState({ [name]: value });
    this.setState({ id: shortid.generate() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone } = this.state;
    const { contacts, onUpdateContact } = this.props;

    if (name.trim() === "" || phone.trim() === "") {
      alert("Fill in all fields!");
      return;
    }

    const existingContact = contacts.find(
      (contact) => contact.name === name && contact.phone !== phone
    );

    if (existingContact) {
      if (
        window.confirm(
          "Another number is recorded for this contact, should I correct it?"
        )
      ) {
        onUpdateContact(existingContact.id, {
          ...existingContact,
          phone: this.state.phone,
        });
        this.reset();
      }
      return;
    }

    const existingContactByName = contacts.find(
      (contact) => contact.name === name && contact.phone === phone
    );

    if (existingContactByName) {
      alert(`Такий контакт вже існує`);
      return;
    }

    const existingContactByPhone = contacts.find(
      (contact) => contact.phone === phone
    );

    if (existingContactByPhone) {
      alert(
        `Such a phone number is recorded for ${existingContactByPhone.name}`
      );
      return;
    }

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
        <Submit>Add contact</Submit>
      </SectionInputs>
    );
  }
}
