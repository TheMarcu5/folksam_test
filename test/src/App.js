import React, {useState, useEffect} from 'react';
import './App.css';
import UserPage from './pages/UserPage';
import StartPage from './pages/StartPage';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
function App() {
 
  return (
    <Router>
      <div className="App">
      
      <Switch>
        <Route path="/" exact component={StartPage}/>
        <Route path="/:id" component={UserPage}/>
      </Switch>

        
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
