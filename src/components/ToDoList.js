import ToDoTask from "./ToDoTask.js";
import Button from "./Button.js";
import { useState } from "react";

export default function ToDoList() {
  const [todoList, setTodoList] = useState([]);

  //タスクをタスクリストに追加する
  function addTask(content) {
    setTodoList([...todoList, content]);
  }

  return (
    <>
      <div>
        <Button onClick={() => alert("add task!")}>alert</Button>
      </div>
      <div>
        <Button onClick={() => addTask("add")}>add task</Button>
      </div>
      <div>
        <ul>
          {todoList.map((todo, index) => {
            return <ToDoTask id={index} content={todo + index} />;
          })}
        </ul>
      </div>
    </>
  );
}
