export const setUser = (user) => {
  return { type: "user/set", payload: user };
};
export const unsetUser = () => {
  return { type: "user/unset" };
};

export const userLoaded = () => {
  return { type: "user/loaded" };
};
