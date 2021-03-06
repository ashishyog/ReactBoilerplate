import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Primary from './partials/navigation/primary';
import Dashboard from './views/Dashboard';
import About from './views/About';
import NotFound from './views/NotFound';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Primary />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}