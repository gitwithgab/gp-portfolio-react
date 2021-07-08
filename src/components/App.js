import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  } from 'react-router-dom';

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ToolkitPage from "../pages/ToolkitPage"
import ProjectsPage from "../pages/ProjectsPage";
import ContactPage from "../pages/ContactPage";

  
const App = () => {
  return (

    <div>

          <Router>
            
              <Switch>
                  
                  <Route exact path="/">
                    
                      <HomePage />
                
                  </Route>

                  <Route path="/about">
                    
                      <AboutPage />
                  
                  </Route>

                  <Route path="/toolkit">
                      
                      <ToolkitPage />
                  
                  </Route>

                  <Route path="/projects">
                      
                      <ProjectsPage />
                  
                  </Route>

                  <Route path="/contact">
                      
                      <ContactPage />
                  
                  </Route>
            
              </Switch>
            

          </Router>

    </div>
  )
}

export default App
