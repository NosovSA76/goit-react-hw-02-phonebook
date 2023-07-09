import React from "react";
import { CountMessageStyled } from "./CountMessage.styled";

export const CountMessage = ({ text }) => {
  return <CountMessageStyled>{text}</CountMessageStyled>;
};
