import { Form, Formik } from "formik";
import { useContext, useEffect } from "react";
import { userData } from "../data/user";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/user.service";
import { UserContext } from "../App";

const LoginPage = ({ handleLogin }) => {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  useEffect(() => {
    if (user && user._id) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onLoginClick = async (values) => {
    const { emailId, password } = values;

    const response = await loginUser({ emailId, password });

    if (response.data) {
      handleLogin(response.data);
      navigate("/");
    }
  };

  const onSignUpClick = () => {
    navigate("/sign-up");
  };

  const onLogoClick = () => {
    navigate("/");
  };

  return (
    <>
      <Formik
        initialValues={userData.LoginInitialValues}
        onSubmit={(values) => onLoginClick(values)}
        validationSchema={userData.LoginValidation}
      >
        {({
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          setErrors,
          values,
        }) => {
          return (
            <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  onClick={onLogoClick}
                  src="/logo.png"
                  alt="logo"
                  width="200"
                  height="200"
                  className="mx-auto h-20 w-auto cursor-pointer"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Log in to your account
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <Form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <div className="mt-2">
                      <Input
                        placeholder="Email Id"
                        name="emailId"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>

                    {errors.emailId &&
                      touched.emailId &&
                      typeof errors.emailId === "string" && (
                        <div className="text-sm text-red-500">
                          {" "}
                          {errors.emailId}
                        </div>
                      )}
                  </div>

                  <div>
                    <Input.Password
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {errors.password &&
                      touched.password &&
                      typeof errors.password === "string" && (
                        <div className="text-sm text-red-500" id="passwordErr">
                          {errors.password}
                        </div>
                      )}
                  </div>

                  <div className="my-4">
                    <div id="authInfo" className="text-sm text-red-500">
                      {/* {error && error} */}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-[#4da58d] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#469781] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#469781]"
                    >
                      Sign In
                    </button>
                  </div>
                </Form>

                <p className="mt-10 text-center text-sm text-gray-500">
                  Don&apos;t have an account ?{" "}
                  <span
                    onClick={onSignUpClick}
                    className="font-semibold leading-6 text-[#4E5A50] cursor-pointer hover:text-black"
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginPage;
