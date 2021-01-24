import React from "react";
import "./Header.css";
import logo from "./img/logobmw1.png";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { auth } from "./firebase";

function Header(props) {

  const userLogout = () => {
    if(props.user){
      auth.signOut();
      props.onLogUserOut(null);
    }
  }

  return (
    <div className="header">
      <div className="header__firstRow">
        <img className="header__logo" src={logo} />
        <p>Hello, {props.user? props.user : "guest."}</p>
        <div className="header__auth">
          <Link to={!props.user && "/auth"}>
            <button onClick={userLogout} className="header__authBtn">
              {props.user ? "Logout" : "Login"}
            </button>
          </Link>
        </div>
      </div>
      <div className="header__secondRow">
        <Link to="/">Home</Link>
        <Link to="/sellcar">Sell car</Link>
        <Link to="/findcar">Find car</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    user: state.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onLogUserOut: (authUser) => dispatch({type: 'SET_USER', user: authUser}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
