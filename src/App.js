import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Forget from "./components/forget.component";
import Homepage from "./components/home.component";

  
function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <nav className="navbar-brand">Charity Nation</nav>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/Homepage"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path='/' exact={true} component={Homepage} />
            <Route path="/sign-up" component={SignUp} />
            <Route exact path='/' component={Forget} />
            <Route path="/forget" component={Forget} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
 