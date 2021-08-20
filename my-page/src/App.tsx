import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './components/sites/Main';
import { ReactFragment } from 'react';

import './App.css';
import About from './components/sites/About';
function App() {
  return (

    <Fragment>
      <Router>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </Router>
    </Fragment>

  );
}

export default App;
