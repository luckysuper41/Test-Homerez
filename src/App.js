import React,{Suspense, lazy, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Redirect} from 'react-router';

// import page
import NotFound from './components/NotFound/NotFound';
import LikePage from'./pages/LikePage/LikePage';
// Lazy load
const Homepage = lazy(() => import('./pages/Homepage/Homepage'));

function App() {
  return (
    <Fragment>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
              <Redirect exact from="/" to="/home" />
              <Route path = '/home' component={Homepage} />
              <Route path = '/SearchResult' component={Homepage} />
              <Route path = '/liked' component={LikePage} />
              <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </Fragment>
  );
}

export default App;
