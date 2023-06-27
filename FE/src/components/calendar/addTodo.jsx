import { useState } from "react";
import axios from "axios";
import config from "../../config";

export default function NewTodo(props) {
  const [content, setContent] = useState("");
  const userId = window.sessionStorage.getItem("id");
  function addTodoBtnHandler() {
    axios
      .post(`${config.HOST}/todo/newtodo`, {
        userId,
        date: props.date,
        content,
      })
      .then((res) => {
        if (res.status === 201) {
          axios
            .post(`${config.HOST}/todo/list`, { userId, date: props.date })
            .then((res) => {
              if (res.status === 200) props.setTodos(res.data);
            });
        }
      });
  }
  return (
    <div>
      <div>New ToDo</div>
      <input
        type="text"
        onChange={(e) => {
          if (e.target.value.length !== 0) setContent(e.target.value);
        }}
      />
      <button id="btn_add_Todo" onClick={addTodoBtnHandler}>
        add
      </button>
    </div>
  );
}
