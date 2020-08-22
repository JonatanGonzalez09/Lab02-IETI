import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Login } from "./components/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import { TodoApp } from "./TodoApp";
import { Todo } from './Todo';

const LoginView = () => (
    <Login/>
);

const TodoAppView = () => (
    <TodoApp/>
);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : false
        }
        console.log(this.state.isLoggedIn);
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
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>

                    <div>
                        {this.state.isLoggedIn
                            ? <Route path="/todo" component={TodoAppView}/>
                            : <Route exact path="/" component={LoginView}/>
                        }
                    </div>
                </div>
            </Router>
        );
    }

}

export default App;
