import { createContext, useContext, useReducer } from "react";

// Create the AuthContext
const AuthContext = createContext();

// Initial state for the auth context
const initialState = {
  user: null,
  showAuthModal: false,
};

// Reducer function to handle auth actions
const authReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_AUTH_MODAL":
      return { ...state, showAuthModal: true };
    case "HIDE_AUTH_MODAL":
      return { ...state, showAuthModal: false };
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

// AuthProvider component to wrap the app
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ ...state, authDispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
