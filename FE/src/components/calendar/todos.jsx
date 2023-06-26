import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";
import NewTodo from "../../components/calendar/addTodo";

export default function Todos(props) {
  const userId = window.sessionStorage.getItem("id");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .post(`${config.HOST}/todo/list`, { userId, date: props.date })
      .then((res) => setTodos(res.data));
  }, []);
  return (
    <div>
      <div>{`${props.date.getFullYear()}년 ${
        props.date.getMonth() + 1
      }월 ${props.date.getDate()}일`}</div>
      <div>
        {todos.length === 0 ? (
          <div>There is nothing to do today!</div>
        ) : (
          todos.map((e) => <li>{e.content}</li>)
        )}
      </div>
      <NewTodo
        date={`${props.date.getFullYear()}${
          props.date.getMonth() + 1
        }${props.date.getDate()}`}
        setTodos={setTodos}
      />
    </div>
  );
}
