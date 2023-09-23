export const SignIn = userData => {
  return {
    type: "SIGN_IN",
    payload: userData,
  };
};
export const SetAuthenticated = data => ({
  type: 'IS_AUTHENTICATED',
  payload: data,
});

export const SignUp = userData => {
  return {
    type: "SIGN_UP",
    payload: userData,
  };
};
