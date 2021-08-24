
import './App.css';
import React from "react"
import {Switch, Route, NavLink} from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom"
import SignIn from "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/20-homework/src/components/Sign in.jsx"
import SignUp from "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/20-homework/src/components/Sign up.jsx"
import SuccessPage from './components/success';
// import Sign_up from "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/20-homework/src/components/Sign up.jsx"
import SorryPage from "./components/sorry"




function App() {
  return (
    <div className="App">
      <Router>
        <nav>
        <NavLink className="navigationButton" activeClassName={"selected"} to="/Sign_in">Sign In</NavLink>
        <NavLink className="navigationButton" activeClassName={"selected"} to="/Sign_up">Sign Up</NavLink>
        </nav>      
<Switch>
<Route exact path="/success" component={SuccessPage} />
<Route exact path="/sorry" component={SorryPage} />
  <Route exact path="/Sign_in" component={SignIn} />
  <Route exact path="/Sign_up" component={SignUp} />
</Switch>
</Router>
    </div>
  );
}

export default App;
