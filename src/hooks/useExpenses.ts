import { useState, useEffect } from "react";

import { getExpenses } from "../services.ts/ExpenseService";

const useExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getExpenses()
      .then((res) => setExpenses(res.data))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);
  return { expenses, error, isLoading };
};
export default useExpenses;
