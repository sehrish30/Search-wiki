import React from 'react'
// npm install --save-dev @testing-library/react-hooks
// npm run test:ci
// you can check coverage report by pasting link of coverage => index.html in server

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
  // router is in index.html wrapped around App
  // No router wrapped around switch because app independant we can send our own router when testing
  return( 
         <Switch>
           <Route path="/" component={Home} exact />
           <Route path="/search" component={Search} />
           <Route component={NotFound} />
         </Switch>
  )
}

export default App;
