import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ToDoListUI from './features/todo/ToDoListUI';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <ToDoListUI/>
    </div>
  );
}

export default App;
