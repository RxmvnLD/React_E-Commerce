import { createContext, useEffect, useReducer } from "react";
import { TYPES } from "../actions/auth.actions";

import { getToken } from "../helpers/axiosInstance";
import user4 from "../helpers/user";

import { authReducer, authInitialState } from "../reducers/auth.reducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);
  useEffect(() => {
    if (getToken()) {
      dispatch({
        type: TYPES.LOGGED_IN,
        payload: { success: true, user: user4 },
      });
      console.log("logged in");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthProvider };
