import * as Yup from "yup";

const expenseValidationSchema = () => {
  Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    amount: Yup.number()
      .required("Amount is required")
      .positive("Amount must be positive"),
    date: Yup.date()
      .required("Date is required")
      .max(new Date(), "Cann't accept future date"),
    category: Yup.string().required("Category is required"),
  });
};
export default expenseValidationSchema;
