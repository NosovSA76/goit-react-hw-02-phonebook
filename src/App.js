import React, { Component } from "react";
import { WrapperPhonebook } from "./components/phonebookwrapper/phonebookwrapper";
import { Title } from "./components/title/title";
import { InputForm } from "./components/addform/addform";
import { ContactsTitle } from "./components/contacttitle/contactTitle";
import { Search } from "./components/search/search";
import { ContactList } from "./components/contactslist/contactList";

export class App extends Component {
  state = {
    contacts: [],
    searchText: "",
    isSecondButtonVisible: false,
  };

  ChangeFilter = (e) => {
    this.setState({ searchText: e.currentTarget.value });
  };

  deleteContact = (contactID) => {
    this.setState(
      (prevState) => ({
        contacts: prevState.contacts.filter(
          (contact) => contact.id !== contactID
        ),
      }),
      () => {
        if (this.state.contacts.length === 0) {
          this.setState({ isSecondButtonVisible: false });
        }
      }
    );
  };

  WriteContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact].sort((a, b) =>
        a.name.localeCompare(b.name)
      ),
      isSecondButtonVisible: true, // Встановлюємо isSecondButtonVisible в true після додавання контакту
    }));
  };

  toggleSecondButtonVisibility = () => {
    this.setState((prevState) => ({
      isSecondButtonVisible: !prevState.isSecondButtonVisible,
    }));
  };

  render() {
    const { searchText, isSecondButtonVisible, contacts } = this.state;
    const normalSearchText = searchText.toLocaleLowerCase();
    const filterContacts = contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(normalSearchText)
    );

    const isNoContacts = contacts.length === 0;

    return (
      <WrapperPhonebook>
        <Title text="PhoneBook" />
        {isSecondButtonVisible && !isNoContacts ? (
          <p>Редагування</p>
        ) : (
          <InputForm onSubmit={this.WriteContact} />
        )}

        <ContactsTitle
          text={
            isSecondButtonVisible && !isNoContacts
              ? "Contacts"
              : "Загальна кількість"
          }
          contactCount={contacts.length} // Передаємо кількість контактів
          onHandleClick={this.toggleSecondButtonVisibility}
        />
        {isSecondButtonVisible && !isNoContacts ? (
          <>
            <Search valueSearch={searchText} onChange={this.ChangeFilter} />
            <ContactList
              contacts={filterContacts}
              onDeleteContact={this.deleteContact}
            />
          </>
        ) : (
          <p>Загальна кількість: {contacts.length}</p>
        )}
      </WrapperPhonebook>
    );
  }
}
