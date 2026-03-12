import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

interface Todo {
  id: number;
  text: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [color, setColor] = useState<string>("#00FF00");



  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // const changeColor = () => {
  //   setColor()
  // }

  return (
    <div className="app" style={{backgroundColor: color}}>
      <div className="container">
        <h1>Todo List</h1>
        <TodoInput onAdd={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} />
      </div>
      <div className="color">
        {/* Apply the state variable directly to the style attribute */}
        <h1>COLOR CHANGE</h1>

        <style></style>
        
        <input 
          value={color} 
          onChange={e => setColor(e.target.value)} 
          placeholder="Type a color (e.g. red, #000)"
        />
      </div>

    </div>
  );
}

export default App;
