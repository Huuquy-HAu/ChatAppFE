import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { toast, ToastContainer } from "react-toastify";
import { getAPI, postAPI } from "../../config/api";

function Home() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const local = localStorage.getItem("chat");
  const parse = JSON.parse(local);
  useEffect(() => {
    if (!local) {
      navigate("/sign-in");
    } else {
      toast.success(`Xin chào ${parse.gmail} `, { toastOptions });
    }
  }, [local]);

  const logOut = () => {
    removeCookie("chat-app");
    localStorage.removeItem("chat");
    navigate("/sign-in");
  };
  return (
    <>
      <div className="private">
        <h1>Đây là trang home!</h1>
        <button onClick={logOut}>Log out</button>
      </div>
      <ToastContainer />
    </>
  );
}

export default Home;
