import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Todos from './component/Todos'
import Header from './component/Layout/Header'
import AddTodo from './component/AddTodo';
import Container from './component/Layout/Container'
// import uuid from 'uuid'
import About from "./component/pages/About";


class App extends Component {
  state = {
    todos: []
  }

  async componentDidMount() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`);
    const data = await response.json();
    this.setState({ todos: data })

  }
  //Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo =>
        todo.id !== id
      )]
    })
  }

  addTodo = async (title) => {
    const setting = {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          title: title,
          completed: false
        }
      )
    }
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`, setting
    );
    const data = await response.json();
    this.setState({ todos: [...this.state.todos, data] })
    console.log(data)
  }

  render() {

    return (
      <Router>
        <Container>
          <Header />
          <Route path='/' exact render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
            </React.Fragment>
          )}
          />
          <Route path='/about' component={About} />
        </Container>
      </Router>
    );
  }
}

export default App;
