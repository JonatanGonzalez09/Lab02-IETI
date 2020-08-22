import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Login } from "./components/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import { TodoApp } from "./TodoApp";

const LoginView = () => (
      <Login/>
  );

  const TodoAppView = () => (
        <TodoApp/>
    );
    
class App extends Component {

    constructor(props) {
        super(props);
        localStorage.setItem('Email',"jonatan@mail.com");
        localStorage.setItem('Password',"1234");
    }

    render() {

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        {localStorage.getItem('isLoggedIn')==="true"
                            ? <li><Link to="/todo">Todo</Link> <Route path="/todo" component={TodoAppView}/></li>
                            : <li><Link to="/">Login</Link> <Route exact path="/" component={LoginView}/></li>
                        }
                    </ul>
                </div>
            </Router>
        );
    }
}

export default App;
