import Button from "./Button.js";
import { useState } from "react";

export default function ToDoTask({ id, content, onComplete, onDelete }) {
 
  return (
    <div>
      <li key={id}>
        {content}
        <Button onClick={onComplete}>complete</Button>
        <Button onClick={onDelete}>delete</Button>
      </li>
    </div>
  );
}
