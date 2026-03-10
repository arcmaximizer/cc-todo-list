import '../styles/TodoItem.css';

interface TodoItemProps {
  id: number;
  text: string;
  onDelete: (id: number) => void;
}

function TodoItem({ id, text, onDelete }: TodoItemProps) {
  return (
    <li className="todo-item">
      <span>{text}</span>
      <button className="delete-btn" onClick={() => onDelete(id)}>
        ×
      </button>
    </li>
  );
}

export default TodoItem;
