import { useState } from "react";
import { signout } from "../services/authService";
import { useAuthContext } from "./useAuthContext";

export const useSignout = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string>("");
  const { updateAuth } = useAuthContext();

  const logout = () => {
    setLoading(true);
    signout()
      .then((response) => {
        if (response && response.status === 204) {
          localStorage.clear();
          updateAuth(false);
        }
      })
      .catch((error) => setErrors(error.message))
      .finally(() => {
        setLoading(false);
      });
  };
  return { logout };
};
