import React, { Component } from 'react';
import "./App.css";
import Login from "./components/user/Login";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Register from "./components/user/Register";
import Profile from './components/user/Profile';

class App extends Component {
  render() {
    return(
     <Router>
       <div className> 
        <Switch> 
           <Route exact path="/login" component={Login}/>
           <Route exact path="/register" component={Register}/>
           <Route exact path="/user/:uid" component={Profile}/>
        </Switch>
    </div> 
    </Router>
   
     
  );

}

}
export default App;