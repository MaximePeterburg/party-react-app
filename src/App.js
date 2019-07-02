import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/Home/Home';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default App;
