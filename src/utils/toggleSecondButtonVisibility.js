export const toggleSecondButtonVisibility = (prevState) => {
  return {
    isSecondButtonVisible: !prevState.isSecondButtonVisible,
    isSearchVisible: prevState.isSecondButtonVisible,
  };
};
