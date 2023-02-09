import React from "react";
import { useNavigate } from "react-router";
import { postAPI } from "../../config/api";

function LogIn() {
  const nav = useNavigate();
  const login = async () => {
    const gmail = document.querySelector("#gmail").value;
    const password = document.querySelector("#password").value;
    console.log(8, gmail, password);
    try {
      const data = await postAPI("/users/sign-in", { gmail, password });
      console.log(11, data);
      if (data.status === 200) {
        nav("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Log-In</h1>
      <input type="text" name="gmail" placeholder="Gmail" id="gmail" /> <br />
      <input
        type="text"
        name="password"
        placeholder="Password"
        id="password"
      />{" "}
      <br />
      <button onClick={login}>LogIn</button>
    </div>
  );
}

export default LogIn;
