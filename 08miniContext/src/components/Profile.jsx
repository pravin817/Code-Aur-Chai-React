import { useContext } from "react";

// import the context
import UserContext from "../context/userContext";

const Profile = () => {
  // Access the data from the UserContext
  const { user } = useContext(UserContext);

  console.log(user);

  if (!user) {
    return <div>Please LoginIn</div>;
  }

  return <div> Welcome, {user.username}</div>;
};

export default Profile;
