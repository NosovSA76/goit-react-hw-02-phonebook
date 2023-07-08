import React from "react";
import {
  ContactListContainer,
  ContactListItem,
  ContactsName,
  ContactsPhone,
  DeleteContacts,
} from "./contactList.styled";

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListContainer>
      {contacts.map((contact) => (
        <ContactListItem key={contact.id}>
          <ContactsName>{contact.name}</ContactsName>
          <ContactsPhone>{contact.phone}</ContactsPhone>
          <DeleteContacts onClick={() => onDeleteContact(contact.id)}>
            Delete
          </DeleteContacts>
        </ContactListItem>
      ))}
    </ContactListContainer>
  );
};
