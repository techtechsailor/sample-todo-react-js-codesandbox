import ToDoTask from "./ToDoTask.js";
import Button from "./Button.js";
import { useState } from "react";

export default function ToDoList() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");

  //タスクをタスクリストに追加する
  function addTask() {
    if (task === "") return; //空白の場合はタスクを追加しない
    setTodoList([...todoList, task]); //リストにタスクを追加
    setTask(""); //タスク追加後に入力欄をリセット
  }

  //該当IDのタスクをTodoListから削除する
  function deleteTask(id) {
    console.log(todoList);
    console.log(todoList.filter((todo, index) => index !== id));
    setTodoList(todoList.filter((todo, index) => index !== id));
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
            return (
              <>
                <ToDoTask id={index} content={todo} />
                <Button onClick={() => deleteTask(index)}>delete</Button>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
