export const handleChangeInput = (e, state, setState) => {
  const { name, value } = e.currentTarget;
  const nameRegex = /^[a-zA-Zа-яА-ЯІіЇїЄєҐґ\s'-]+$/;
  const phoneRegex = /^[+\-\d]+$/;

  if (name === "name" && value !== "" && !nameRegex.test(value)) {
    alert(
      "Name may contain only letters, apostrophe, dash, spaces, and Cyrillic characters. For example Adrian, Jacob Mercer, Іван, Олена"
    );
    return;
  }

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

  setState({ ...state, [name]: value });
};
