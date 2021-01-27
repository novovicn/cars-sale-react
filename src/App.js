import React, { useEffect, useState } from "react";
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
import SmallNav from './SmallNav';


function App(props) {

const [smallMenu, setSmallMenu] = useState(false);
const [open, setOpen] = useState('');

  useEffect(() => {
    // will only run once when the app component loads
    smallNavHandler();
    setOpen('');
    setSmallMenu(false);
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

  const smallNavHandler = () => {
    if(open){
      setOpen('');
      setSmallMenu(false);
    }else{
      setOpen('open');
      setSmallMenu(true);
    }
  }

  return (
    <Router>
      <div className="app">
        <button className="hamburger" onClick={smallNavHandler}>
        <span className={"hamburger__inner " + open}></span>
      </button>
        {!smallMenu && <Header/>}
        {smallMenu && <SmallNav clicked={smallNavHandler}/>}
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
