import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import Auth from "./Auth";
import { auth } from './firebase'; 
import { connect } from "react-redux";
import FindCar from "./FindCar";
import Sell from "./Sell";
import MoreInfo from "./MoreInfo";
import Checkout from "./Checkout";
function App(props) {



  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        props.onLogUserIn(authUser.email);
      } else {
        // the user is logged out
        props.onLogUserIn(null);
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header/>
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/findcar">
            <FindCar />
          </Route>
          <Route path="/sellcar">
            <Sell />
          </Route>
          <Route path="/more-info">
            <MoreInfo/>
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onLogUserIn: (authUser) => dispatch({type: 'SET_USER', user: authUser}),
    onLogUserOut: () => dispatch({type: 'REMOVE_USER'})
  }
}

export default connect(null, mapDispatchToProps)(App);
