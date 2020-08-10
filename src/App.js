import React, { useState } from 'react';
import './App.css';

import Todos from './components/Todos'

const App = () => {
  // Toggle completed
  const markComplete = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }
  const delTodo = (id) => {
    console.log(...todos,)
    setTodos(todos.filter(todo => todo.id !== id))

  }
  const [todos, setTodos] = useState([
    { id: 1, title: 'Take out the trash', completed: true },
    { id: 2, title: 'Brush teeth', completed: false },
    { id: 3, title: 'Clean the room', completed: true },
    { id: 4, title: 'Wash the dishes', completed: false },
  ]);
  return (
    <div className="App">
      <Todos todos={todos} markComplete={markComplete} delTodo={delTodo} />
    </div>
  );
}

export default App;
