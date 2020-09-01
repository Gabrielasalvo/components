import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';


function App() {
  return (
    <div>
    <div > 
      <Link to="/componentes"> Componentes</Link>
      <span> | </span>
      <Link to="/demo"> Demo</Link>
    </div>
    <Switch>
      <Route exact path="/componentes">
        <h1>Componentes</h1>
      </Route>
      <Route exact path="/demo">
        <h1>Demos</h1>
        <Redirect exact to="/demo"/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
