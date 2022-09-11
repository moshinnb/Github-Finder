import React, { useState, Fragment } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
//import UserItem from './components/UserItem';
import Users from './components/Users';
import Search from './components/Search';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import {About} from './components/pages/About';
import User from './components/User';

import GithubState from './context/github/GithubState';

const App = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  //clear users from state
  const clearUsers = () => {
    setUsers([])
    setLoading(false);
  };
  //seraching GITHUB USERS
  const searchUsers = async text => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
          &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // console.log(res.data);
    setUsers(res.data.items);
    setLoading(false);

  };

  //Get single Github User

  const getUser = async username => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
          &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUser(res.data);
    setLoading(false);
  };

  //Get Users repo

  const getUserRepo = async username => {
    setLoading(true)
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setRepos(res.data);
    setLoading(false);
  };




  //alert method
  const closefun = () => {
    setAlert(null );
    // clearTimeout()
  }
  const showAlert = (msg, type) => {
    setAlert({ msg, type })

    setTimeout(() => setAlert(null), 50000);
  }




  return (
    <GithubState>
      <Router>
      <div className="App" >
        < Navbar title='Github Finder' />
        <div className="container">
          <Alert alert={alert} closefun={closefun} />
          <Switch >
            <Route exact path='/' render={(props)=>(
              <Fragment>
                <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={users.length > 0 ? true : false} setAlert={showAlert} />
                <Users loading={loading} users={users} />
              </Fragment>)} />
            <Route exact path='/about'><About/></Route>
            <Route exact path='/user/:login' render={(props) => (<User {...props} getUserRepos={getUserRepo} getUser={getUser} user={user} repos={repos} loading={loading} />)} />

            </Switch>

        </div>
        
      </div>
      </Router>
      </GithubState>
      
  

  );

}

export default App;



















/*

const App = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  //clear users from state
  const clearUsers = () => {
    setUsers([])
    setLoading(false);
  };
  //seraching GITHUB USERS
  const searchUsers = async text => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
          &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // console.log(res.data);
    setUsers(res.data.items);
    setLoading(false);

  };

  //Get single Github User

  const getUser = async username => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
          &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUser(res.data);
    setLoading(false);
  };

  //Get Users repo

  const getUserRepo = async username => {
    setLoading(true)
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setRepos(res.data);
    setLoading(false);
  };




  //alert method
  const closefun = () => {
    setAlert(null );
    // clearTimeout()
  }
  const showAlert = (msg, type) => {
    setAlert({ msg, type })

    setTimeout(() => setAlert(null), 50000);
  }




  return (
      <Router>
      <div className="App" >
        < Navbar title='Github Finder' />
        <div className="container">
          <Alert alert={alert} closefun={closefun} />
          <Switch >
            <Route exact path='/' render={(props)=>(
              <Fragment>
                <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={users.length > 0 ? true : false} setAlert={showAlert} />
                <Users loading={loading} users={users} />
              </Fragment>)} />
            <Route exact path='/about'><About/></Route>
            <Route exact path='/user/:login' render={(props) => (<User {...props} getUserRepos={getUserRepo} getUser={getUser} user={user} repos={repos} loading={loading} />)} />

            </Switch>

        </div>
        
      </div>
      </Router>
      
  

  );

}

export default App;
*/
