import "./App.css";
import "antd/dist/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import SignIn from "./components/Login/SignIn";
import SignUp from "./components/Login/SignUp";
import Profile from "./components/Profile/Profile";
// import HomePage from "./components/Main/HomePage/HomePage";
import BoxChat from "./components/Main/Oulet/BoxChat";
import Active from "./components/Main/Oulet/Active";
import Spam from "./components/Main/Oulet/Spam";
// import Home from "./components/Main/HomePage/HomePage";
import HomePage from "./components/Main/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/m" element={<HomePage />}>
          <Route index element={<BoxChat></BoxChat>}></Route>
          <Route path="/active" element={<Active></Active>}></Route>
          <Route path="/spam" element={<Spam></Spam>}></Route>
        </Route>
        <Route element={<Profile></Profile>} path="/profile"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
