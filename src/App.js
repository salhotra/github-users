import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './config/routes';

import Home from './routes/Home';
import User from './routes/User';
import NotFound from './routes/NotFound';

const App = () => (
  <Router>
    <Switch>
      <Route exact path={routes.HOME} component={Home} />
      <Route path={routes.USER} component={User} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
