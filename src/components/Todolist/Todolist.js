import React from 'react';
import s from './Todolist.module.css';

const Todolist = ({ todos, onDeleteTodo }) => (
  <ul className={s.TodoList}>
    {todos.map(({ id, text }) => (
      <li key={id} className={s.item}>
        <p className={s.text}>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);


export {Todolist};