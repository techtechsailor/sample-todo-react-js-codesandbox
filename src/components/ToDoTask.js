export default function ToDoTask({ count }) {
  return (
    <>
      <li key={count}>todo{count}</li>
    </>
  );
}
