import { useFormik } from "formik";
import { Profile } from "../model/Profile";
import profileValidationSchema from "../validation/profileValidationSchema";
import { useRegister } from "../hooks/useRegister";

const Register = () => {
  const { register, loading, errors, toast } = useRegister();

  const formik = useFormik<Profile>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: profileValidationSchema,
    onSubmit: (profile: Profile, { resetForm }) => {
      // resetForm is formik function to reset form
      register(profile);
      resetForm();
      console.log(profile);
    },
  });

  return (
    <div className="d-flex justify-content-center align-items-center login-background">
      <div className="container col-md-4 col-sm-12">
        <form onSubmit={formik.handleSubmit}>
          {loading && <p>Loading...</p>}
          {errors && <p className="text-danger">{errors}</p>}
          {toast && <p className="text-success">{toast}</p>}
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
              <div className="text-danger fst-italic">Name is required!</div>
            ) : null}
          </div>
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
          <div className="mb-3">
            <label htmlFor="retypePassword" className="form-label">
              Retype Password
            </label>
            <input
              type="password"
              className="form-control"
              id="retypePassword"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-danger fst-italic">
                Password did not match!
              </div>
            ) : null}
          </div>
          <button
            type="submit"
            className="btn btn-sm btn-primary btn-outline-light"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;
