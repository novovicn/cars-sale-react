import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './Car.css'
import { db } from './firebase';



function Car(props) {

    const history = useHistory();

    const addCarToState = () => {
        let car = {
            id:props.id,
            image:props.image,
            vin:props.vin,
            brand:props.brand,
            mileage: props.mileage,
            model:props.model,
            owner:props.owner,
            price:props.price,
            sold:props.sold,
            year:props.year,
        } 
        console.log(car);
        props.onSetCar(car);

    }

    const mainButton = () => {
        if(props.owner === props.user){
            return <button onClick={handleDelete} className="car__mainBtn">DELETE</button>
        }else if(!props.user){
            return null
        }else if(!props.sold){
            return <button onClick={handleBuy} className="car__mainBtn">BUY</button>
        }else{
            return null
        }
    }

    const sold = props.sold? <div className='sold'>SOLD</div> : null;

    const handleDelete = () => {
        let ask = window.confirm('Are you sure you want to delete?')
        if(!ask){
            return 
        }else{
            db.collection("cars").doc(props.id).delete()
        }
    }

    const handleBuy = () => {
        addCarToState();
        history.push('/checkout');
    }

    const handleMoreInfo = () => {
        addCarToState();
        history.push('/more-info');
    }

    return (
        <div className="car">
            {sold}
            <img className="car__image" alt="" src={props.image}/>
            <div className="car__info">
                <h2 className="car__name">{props.brand} {props.model}</h2>
                <h3>€ {props.price}</h3>
            </div>
            <div className="car__buttons">
            <button className="car__buttons--seeMore" onClick={handleMoreInfo}>See more</button>
                {mainButton()}
            </div>
        </div>
    )
}



const mapStateToProps = state => {
    return{
      user: state.user
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSetCar: (car) => dispatch({type: 'SET_CAR', car: car}),
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Car)
