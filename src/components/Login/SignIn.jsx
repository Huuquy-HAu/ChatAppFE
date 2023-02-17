import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignIn.css";
import { postAPI } from "../../config/api";

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function SignIn() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ gmail: "", password: "" });
  const [loading, setLoading] = useState(false);
  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { gmail, password } = values;
    // console.log(gmail, password);
    if (gmail === "") {
      return toast.error("Khong de trong gmail", toastOptions);
    } else if (password === "") {
      return toast.error("Khong de trong password", toastOptions);
    }
    return true;
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (validateForm()) {
        const { gmail, password } = values;
        setLoading(true);
        const data = await postAPI(
          "/users/sign-in",
          {
            gmail,
            password,
          },
          { withCredentials: true }
        );
        console.log(58, data);
        toast.success("log-in success", toastOptions);

        localStorage.setItem("chat", JSON.stringify(data.data));
        setCookie("chat-app", data.data.token, 30);
        setTimeout(() => {
          navigate("/m");
        }, 2000);
      }
    } catch (error) {
      return toast.error("wrong gmail, password", toastOptions);
    }
  };
  const password = () => {
    let inputPassword = document.getElementById("password");
    if (inputPassword.type === "text") {
      inputPassword.setAttribute("type", "password");
    } else {
      inputPassword.setAttribute("type", "text");
    }
  };
  return (
    <>
      <div className="container-sign-in">
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1 id="h1-Sigin">Chat App B3</h1>
          </div>
          <input
            type="text"
            placeholder="Gmail"
            name="gmail"
            onChange={(e) => handleChange(e)}
            // min="3"
          />
          <div className="input-password">
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              onChange={(e) => handleChange(e)}
            />
            <i className="fa-solid fa-eye" onClick={password}></i>
          </div>
          <button type="submit">Log In</button>
          <span>
            Don't have an account ? <Link to="/sign-up">Create One.</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default SignIn;
