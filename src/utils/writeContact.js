import shortid from "shortid";

export const writeContact = (prevState, newContact) => {
  const updatedContacts = [
    ...prevState.contacts,
    { ...newContact, id: shortid.generate() },
  ].sort((a, b) => a.name.localeCompare(b.name));

  return {
    contacts: updatedContacts,
    isSearchVisible: false,
  };
};
