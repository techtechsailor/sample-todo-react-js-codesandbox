import ToDoTask from "./ToDoTask.js";
import CompletedTask from "./CompletedTask.js";
import Button from "./Button.js";
import { useState } from "react";

export default function ToDoList() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  

  //タスクをタスクリストに追加する
  function addTask() {
    if (task === "") return; //空白の場合はタスクを追加しない
    setTodoList([...todoList, task]); //リストにタスクを追加
    setTask(""); //タスク追加後に入力欄をリセット
  }

  //該当IDのタスクをTodoListから削除する
  function deleteToDoTask(id) {
    setTodoList(todoList.filter((todo, index) => index !== id));
  }

   //該当IDのタスクをCompletedListから削除する
   function deleteCompletedTask(id) {
    setCompletedList(completedList.filter((todo, index) => index !== id));
  }

  //該当タスクをCompletedに移動する
  function completeTask(id){
    setCompletedList([...completedList, todoList[id]]);
    console.log("New todoList", todoList.filter((todo, index) => index !== id));
    setTodoList(todoList.filter((todo, index) => index !== id));
  }

  //該当タスクをToDoに移動する
  function uncompleteTask(id){
  setTodoList([...todoList, completedList[id]]);
  console.log("New CompletedList", completedList.filter((todo, index) => index !== id));
  setCompletedList(completedList.filter((todo, index) => index !== id));
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
        <h3>ToDo</h3>
        <ul>
          {todoList.map((todo, index) => {
            return (
              <>
                <ToDoTask
                  id={index}
                  content={todo}
                  onComplete={() => completeTask(index)}
                  onDelete={() => deleteToDoTask(index)}
                />
              </>
            );
          })}
        </ul>
      </div>
      <div>
        <h3>Completed</h3>
        <ul>
          {completedList.map((completed, index) => {
            return (
              <>
                <CompletedTask
                  id={index}
                  content={completed}
                  onUncomplete={() => uncompleteTask(index)}
                  onDelete={() => deleteCompletedTask(index)}
                />
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
