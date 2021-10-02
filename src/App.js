import React, {Component} from 'react';

import PaintingList from './components/Paintings/PaintingList';
import paintingData from './data/Paintings.json';

import {Button} from'./components/Button/Button';
import {Counter} from './components/Counter/Counter';
import Dropdown from './components/Dropdown/Dropdown';

import{Todolist} from './components/Todolist/Todolist';

class App extends Component {

  state ={
    todos:[
      { "id": "id-1", "text": "Выучить основы React", "completed": true },
      { "id": "id-2", "text": "Разобраться с React Router", "completed": false },
      { "id": "id-3", "text": "Пережить Redux", "completed": false }
    ],
  };
 
  deleteTodo =(todoId) => {
    this.setState (prevState =>({
   todos:prevState.todos.filter(
     todo =>todo.id!==todoId)

      }));
  };


  render() {
    const {todos}=this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

  return (
    <div className="container">
     <PaintingList paintings={paintingData}/>
     <Button/>
     <Counter initialValue={100}/>
     <Dropdown/>
     <div>
      <span> Q Todo:{totalTodoCount}</span>
      <span> Q Todo done:{completedTodoCount}</span>
      </div>
     <Todolist todos={todos} onDeleteTodo ={this.deleteTodo}/>
    </div>
  );
}
}

export default App;
