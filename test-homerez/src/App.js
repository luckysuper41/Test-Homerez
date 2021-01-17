import React,{ Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';

import Homepage from './pages/Homepage/Homepage';
import LikePage from './pages/LikePage/LikePage';

//import axios from 'axios';

// Lazy load - Code splitting

function App() {

  return (
    <Fragment>
      <Router>
        <Switch>
            <Route path='/homerez/' exact component={Homepage} />
            <Route path='/homerez/like-page' component={LikePage} />
            <Route component={NotFound} />
        </Switch>
      </Router> 
    </Fragment>
  );
}

export default App;
