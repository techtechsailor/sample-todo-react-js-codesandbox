import Button from "./Button.js";

export default function ToDoTask({ id, content }) {
  return (
    <div>
      <li key={id}>
        {content}
        <Button onClick={() => alert("delete")}>delete</Button>
      </li>
    </div>
  );
}
