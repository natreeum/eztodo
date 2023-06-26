import { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../config";
import axios from "axios";
export default function SignUp() {
  const [isDup, setIsDup] = useState(true);
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const navigate = useNavigate();
  function dupButtonHandler() {
    if (id.length !== 0)
      axios.get(`${config.HOST}/auth/checkdup/${id}`).then((res) => {
        if (res.status === 200) {
          setIsDup(res.data);
          if (res.data) {
            document.querySelector("#dupdMsg").innerHTML = "Not Available";
          } else {
            document.querySelector("#dupdMsg").innerHTML = "Available";
          }
        }
      });
  }
  function signupBtnHandler() {
    axios
      .post(`${config.HOST}/auth/signup`, { id, username, password: pw })
      .then((res) => {
        if (res.status === 201) {
          navigate("/");
        } else {
          alert("SignUp Failed. Try Again");
        }
      });
  }
  function idHandler(p) {
    setId(p.target.value);
    setIsDup(true);
  }
  function usernameHandler(p) {
    setUsername(p.target.value);
  }
  function pwHandler(p) {
    setPw(p.target.value);
  }
  function pwCheckHandler(p) {
    setPwCheck(p.target.value);
  }
  return (
    <div>
      <span>ID : </span>
      <input type="text" id="i_id" onChange={idHandler} />
      <button id="btn_signin" onClick={dupButtonHandler}>
        Check Duplicate
      </button>
      <span id="dupdMsg"></span>
      <br></br>
      <span>USERNAME : </span>
      <input type="text" id="i_username" onChange={usernameHandler} />
      <br></br>
      <br></br>
      <span>PW : </span>
      <input type="text" id="i_pw" onChange={pwHandler} />
      <br></br>
      <span>Re-type PW : </span>
      <input type="text" id="i_pw" onChange={pwCheckHandler} />
      <br></br>
      <button
        id="btn_signup"
        disabled={isDup || !(pw === pwCheck && pw.length !== 0)}
        onClick={signupBtnHandler}
      >
        SignUp
      </button>
    </div>
  );
}
