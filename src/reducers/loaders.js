export const userLoadingReducer = (state = true, action) => {
  switch (action.type) {
    case "user/loaded":
      return false;
    default:
      return state;
  }
};
