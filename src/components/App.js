import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from './Home';
import Loading from './Loading';

const AsyncDynamicPAge = importedComponent(
  () => import('./DynamicPage'),
  { LoadingComponent: Loading },
);

const AsyncDynamicPAge2 = importedComponent(
  () => import('./DynamicPage2'),
  { LoadingComponent: Loading },
);

const AsyncNoMatch = importedComponent(
  () => import('./NoMatch'),
  { LoadingComponent: Loading },
);

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={AsyncDynamicPAge} />
          <Route exact path="/dynamic2" component={AsyncDynamicPAge2} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
