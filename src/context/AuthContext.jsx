import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import api from "../../api";

export const AuthContext =
  createContext();

export const AuthProvider = ({
  children,
}) => {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  // LOAD USER
  useEffect(() => {

    const savedUser =
      localStorage.getItem(
        "user"
      );

    if (savedUser) {

      setUser(
        JSON.parse(savedUser)
      );

    }

  }, []);

  // REGISTER
  const register = async (
    username,
    email,
    password
  ) => {

    try {

      setLoading(true);

      const res =
        await api.post(
          "/routes/register",
          {
            name: username,
            email,
            password,
          }
        );

      setUser(
        res.data.user
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          res.data.user
        )
      );

      return res.data;

    } catch (error) {

      console.log(
        error.response
          ?.data ||
          error.message
      );

    } finally {

      setLoading(false);

    }
  };

  // LOGIN
  const login = async (
    email,
    password
  ) => {

    try {

      setLoading(true);

      const res =
        await api.post(
          "/routes/login",
          {
            email,
            password,
          }
        );

      setUser(
        res.data.user
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          res.data.user
        )
      );

      return res.data;

    } catch (error) {

      console.log(
        error.response
          ?.data ||
          error.message
      );

    } finally {

      setLoading(false);

    }
  };

  // LOGOUT
  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    setUser(null);
  };

  return (

    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);