import { useEffect, useState } from "react";
import Expense from "../model/Expense";
import { getExpenseByExpenseId } from "../services/ExpenseService";

const useExpenseByExpenseId = (expenseId: string) => {
  const [expense, setExpense] = useState<Expense | undefined>();
  const [errors, setErrors] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getExpenseByExpenseId(expenseId)
      .then((res) => setExpense(res.data))
      .catch((err) => {
        console.log(err);
        setErrors(err.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { expense, errors, isLoading, setIsLoading, setErrors };
};
export default useExpenseByExpenseId;
