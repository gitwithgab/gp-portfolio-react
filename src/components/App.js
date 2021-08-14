import React from 'react';
import {
  Redirect,
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

                  <Route path="/404">
                    
                      <PageNotFound />

                  </Route> 

                  <Redirect to="/404"/>
            
              </Switch>
            
          </Router>

    </div>
  )
}

export default App
