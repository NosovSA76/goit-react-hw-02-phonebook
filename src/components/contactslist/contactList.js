import React from "react";
import {
  ContactListContainer,
  ContactListItem,
  ContactsName,
  ContactsPhone,
  DeleteContacts,
} from "./contactList.styled";
import { FcCellPhone, FcBusinessman } from "react-icons/fc";

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListContainer>
      {contacts.map((contact) => (
        <ContactListItem key={contact.id}>
          <ContactsName>
            <FcBusinessman size={24}></FcBusinessman>
            {contact.name}
          </ContactsName>
          <ContactsPhone>
            <FcCellPhone size={24}></FcCellPhone>
            {contact.phone}
          </ContactsPhone>
          <DeleteContacts onClick={() => onDeleteContact(contact.id)}>
            Delete
          </DeleteContacts>
        </ContactListItem>
      ))}
    </ContactListContainer>
  );
};
