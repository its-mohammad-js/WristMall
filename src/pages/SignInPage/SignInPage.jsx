import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input, RadioInput } from "../../components/Inputs/Inputs";
import {
  SignInInitialValues,
  SignInValidationSchema,
  signInPageBgUrl,
} from "../../constants";

const radioOptions = [
  { label: "male", value: "0" },
  { label: "female", value: "1" },
];

function SignInPage() {
  const navigate = useNavigate();
  // const { isAuthenticated, authUser } = useAuth();

  const formik = useFormik({
    initialValues: SignInInitialValues,
    onSubmit,
    validationSchema: SignInValidationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  function onSubmit(values) {
    console.log(values);
    // authUser(values);
  }

  // useEffect(() => {
  //   if (isAuthenticated) navigate("/Your-Currency/");
  // }, [isAuthenticated]);

  return (
    <div
      style={{
        backgroundImage: `url(${signInPageBgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="container mx-auto 2xl:max-w-6xl min-h-screen flex justify-center items-center relative py-8"
    >
      {/* main form */}
      <form
        onSubmit={formik.handleSubmit}
        className="bg-Buff-300 bg-opacity-50 hover:bg-opacity-95 backdrop-blur-sm transition-all mt-10 rounded-md px-4 py-2 md:px-6 md:py-4 w-11/12 md:w-1/2"
      >
        {/* title */}
        <h2 className="neon-title text-center my-3 text-lg md:text-xl font-bold cursor-pointer">
          Welcome To Wrist Mall
        </h2>

        <Input formik={formik} name={"name"} label={"Name"} />

        <Input formik={formik} name={"email"} label={"Email"} />

        <Input formik={formik} name={"password"} label={"Password"} />

        <Input
          formik={formik}
          name={"passwordConfirm"}
          label={"Confirm Password"}
        />

        <RadioInput
          radioOptions={radioOptions}
          formik={formik}
          name={"gender"}
        />

        {/* buttons section */}
        <div id="form-control" className="flex flex-col items-center gap-y-3">
          <button
            type="submit"
            className="bg-EerieBlack-600 text-white-100 px-4 py-2 rounded-md hover:bg-primary-100 hover:text-secondary-100 transition-all outline-none"
          >
            SignIn
          </button>
          <button
            type="button"
            onClick={() => navigate("/WristMall/SignUp")}
            className="md:my-1"
          >
            Already have an account?
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignInPage;
