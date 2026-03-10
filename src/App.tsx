import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

interface Todo {
  id: number;
  text: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);


  /*
  When the component mounts (first time the app loads), fetch the "storedTodos" from localStorage and update the todos state with that data so previously saved todos appear again.
  */
  useEffect(() => {
    const stored = localStorage.getItem("storedTodos")
    if (stored) {
      setTodos(JSON.parse(stored))
    }
  }, [])


  /*
 When the todos state updates (for example when a new task is added):
 1. Create a new array "updatedTodos" by adding the new task to the existing todos.
 2. Save this updatedTodos array to localStorage so the data persists after refresh.
    */
  const addTodo = (text: string) => {

    const newTodo: Todo = {
      id: Date.now(),
      text,
    }
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos)
    localStorage.setItem("storedTodos", JSON.stringify(updatedTodos))

  }

  /*
 When a todo is deleted:
 1. Create a new array "updatedTodos" by removing the todo whose id matches the given id.
 2. Update the todos state with this new array.
 3. Save the updatedTodos array to localStorage so the data persists after refresh.
    */
  const deleteTodo = (id: number) => {

    const oldTodos = todos
    const updatedTodos = oldTodos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
    localStorage.setItem("storedTodos", JSON.stringify(updatedTodos))

  };

  return (
    <div className="app">
      <div className="container">
        <h1>Todo List</h1>
        <TodoInput onAdd={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
