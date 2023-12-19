import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Firebase Sign Up and Login/Home";
import Login from "./Firebase Sign Up and Login/Login";
import Signup from "./Firebase Sign Up and Login/Signup";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
