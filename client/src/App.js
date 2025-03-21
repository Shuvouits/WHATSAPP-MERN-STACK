import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./features/userSlice";

function App() {

 // const user = useSelector((state) => state.user);
  const { user } = useSelector((state) => ({ ...state })); // Data changes when state change
  console.log(user);
  return (
    <div className="dark">

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
