import React, { Component } from "react";
import { WrapperPhonebook } from "./components/Phonebookwrapper/phonebookwrapper";
import { Title } from "./components/Title/title";
import { InputForm } from "./components/Addform/addform";
import { ContactsTitle } from "./components/Contacttitle/contactTitle";
import { Search } from "./components/Search/search";
import { ContactList } from "./components/Contactslist/contactList";
import { ShowButton } from "./components/ShowButton/showButton";
import { CountMessage } from "./components/CountMessage/CountMessage";
import { getCountMessage } from "./utils/getCountMessage";
import { updateContact } from "./utils/updateContact";
import { deleteContact } from "./utils/deleteContact";
import { writeContact } from "./utils/writeContact";
import { toggleSecondButtonVisibility } from "./utils/toggleSecondButtonVisibility";

export class App extends Component {
  state = {
    contacts: [],
    searchText: "",
    isSecondButtonVisible: false,
  };

  componentDidMount() {
    this.setState({ isSecondButtonVisible: true });
  }

  ChangeFilter = (e) => {
    this.setState({ searchText: e.currentTarget.value });
  };

  handleUpdateContact = (contactId, updatedContact) => {
    this.setState((prevState) =>
      updateContact(prevState, contactId, updatedContact)
    );
  };

  handleDeleteContact = (contactID) => {
    this.setState((prevState) => deleteContact(prevState, contactID));
  };

  handleWriteContact = (newContact) => {
    this.setState((prevState) => writeContact(prevState, newContact));
  };

  handleToggleSecondButtonVisibility = () => {
    this.setState((prevState) => toggleSecondButtonVisibility(prevState));
  };

  render() {
    const { searchText, contacts, isSearchVisible } = this.state;
    const normalSearchText = searchText.toLocaleLowerCase();
    const filterContacts = contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(normalSearchText)
    );

    return (
      <WrapperPhonebook>
        <Title text="PhoneBook" />
        {!isSearchVisible && (
          <InputForm
            onSubmit={this.handleWriteContact}
            contacts={contacts}
            updateContact={this.handleUpdateContact}
            onUpdateContact={this.handleUpdateContact}
          />
        )}
        {!isSearchVisible && (
          <CountMessage text={getCountMessage(contacts.length)} />
        )}
        {contacts.length !== 0 && (
          <ShowButton
            contactCount={contacts.length}
            onButtonChange={this.handleToggleSecondButtonVisibility}
          >
            {!isSearchVisible && ""}
          </ShowButton>
        )}
        {isSearchVisible && (
          <>
            <ContactsTitle text="Contacts" />
            <Search
              valueSearch={searchText}
              onChange={this.ChangeFilter}
              text={"Find contacts by name"}
            />
            {filterContacts.length === 0 ? (
              <p>There are no contacts matching the search criteria</p>
            ) : (
              <ContactList
                contacts={filterContacts}
                onDeleteContact={this.handleDeleteContact}
              />
            )}
          </>
        )}
      </WrapperPhonebook>
    );
  }
}
