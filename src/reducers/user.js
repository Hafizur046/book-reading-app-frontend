export default function userReducer(user = {}, action) {
  switch (action.type) {
    case "user/set":
      return action.payload;
    case "user/unset":
      return {};
  }
  return user;
}
