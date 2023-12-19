import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./Config";

const Home = () => {
  const navigate = useNavigate();
  async function handleLogout(e) {
    e.preventDefault();
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log("error");
    }
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
