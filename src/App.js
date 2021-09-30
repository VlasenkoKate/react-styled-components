
import './App.css';
import React from "react"
import {Switch, Route, NavLink} from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom"
import FirstAnswer from "./components/First"
import SecondAnswer from "./components/Second"
import ThirdAnswer from "./components/Third"
import SuccessPage from './components/success';
// import Sign_up from "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/20-homework/src/components/Sign up.jsx"
import SorryPage from "./components/sorry"
import Main from "./components/Main"
import FourthAnswer from './components/Fourth';




function App() {
  return (
    <div className="App">
      <Router>     
<Switch>
<Route exact path="/" component={Main} />
<Route exact path="/success" component={SuccessPage} />
<Route exact path="/second" component={SecondAnswer} />
<Route exact path="/sorry" component={SorryPage} />
  <Route exact path="/first" component={FirstAnswer} />
  <Route exact path="/third" component={ThirdAnswer} />
  <Route exact path="/fourth" component={FourthAnswer} />
</Switch>
</Router>
    </div>
  );
}

export default App;
