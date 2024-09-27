import * as Yup from "yup";

const LoginInitialValues = {
  emailId: "",
  password: "",
};

const LoginValidation = Yup.object().shape({
  emailId: Yup.string()
    .email("Please enter valid email id")
    .required("EmailId is required")
    .matches(
      /[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/,
      "Please enter valid email id"
    ),
  password: Yup.string().required("Password is required"),
});

const RegisterInitialValues = {
  username: "",
  imageUrl: "",
  emailId: "",
  password: "",
};

const RegisterValidation = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username should be atleast 2 letters")
    .required("Username is required"),
  imageUrl: Yup.string(),
  emailId: Yup.string()
    .email("Please enter valid email id")
    .required("EmailId is required")
    .matches(
      /[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/,
      "Please enter valid email id"
    ),
  password: Yup.string()
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[a-zA-Z])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      "Password must be atleast 6 letter long with atleast one special character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string().when("password", (password, field) =>
    password
      ? field
          .required("Confirm Password is required")
          .oneOf(
            [Yup.ref("password")],
            "Password and confirm password must be same"
          )
      : field
  ),
});

export const userData = {
  LoginInitialValues,
  LoginValidation,
  RegisterInitialValues,
  RegisterValidation,
};
