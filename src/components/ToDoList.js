import ToDoTask from "./ToDoTask.js";

const taskCount = 10;
export default function ToDoList() {
  let tasks = [];
  for (let i = 0; i < taskCount; i++) {
    tasks.push(<ToDoTask count={i + 1} />);
  }
  return (
    <div>
      <ul>{tasks}</ul>
    </div>
  );
}
