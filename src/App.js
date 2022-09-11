import React from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';
//import UserItem from './components/UserItem';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import {About} from './components/pages/About';
import User from './components/users/User';
import Home from './components/pages/Home';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import NotFound from './components/pages/NotFound';

const App = () => {
   return (
    <GithubState>
      <AlertState>
      <Router>
      <div className="App" >
        < Navbar title='Github Finder' />
        <div className="container">
          <Alert  />
          <Switch >
            <Route exact path='/' component={Home}/>
            <Route exact path='/about'><About/></Route>
            <Route exact path='/user/:login' component={User} />
            <Route component={NotFound}/>
          </Switch>

        </div>
        
      </div>
      </Router>
      </AlertState>
      </GithubState>
      
  

  );

}

export default App;
















