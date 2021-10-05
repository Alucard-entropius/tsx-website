import React from 'react';
import './App.css';
//import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import browserhistory from './browserhistory';

function App() {
  return(
    <div className="App">
    <Header />
      <Router history={browserhistory}>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/" component={Welcome}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
