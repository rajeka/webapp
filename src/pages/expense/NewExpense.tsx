import { useFormik } from "formik";

import expenseValidationSchema from "../../validation/expenseValidationSchema";
import { expenseCategories } from "../../utils/expenseCategories";
import Dropdown from "../../components/Dropdown";
import Expense from "../../model/Expense";
import {
  getExpenseByExpenseId,
  saveOrUpdateExpense,
} from "../../services/ExpenseService";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const NewExpense = () => {
  const { expenseId } = useParams<{ expenseId: string }>();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<Expense>({
    name: "",
    amount: "",
    note: "",
    date: new Date().toISOString().split("T")[0],
    category: "",
  });

  useEffect(() => {
    if (expenseId) {
      setLoading(true);
      // fetch expense by expenseId
      getExpenseByExpenseId(expenseId)
        .then((response) => {
          if (response && response.data) {
            setInitialValues(response.data);
            // formik.setValues({
            //   name: expense.name,
            //   amount: expense.amount,
            //   note: expense.note,
            //   date: expense.date,
            //   category: expense.category,
            // });
          }
        })
        .catch((error) => {
          console.error(error);
          setErrors(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [expenseId]);

  const formik = useFormik({
    initialValues, //validationSchema: expenseValidationSchema(),
    enableReinitialize: true,
    onSubmit: (values: Expense) => {
      saveOrUpdateExpense(values)
        .then((response) => {
          if (response && response.status === 201) {
            navigate("/");
          } else if (response && response.status === 200) {
            navigate(`/view/${expenseId}`);
          }
        })
        .catch((error) => {
          console.error(error);
          setErrors(error.message);
        });
    },
    validationSchema: expenseValidationSchema(),
  });

  return (
    <div className="d-flex justify-content-center align-items-center mt-2">
      <div className="container col-md-4 col-sm8 col-xs-12">
        {errors && <p className="text-danger fst-italic">{errors}</p>}
        {loading && <p>Loading...</p>}
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-danger fst-italic">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              value={formik.values.amount}
              onChange={formik.handleChange}
            />
            {formik.touched.amount && formik.errors.amount ? (
              <div className="text-danger fst-italic">
                {formik.errors.amount}
              </div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="note" className="form-label">
              Note
            </label>
            <textarea
              className="form-control"
              id="note"
              name="note"
              value={formik.values.note}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={formik.values.date}
              onChange={formik.handleChange}
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="text-danger fst-italic">{formik.errors.date}</div>
            ) : null}
          </div>
          <Dropdown
            options={expenseCategories}
            id="category"
            name="category"
            label="Category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
            error={formik.errors.category}
            touched={formik.touched.category}
          />
          <button
            type="submit"
            className="btn btn-sm btn-outline-light app-primary-bg-color"
          >
            Save
          </button>
          <button
            className="btn btn-sm btn-outline-light app-primary-bg-color"
            onClick={formik.handleReset}
            type="reset"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};
export default NewExpense;
