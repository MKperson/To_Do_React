import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Task from './Task';
import TaskForm from './TaskForm';
import TaskList from './TaskList';


class App extends Component {
  constructor(props){
    super(props);
    this.state;
    this.toggleTaskStatus= this.toggleTaskStatus.bind(this);
    this.deleteTask= this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);





  }








  toggleTaskStatus(index) {
    console.log("ToggleTask")
    // this.tasks[index].isComplete = !this.tasks[index].isComplete;
    // this.loadTasks();
}

deleteTask(event, taskIndex) {
  Console.Log("DELTASK")
    // event.preventDefault();
    // this.tasks.splice(taskIndex, 1);
    // this.loadTasks();
}




addTask(task) {
  console.log("AddTask")
    // let newTask = {
    //   task,
    //   isComplete: false,
    // };
    // let parentDiv = document.getElementById('addTask').parentElement;
    // if(task === '') {
    //   parentDiv.classList.add('has-error');
    // } else {
    //   parentDiv.classList.remove('has-error');
    //   this.tasks.push(newTask);
    //   this.loadTasks();
    // }
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
