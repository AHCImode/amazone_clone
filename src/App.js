import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Checkout from "./Checkout";
import Header from './Header';
import Home from './Home';
import Login from './Login';
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
       console.log('THE USER IS >>>', authUser);
      
       if (authUser){
         dispatch({
           type: 'SET_USER',
           user: authUser  
         })
         // the user just logged in /
       }
       else{
         dispatch({
           type: 'SET_USER',
           user: null
         })
         // user is loggd out 
       }
    })
  }, )

  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>

        <Route path="/">
          <Header/> 
          <Home/>

          

        </Route>
        
      </Switch>
      </div>
    </Router>
  );
}

export default App;
