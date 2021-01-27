import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./SmallNav.css";

function SmallNav(props) {

const [open, setOpen] = useState('open');

  return (
    <div className={"smallNav " + open} onClick={props.clicked}>
      <ul className="smallNav__menu" >
        <li className="smallNav__item" >
          <Link to="/">
            HOME
          </Link>
        </li>
        <li className="smallNav__item">
          <Link  to="/sellcar">
            SELL CAR
          </Link>
        </li>
        <li className="smallNav__item">
          <Link  to="/findcar">
            FIND CAR
          </Link>
        </li>
        <li className="smallNav__item">
          <Link  to="/">
            ABOUT
          </Link>
        </li>
        <li className="smallNav__item">
          <Link  to="/">
            CONTACT
          </Link>
        </li>
        <li className="smallNav__item">
          <Link  to={!props.user && '/auth'}>
            {props.user? 'Logout' : 'Login'}
          </Link>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
    return{
      user: state.user
    };
  }

export default connect(mapStateToProps)(SmallNav);
