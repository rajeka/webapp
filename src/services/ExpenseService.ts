import apiClient from "../config/api-client";
import Expense from "../model/Expense";

export const getExpenses = () => {
  return apiClient.get<Expense[]>("/expenses");
};

export const getExpenseByExpenseId = (expenseId: string) => {
  return apiClient.get<Expense>(`/expenses/${expenseId}`);
};

export const deleteExpenseByExpenseId = (expenseId: string) => {
  return apiClient.delete<Expense>(`/expenses/${expenseId}`);
};

export const saveOrUpdateExpense = (expense: Expense) => {
  console.log(expense);
  return apiClient.post<Expense>("/expenses", expense); // POST for save, PUT for update
};
