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
          "/users/register",
          {
            name: username,
            email,
            password,
          }
        );

      console.log(res.data);

      if (
        res.data?.user
      ) {

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

        return {
          success: true,
          user:
            res.data.user,
        };
      }

      return {
        success: false,
        message:
          res.data?.message ||
          "Register failed",
      };

    } catch (error) {

      console.log(
        error.response
          ?.data ||
          error.message
      );

      return {
        success: false,
        message:
          error.response
            ?.data
            ?.message ||
          "Something went wrong",
      };

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
          "/users/login",
          {
            email,
            password,
          }
        );

      console.log(res.data);

      if (
        res.data?.user
      ) {

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

        return {
          success: true,
          user:
            res.data.user,
        };
      }

      return {
        success: false,
        message:
          res.data?.message ||
          "Login failed",
      };

    } catch (error) {

      console.log(
        error.response
          ?.data ||
          error.message
      );

      return {
        success: false,
        message:
          error.response
            ?.data
            ?.message ||
          "Invalid credentials",
      };

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