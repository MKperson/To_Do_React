import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Task from './Task';
import TaskForm from './TaskForm';
import TaskList from './TaskList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      task: "",
      isComplete: false,

    }
    this.tasks = JSON.parse(localStorage.getItem('TASKS'));
    if (!this.tasks) {
      this.tasks = [
        { task: 'Go to Dentist', isComplete: false },
        { task: 'Do Gardening', isComplete: true },
        { task: 'Renew Library Account', isComplete: false },
      ];
    }

    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);

  }

  toggleTaskStatus(index) {
    console.log("ToggleTask")
    // this.tasks[index].isComplete = !this.tasks[index].isComplete;
    // this.loadTasks();
  }

  deleteTask(event, taskIndex) {
    console.Log("DELTASK")
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
      <div class="container">
      <h1>TodoList</h1>
      <Task task = {this.state}/>
      </div>
    );
  }
}

export default App;
