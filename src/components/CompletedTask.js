import Button from "./Button.js";
import { useState } from "react";

export default function CompletedTask({ id, content, onUncomplete, onDelete }) {
    
  return (
    <div>
      <li key={id}>
        {content}
        <Button onClick={onUncomplete}>uncomplete</Button>
        <Button onClick={onDelete}>delete</Button>
      </li>
    </div>
  );
}
