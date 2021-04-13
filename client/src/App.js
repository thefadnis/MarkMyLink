import './App.css';
import Bookmark from './components/Bookmark.js';
import Login from './components/Login.js'
import Signup from './components/Signup.js'

import {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  if(!token) {
    return (
      <BrowserRouter>
        <Route path="/signup">
            <Signup />
        </Route>
        <Route path="/">
            <Login setToken = {setToken}/>
        </Route>
      </BrowserRouter>
    )
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Bookmark />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
