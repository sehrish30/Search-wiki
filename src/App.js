import React from 'react'
// npm install --save-dev @testing-library/react-hooks
// npm run test:ci

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

const App = () => {
  // Separate functional and presentational component
  return( 
    <Router>
         <Switch>
           <Route path="/" component={Home} exact />
           <Route path="/search" component={Search} />
           <Route component={NotFound} />
         </Switch>
    </Router>
    
  )
}

export default App;
