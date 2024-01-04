import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { initialUser } from "../rudex/auth/authActions";
import { doc, getDoc } from "firebase/firestore";
import { userCartDataInit } from "../rudex/cart/cartActions";
import LoaderSpinner from "../components/Loaders/LoaderSpinner";

function AppLayout({ children }) {
  // loading state
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useSelector((state) => state.authData);
  const dispatch = useDispatch();

  // check user states on app mount
  useEffect(() => {
    // if user is authenticated return
    if (isAuthenticated) {
      setLoading(false);

      return;
    }
    // check user status
    const unsubscribe = auth.onAuthStateChanged((loggedInUser) => {
      if (loggedInUser && loggedInUser.email) {
        // set loading
        setLoading(true);
        try {
          // dispatch user is logged in
          dispatch(initialUser({ email: loggedInUser.email }));
          // dispatch user cart data
          const fetchCartData = async () => {
            try {
              // refrence to user data on firebase
              const cartRef = doc(db, "UsersData", loggedInUser.uid);
              // fetch userData
              const cartRes = await getDoc(cartRef);
              // get userData from userData
              const userData = cartRes.data((d) => d);
              // dispatch success
              dispatch(userCartDataInit(userData.userCart));

              setLoading(false);
            } catch (error) {
              setLoading(false);
            }
          };
          // call fetch cart
          fetchCartData();
        } catch (error) {
          console.log(error);

          setLoading(false);
        }
      } else {
        console.log("user is not logged in");

        setLoading(false);
      }
    });

    // Remember to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto 2xl:max-w-6xl h-screen flex items-center justify-center bg-Buff-100 bg-opacity-10 animate-pulse">
        <LoaderSpinner />
      </div>
    );
  }

  if (!loading)
    return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    );
}

export default AppLayout;
