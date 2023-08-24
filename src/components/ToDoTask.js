export default function ToDoTask({ id, content }) {
  return (
    <div>
      <li key={id}>todo{content}</li>
    </div>
  );
}
