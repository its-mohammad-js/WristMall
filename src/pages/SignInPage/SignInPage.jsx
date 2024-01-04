import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input, RadioInput } from "../../components/Inputs/Inputs";
import {
  SignInInitialValues,
  SignInValidationSchema,
  signInPageBgUrl,
} from "../../constants";
import { signInWithEmail, signInWithGamil } from "../../rudex/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import { auth, googleProvider } from "../../config/firebase";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import LoaderSpinner from "../../components/Loaders/LoaderSpinner";
import { signInWithRedirect } from "firebase/auth";

const radioOptions = [
  { label: "male", value: "0" },
  { label: "female", value: "1" },
];

function SignInPage() {
  const navigate = useNavigate();
  const { loading, userData, userUid, isAuthenticated } = useSelector(
    (state) => state.authData
  );
  const dispatch = useDispatch();

  // formik options
  const formik = useFormik({
    initialValues: SignInInitialValues,
    onSubmit,
    validationSchema: SignInValidationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  // signIn with formData (email,password)
  function onSubmit(formData) {
    // If he has already created an account on firestore
    if (auth?.currentUser && auth?.currentUser?.email) {
      toast("You are currently a member. Please login");

      navigate("/WristMall/SignUp");
    } else {
      dispatch(signInWithEmail(formData));
    }
  }

  // sigIn with gmail popup
  function signInwithGoogle() {
    // dispatch redux actions 
    dispatch(signInWithGamil());
  }

  // navigate registered users
  useEffect(() => {
    if (isAuthenticated) {
      toast("You are currently a member.");

      navigate("/WristMall/");
    }
  }, [isAuthenticated]);

  return (
    <div
      style={{
        backgroundImage: `url(${signInPageBgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="container mx-auto 2xl:max-w-6xl min-h-screen flex justify-center items-center relative py-8"
    >
      {/* loading screen */}
      {loading && (
        <div className="w-full h-full bg-black bg-opacity-50 backdrop-blur-sm">
          <LoaderSpinner />
        </div>
      )}
      {/* main form */}
      {!loading && (
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
          <div
            id="form-control"
            className="flex flex-col items-center gap-y-1.5 my-2"
          >
            <button
              disabled={loading}
              type="submit"
              className="bg-EerieBlack-600 w-full text-white-100 px-4 py-2 rounded-md hover:bg-primary-100 hover:text-secondary-100 transition-all outline-none"
            >
              SignIn
            </button>
            <button
              onClick={signInwithGoogle}
              disabled={loading}
              type="button"
              className="bg-red-600 w-full text-white-100 px-4 py-2 rounded-md hover:bg-red-400 flex items-center justify-center gap-x-2 transition-all outline-none"
            >
              <FaGoogle /> SignIn With Gmail
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
      )}
    </div>
  );
}

export default SignInPage;
