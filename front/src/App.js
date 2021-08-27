import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// src/pages/index.js를 통해서 한번에 import 할 수 있도록 함
import { Info, Login } from './pages';

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Info} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;