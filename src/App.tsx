import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ToDoListUI from './features/todo/ToDoListUI';
import MovieList from './features/movie/MovieList';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ToDoListUI/> */}
      <MovieList/>
    </div>
  );
}

export default App;
