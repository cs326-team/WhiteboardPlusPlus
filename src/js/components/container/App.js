import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';

const App = () => (
  <Router>
    <Switch>
      <Route exact path={'/whiteboard/:id'} component={Home} />
      <Route path={'/'} component={Home} />
    </Switch>
  </Router>
);

export default App;