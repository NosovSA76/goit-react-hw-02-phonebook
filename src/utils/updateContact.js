export const updateContact = (prevState, contactId, updatedContact) => {
  const updatedContacts = prevState.contacts.map((contact) =>
    contact.id === contactId ? updatedContact : contact
  );

  return {
    contacts: updatedContacts,
  };
};
