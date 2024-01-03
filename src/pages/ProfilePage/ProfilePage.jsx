import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const { isAuthenticated } = useSelector((state) => state.authData);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      toast("You are not a member yet.");

      navigate("/WristMall/SignUp");
    }
  }, [isAuthenticated]);

  return (
    <div className="container mx-auto 2xl:max-w-6xl h-screen bg-red-300 flex items-center justify-center">
      ProfilePage
    </div>
  );
}

export default ProfilePage;
