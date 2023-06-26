import { useState } from "react";
import { useParams } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Daily from "../components/calendar/daily";
import Weekly from "../components/calendar/weekly";
import Monthly from "../components/calendar/monthly";
import Todos from "../components/calendar/todos";

export default function UserCalendar() {
  const { userid } = useParams();
  const [val, setVal] = useState(new Date());
  return (
    <div>
      <div>This is Calendar Page</div>
      <div>Welcome, {userid}!</div>
      <div>
        Selected Data :
        {`${val.getFullYear()}년 ${val.getMonth() + 1}월 ${val.getDate()}일`}
      </div>
      <Calendar onChange={setVal} value={val} />
      <Todos date={val}></Todos>
      {"--------------------"}
      <Daily />
      <Weekly />
      <Monthly />
    </div>
  );
}
