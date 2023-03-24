import React from 'react';
import Todo from './components/todo';

import './style.css';

export default function App() {
  function dropItem() {}

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Todo text="this code" dropItem={dropItem} />
      <Todo text="this code" />
      <Todo text="this code" />
    </div>
  );
}
