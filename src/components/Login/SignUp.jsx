import React, { useState, useEffect } from "react";
// import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";
import { postAPI } from "../../config/api";

function SignUp() {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values, setValues] = useState({
    userName: "",
    gmail: "",
    password: "",
    confirmPassword: "",
  });

  // useEffect(() => {
  //   if (localStorage.getItem("chat")) {
  //     navigate("/");
  //   }
  // }, []);

  const handleChange = (event) => {
    // console.log(34, event.target.name, event.target.value);
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    try {
      const { gmail, userName, password, confirmPassword } = values;
      console.log(41, userName, gmail, password, confirmPassword);
      const mailFormat = /^([a-zA-Z0-9_\.\-])+\@gmail.com/;
      if (password !== confirmPassword) {
        toast.error("Mật khẩu không khớp nhau !", toastOptions);
      } else if (!mailFormat.test(gmail)) {
        toast.error("Sai định dạng gmail !", toastOptions);
      } else if (userName.length < 2) {
        toast.error("Tên người dùng phải 2 ký tự trở lên !", toastOptions);
      } else if (password.length < 6) {
        toast.error("Mật khẩu ít nhất phải  6 ký tự !", toastOptions);
      } else {
        const data = await postAPI(
          "/users/sign-up",
          {
            userName,
            gmail,
            password,
          },
          { withCredentials: true }
        );
        toast.success("create success", toastOptions);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.log(68, error);
      // console.log(69, error.AxiosError.response.data.message);
      toast.error("username hoac gmail da ton tai", toastOptions);
    }
  };

  return (
    <>
      <FormContainer>
        <div className="container" action="#">
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>chat app b3</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="userName"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Gmail"
            name="gmail"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button onClick={handleSubmit}>Create User</button>
          <span>
            Already have an account ? <Link to="/sign-in">Login.</Link>
          </span>
        </div>
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
  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
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

export default SignUp;
