import { useFormik } from "formik";
import loginValidationSchema from "../../validation/loginValidatioSchema";
import { AuthRequest } from "../../model/AuthRequest";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const { login, loading, errors } = useLogin();
  const formik = useFormik<AuthRequest>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (authRequest: AuthRequest) => {
      console.log(authRequest);
      login(authRequest);
    },
  });

  return (
    <div className="d-flex justify-content-center align-items-center login-background">
      <div className="container col-md-4 col-sm-12">
        <form onSubmit={formik.handleSubmit}>
          {loading && <p>Loading...</p>}
          {errors && <p className="text-danger">{errors}</p>}

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger fst-italic">Email is required!</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger fst-italic">
                Password is required!
              </div>
            ) : null}
          </div>
          {loading && (
            <button
              type="submit"
              className="btn btn-sm btn-outline-light app-primary-bg-color"
              disabled
            >
              Loading....
            </button>
          )}
          {!loading && (
            <button
              type="submit"
              className="btn btn-sm btn-outline-light app-primary-bg-color"
            >
              Login
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
export default Login;
