export const setUser = (user) => {
  return { type: "user/set", payload: user };
};
export const unsetUser = () => {
  return { type: "user/unset" };
};
