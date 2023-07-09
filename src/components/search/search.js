import React from "react";
import { SearchName, SearchInput, SearhField } from "./search.styled";

export const Search = ({ text, valueSearch, onChange }) => {
  return (
    <SearhField>
      <SearchName>
        {text}
        <SearchInput value={valueSearch} onChange={onChange}></SearchInput>
      </SearchName>
    </SearhField>
  );
};
