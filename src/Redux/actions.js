export const SignIn = userData => {
  return {
    type: "SIGN_IN",
    payload: userData,
  };
};

export const SignUp = userData => {
  return {
    type: "SIGN_UP",
    payload: userData,
  };
};
