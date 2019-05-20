import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import Header from './Header.js'
import Yellow from './Yellow.js';
import Blue from './Blue.js';
import Red from './Red.js';
import Color from './Color.js';

export default function App() {
  return (
    <Router>
      <>
      <Header />
      <Switch>
        <Route path="/red" component={Red} />
        <Route path="/yellow" component={Yellow} />
        <Route path="/blue" component={Blue} />
        <Route path="/:color" component={Color} />
      </Switch>
      </>
    </Router>
  );
}
