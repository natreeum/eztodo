import axios from "axios";
import config from "../config";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [id, setId] = useState("");
  const [password, setPw] = useState("");
  const nav = useNavigate();
  async function signIn_btn_handler() {
    const signInRes = await axios.post(`${config.HOST}/auth/signin`, {
      id,
      password,
    });
    if (signInRes.status === 200 && signInRes.data.status === true) {
      window.sessionStorage.setItem("id", signInRes.data.data.id);
      window.sessionStorage.setItem("username", signInRes.data.data.username);
      nav(`/cal/${signInRes.data.data.id}`);
    } else alert("Sign In Failed. Try Again");
  }
  useEffect(() => {
    const userId = window.sessionStorage.getItem("id");
    if (userId) nav(`/cal/${userId}`);
  }, []);
  return (
    <div>
      <span>ID : </span>
      <input
        type="text"
        id="i_id"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <br></br>
      <span>PW : </span>
      <input
        type="password"
        id="i_pw"
        onChange={(e) => {
          setPw(e.target.value);
        }}
      />
      <br></br>
      <button id="btn_signin" onClick={signIn_btn_handler}>
        SignIn
      </button>
    </div>
  );
}
