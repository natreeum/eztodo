import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";
import NewTodo from "../../components/calendar/addTodo";
import Todo from "./todo";

export default function Todos(props) {
  const userId = window.sessionStorage.getItem("id");
  const [todos, setTodos] = useState([]);
  function updateTodo() {
    axios
      .post(`${config.HOST}/todo/list`, {
        userId,
        date: `${props.date.getFullYear()}${
          props.date.getMonth() + 1
        }${props.date.getDate()}`,
      })
      .then((res) => {
        if (res.status === 200) {
          setTodos(res.data);
        } else setTodos([]);
      });
  }

  useEffect(() => {
    updateTodo();
  }, [props.date]);
  return (
    <div>
      <div>
        {`${props.date.getFullYear()}년 ${
          props.date.getMonth() + 1
        }월 ${props.date.getDate()}일`}
      </div>
      <div>
        {todos.length === 0 ? (
          <div>There is nothing to do today!</div>
        ) : (
          todos.map((e) => {
            return <Todo todo={e} />;
          })
        )}
      </div>
      <br />
      <NewTodo
        date={`${props.date.getFullYear()}${
          props.date.getMonth() + 1
        }${props.date.getDate()}`}
        setTodos={setTodos}
      />
    </div>
  );
}
