import { useState } from "react";

import { authenticate } from "../services/authService";
import { AuthRequest } from "../model/AuthRequest";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string>("");
  const navigate = useNavigate();
  const { updateAuth } = useAuthContext();

  const login = async (authRequest: AuthRequest) => {
    setLoading(true);
    await authenticate(authRequest)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        updateAuth(true);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setErrors(error.response.data.message);
        }
        setErrors(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { login, loading, errors };
};
