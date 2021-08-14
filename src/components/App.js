import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import PageNotFound from "../components/PageNotFound"

  
const App = () => {
  return (

    <div>

          <Router>
            
              <Switch>
                  
                  <Route exact path="/">
                    
                      <HomePage />
                
                  </Route>

                  <Route path="*">
                    
                      <PageNotFound />

                  </Route> 

              </Switch>
            
          </Router>

    </div>
  )
}

export default App
