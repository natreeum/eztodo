import { useState } from "react";
import axios from "axios";
import config from "../../config";

export default function (props) {
  const [checked, setChecked] = useState(props.todo.isDone);

  function checkHandler(p) {
    axios
      .post(`${config.HOST}/todo/updateisdone`, {
        id: props.todo.id,
        isDone: p.target.checked,
      })
      .then((res) => {
        setChecked(res.data.isDone);
      });
  }

  return (
    <li>
      <span>{props.todo.content}</span>
      <input type="checkbox" checked={checked} onChange={checkHandler}></input>
    </li>
  );
}
