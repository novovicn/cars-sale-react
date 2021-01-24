import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Checkout.css";
import { db } from './firebase';


function Checkout(props) {

  const history = useHistory();

  const handleCancel = () => {
    history.replace('/findcar')
  }

  const handleBuy = () => {
    console.log(props.car.id);
    db.collection('cars').doc(props.car.id).update({sold: true});
    // alert('car bought');
    // history.push('/findcar');
  }

  return (
    <div className="checkout">
      <h1 className="checkout__heading">Are you sure you want to buy :</h1>
      <div className="checkout__table">
        <div className="checkout__table--firstRow">
          <div>Photo</div>
          <div>Car</div>
          <div>Price</div>
        </div>
        <div className="checkout__table--secondRow">
          <div className="checkout__image">
            <img src={props.car.image}></img>
          </div>
          <div className="checkout__model">{props.car.brand} {props.car.model}</div>
          <div className="checkout__price">€ {props.car.price}</div>
        </div>
      </div>
      <div className="checkout__buttons">
        <button onClick={handleBuy} className="checkout__button checkout__approve"> BUY</button>
        <button className="checkout__button checkout__cancel" onClick={handleCancel}>
            CANCEL
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    car: state.car,
  };
};

export default connect(mapStateToProps)(Checkout);
