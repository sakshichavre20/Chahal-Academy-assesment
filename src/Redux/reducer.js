const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_AUTHENTICATED':
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case 'SIGN_IN':
      return {
        ...state,
        user: action.payload,
      };
    case 'SIGN_UP':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;