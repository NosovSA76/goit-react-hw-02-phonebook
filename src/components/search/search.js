import React from "react";
import { SearchName, SearchInput, SearhField } from "./search.styled";

export const Search = ({ valueSearch, onChange }) => {
  // const handleSearchChange = (event) => {
  //   onHandleInputChange(event.target.value);
  // };

  return (
    <SearhField>
      <SearchName>Search</SearchName>
      <SearchInput value={valueSearch} onChange={onChange}></SearchInput>
    </SearhField>
  );
};
