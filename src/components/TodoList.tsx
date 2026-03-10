import TodoItem from './TodoItem';
import '../styles/TodoList.css';

interface Todo {
  id: number;
  text: string;
}

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
}

function TodoList({ todos, onDelete }: TodoListProps) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TodoList;
