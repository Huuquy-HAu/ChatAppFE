import React, { useEffect, useState } from "react";
import "./SignIn.css";
// import axios from "axios";
import styled from "styled-components";
import Logo from "../../assets/logo.svg";
import loader from "../../assets/loader.gif";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  // useEffect(() => {
  //   if (localStorage.getItem("chat-app-current-user")) {
  //     navigate("/");
  //   }
  //   handleSubmit();
  // }, []);

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
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      return toast.error("wrong gmail, password", toastOptions);
    }
  };
  return (
    <>
      <FormContainer>
        {loading && loader}
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>Chat App B3</h1>
          </div>
          <input
            type="text"
            placeholder="Gmail"
            name="gmail"
            onChange={(e) => handleChange(e)}
            // min="3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Log In</button>
          <span>
            Don't have an account ? <Link to="/sign-up">Create One.</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
export default SignIn;
