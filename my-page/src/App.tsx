import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from './components/sites/Main';
import About from './components/sites/About';
import Register from './components/sites/Register';
import CV from './components/sites/CV';
function App() {
  return (
    <Fragment>
      <Router >
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/CV" component={CV} />
        </Switch>
      </Router>
    </Fragment >
  );
}
export default App;