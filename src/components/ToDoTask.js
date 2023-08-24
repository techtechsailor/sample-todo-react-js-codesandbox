export default function ToDoTask({ id, content }) {
  return (
    <div>
      <li key={id}>{content}</li>
    </div>
  );
}
