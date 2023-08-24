import ToDoTask from "./ToDoTask.js";
import Button from "./Button.js";
import { useState } from "react";

export default function ToDoList() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");

  //タスクをタスクリストに追加する
  function addTask() {
    if (task === "") {
      return;
    }
    setTodoList([...todoList, task]); //リストにタスクを追加
    setTask(""); //タスク追加後に入力欄をリセット
  }

  return (
    <>
      <div>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="write task description"
        />
        <Button onClick={() => addTask()}>add task</Button>
      </div>
      <div>
        <ul>
          {todoList.map((todo, index) => {
            return <ToDoTask id={index} content={todo} />;
          })}
        </ul>
      </div>
    </>
  );
}
