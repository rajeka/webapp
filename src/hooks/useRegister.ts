import { useState } from "react";
import { Profile } from "../model/Profile";
import { createProfile } from "../services/authService";

export const useRegister = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string>("");
  const [toast, setToast] = useState<string>("");

  const register = async (profile: Profile) => {
    setLoading(true);
    await createProfile(profile)
      .then((response) => {
        if (response && response.status === 201) {
          setToast("Profile created successfully!");
        }
      })
      .catch((error) => setErrors(error.message))
      .finally(() => {
        setLoading(false);
      });
  };
  return { register, loading, errors, toast };
};
