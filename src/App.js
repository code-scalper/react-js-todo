<<<<<<< HEAD
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
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> d4a555e1f1436318b42e16028ec5aef63690bb26
    </div>
  );
}

export default App;
