import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Daily from "../components/calendar/daily";
import Weekly from "../components/calendar/weekly";
import Monthly from "../components/calendar/monthly";
import Todos from "../components/calendar/todos";

export default function UserCalendar() {
  const { userid } = useParams();
  const [val, setVal] = useState(new Date());
  const nav = useNavigate();
  function signoutHandler() {
    window.sessionStorage.removeItem("id");
    window.sessionStorage.removeItem("username");
    nav("/");
  }
  return (
    <div>
      <div>This is Calendar Page</div>
      <span>Welcome, {userid}!</span>
      <button onClick={signoutHandler}>Sign Out</button>
      <br></br>
      <Calendar onChange={setVal} value={val} />
      <Todos date={val}></Todos>
      {"--------------------"}
      <Daily />
      <Weekly />
      <Monthly />
    </div>
  );
}
