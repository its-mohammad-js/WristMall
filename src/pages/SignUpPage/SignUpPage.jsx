import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import { CheckBoxInput, Input } from "../../components/Inputs/Inputs";
import { useNavigate } from "react-router-dom";
import { signUpPageBgUrl } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { signUpWithEmail } from "../../rudex/auth/authActions";
import { auth } from "../../config/firebase";
import toast from "react-hot-toast";

const initialValues = {
  email: "",
  password: "",
  remember: true,
};

const checkBoxOptions = [{ label: "Remember Me", value: "Remember Me" }];

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invaild email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  remember: Yup.boolean(),
});

function SignUpPage() {
  const navigate = useNavigate();
  const { loading, userData, userUid, isAuthenticated } = useSelector(
    (state) => state.authData
  );
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  function onSubmit(formData) {
    dispatch(signUpWithEmail(formData));
  }

  useEffect(() => {
    if (isAuthenticated || auth?.currentUser || auth?.currentUser?.email)
      navigate("/WristMall/");

    toast("You are currently a member.");
  }, [isAuthenticated, auth]);

  return (
    <div
      style={{
        backgroundImage: `url(${signUpPageBgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="container mx-auto 2xl:max-w-6xl h-screen flex justify-center items-center relative"
    >
      {/* main form */}
      <form
        onSubmit={formik.handleSubmit}
        className="bg-Buff-300 bg-opacity-50 hover:bg-opacity-95 backdrop-blur-sm transition-all shadow-sm rounded-md px-4 py-2 md:px-6 md:py-4 w-11/12 md:w-1/2"
      >
        {/* title */}
        <h2 className="neon-title text-center my-3 text-lg font-bold cursor-pointer">
          Welcome Back
        </h2>
        {/* email input */}
        <Input formik={formik} name={"email"} label={"Email"} />
        {/* password input */}
        <Input formik={formik} name={"password"} label={"Password"} />
        {/*  remember me checkbox */}
        <CheckBoxInput
          checkOptions={checkBoxOptions}
          formik={formik}
          name={"remember"}
        />

        {/* buttons section */}
        <div
          id="form-control"
          className="flex flex-col items-center gap-y-1.5 my-2"
        >
          <button
            type="submit"
            className="bg-EerieBlack-600 text-white-100 px-4 py-2 rounded-md hover:bg-primary-100 hover:text-secondary-100 transition-all"
          >
            SignUp
          </button>
          <button type="button" onClick={() => navigate("/WristMall/SignIn")}>
            Don't have an account?
          </button>
        </div>
      </form>
      {/* background picture */}
      <img
        src="./images/logIn-backround.jpg"
        alt="backgroun-money"
        className="w-full h-full absolute z-[-1] object-cover opacity-40"
      />
    </div>
  );
}

export default SignUpPage;
