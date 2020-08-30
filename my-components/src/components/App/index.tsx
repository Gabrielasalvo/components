import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';



const App: React.FC=()=> {
  return (
    <div>
      <div>
        <Link to="/"> Home Page </Link>
        <span>|</span>
        <Link to="/about"> About</Link>
      </div>
    
    <Switch>
      <Route exact path="/">
        <h1>Home</h1>
      </Route>
      <Route exact  path="/about">
        <h1>About</h1>
      </Route>
      <Redirect to="/"/>
    
    </Switch>
    </div>
  );
}

export default App;
