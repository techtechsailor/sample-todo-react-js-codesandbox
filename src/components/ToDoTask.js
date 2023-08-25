import Button from "./Button.js";

export default function ToDoTask({ id, content, onDelete }) {
  return (
    <div>
      <li key={id}>
        {content}
        <Button onClick={onDelete}>delete</Button>
      </li>
    </div>
  );
}
