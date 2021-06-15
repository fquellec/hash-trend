import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"

import SearchPage from "./pages/index"
import NotFoundPage from "./pages/404"
import DashBoardPage from "./pages/dashboard"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchPage}/>
        <Route path="/dashboard" component={DashBoardPage}/>
        <Route path="/404" component={NotFoundPage}/>
        <Redirect to="/404"/>
      </Switch>
    </Router>
  );
}

export default App;
