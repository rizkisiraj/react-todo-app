import './App.css';
import React, { useState, useEffect } from 'react';
import Todolist from './components/Todolist/Todolist';
import TodoForm from './components/TodoForm/TodoForm';

const App = () => {

  const [todoItems, setTodo] = useState([]);

  useEffect(() => {
    let text = localStorage.getItem("todosItems");
    let obj = JSON.parse(text);
    const { items } = obj;
    console.log(items);
    setTodo(items);
  },[])

  const saveItem = (items) => {
    const todosData = {items};
    const itemsJSON = JSON.stringify(todosData);
    localStorage.setItem("todosItems",itemsJSON);
  }

  const handleClick = (id) => {
    let newTodos = todoItems.map(todo => {
      return todo.id === id ? {...todo, complete : !todo.complete} : {...todo};
    });
    
    const uncompleteTodos = newTodos.filter(todo => {
      return todo.complete;
    });

    const completeTodos = newTodos.filter(todo => {
      return !todo.complete;
    })

    newTodos = [...completeTodos,...uncompleteTodos];

    setTodo(newTodos);
    saveItem(newTodos);

  }

  const handleDelete = (id) => {
    let newTodos = todoItems.filter(todo => {
      return todo.id !== id;
    })
    setTodo(newTodos);
    saveItem(newTodos);
  }

  const addNewTodo = (inputValue) => {
    if(todoItems === null) {
      let todos = [{id: 1, task: inputValue, complete: false}];
      setTodo(todos);
      saveItem(todos);
    } else {
      let todos = [...todoItems];
      todos = [{id: todoItems.length+1, task: inputValue, complete: false},...todos];
      setTodo(todos);
      saveItem(todos);
    }
  }

  const updateTodo = (id, value) => {
    let newTodos = todoItems.map(todo => {
      return todo.id === id ? {...todo, task : value} : {...todo}
    });

    setTodo(newTodos);
    saveItem(newTodos);
  }

  return todoItems !== null ? (
    <div className='todo-app'>
      <h1>What's the plan for today</h1>
      <TodoForm onSubmit={addNewTodo} />
      <Todolist className='todo-container' updateTodo={updateTodo} handleDelete={handleDelete} handleClick={handleClick} todos={todoItems} />
    </div>
  ) : (
    <div className='todo-app'>
      <TodoForm onSubmit={addNewTodo} />
    </div>
  )
}

export default App;
