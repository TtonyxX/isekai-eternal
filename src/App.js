import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Champion from './components/champions/Champions';
import Login from './components/login/login';
import Home from './components/home/Home';
import Register from './components/login/register';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/champion">
            <Champion />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
