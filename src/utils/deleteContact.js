export const deleteContact = (prevState, contactID) => {
  const updatedContacts = prevState.contacts.filter(
    (contact) => contact.id !== contactID
  );

  const isSearchVisible = updatedContacts.length > 0;

  return {
    contacts: updatedContacts,
    isSearchVisible,
    isSecondButtonVisible: !isSearchVisible,
  };
};
