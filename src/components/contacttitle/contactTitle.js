import React, { useState } from "react";
import {
  ContactTitle,
  ContactTitleText,
  VisibleNoVisibleButton,
} from "./contactTitle.styled";

export const ContactsTitle = ({ text, contactCount, onHandleClick }) => {
  const [isNoSeeButtonVisible, setIsNoSeeButtonVisible] = useState(false);

  const handleButtonClick = () => {
    if (contactCount === 0) {
      alert("У вас відсутні контакти");
    } else {
      onHandleClick();
      setIsNoSeeButtonVisible(!isNoSeeButtonVisible);
    }
  };

  return (
    <ContactTitle>
      <ContactTitleText>{text}</ContactTitleText>
      {contactCount > 0 && (
        <VisibleNoVisibleButton onClick={handleButtonClick}>
          {isNoSeeButtonVisible ? "Hide" : "Show up"}
        </VisibleNoVisibleButton>
      )}
    </ContactTitle>
  );
};
