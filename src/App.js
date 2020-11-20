import React from 'react'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
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
