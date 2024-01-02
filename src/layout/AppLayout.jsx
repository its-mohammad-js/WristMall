import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import { auth } from "../config/firebase";
import { initialUser } from "../rudex/auth/authActions";

function AppLayout({ children }) {
  const { loading, userData, userUid, isAuthenticated } = useSelector(
    (state) => state.authData
  );
  const dispatch = useDispatch();

  console.log(isAuthenticated);

  // check user states on app mount
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((loggedInUser) => {
      if (loggedInUser && loggedInUser.email) {
        dispatch(initialUser({ email: loggedInUser.email }));
      } else {
        console.log("user is not logged in");
      }
    });

    // Remember to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default AppLayout;
