import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  } from 'react-router-dom';
import HomePage from "../pages/HomePage";

  
const App = () => {
  return (

    <div>

          <Router>
            
              <Switch>
                  
                  <Route exact path="/">
                    
                      <HomePage />
                
                  </Route>
            
              </Switch>
            
          </Router>

    </div>
  )
}

export default App
