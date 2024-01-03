import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import { auth, db } from "../config/firebase";
import { initialUser } from "../rudex/auth/authActions";
import { doc, getDoc } from "firebase/firestore";
import { userCartDataInit } from "../rudex/cart/cartActions";

function AppLayout({ children }) {
  const { loading, userData, userUid, isAuthenticated } = useSelector(
    (state) => state.authData
  );
  const { cartData } = useSelector((state) => state.cartData);
  const dispatch = useDispatch();

  console.log(cartData);

  // check user states on app mount
  useEffect(() => {
    if (isAuthenticated) {
      return;
    }
    // check user status
    const unsubscribe = auth.onAuthStateChanged((loggedInUser) => {
      if (loggedInUser && loggedInUser.email) {
        try {
          // dispatch user is logged in
          dispatch(initialUser({ email: loggedInUser.email }));
          // dispatch user cart data
          const fetchCartData = async () => {
            // refrence to user data on firebase
            const cartRef = doc(db, "UsersData", loggedInUser.uid);
            // fetch userData
            const cartRes = await getDoc(cartRef);
            // get userData from userData
            const userData = cartRes.data((d) => d);
            // dispatch success
            dispatch(userCartDataInit(userData.userCart));
          };
          // call fetch cart
          fetchCartData();
        } catch (error) {
          console.log(error);
        }
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
