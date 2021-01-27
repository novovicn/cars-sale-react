import React, { useState } from "react";
import { connect } from "react-redux";
import './Search.css';

function Search(props) {

  const [lowPrice, setLowPrice] = useState(0);
  const [highPrice, setHighPrice] = useState(99999999);

  const setLowPriceSearch = (e) => {
    if(e.target.value === ''){
      setLowPrice(0)
    }else{
      setLowPrice(e.target.value)
    }
  }

  const searchByPrice = () => {
    props.onSetLowPrice(lowPrice);
    props.onSetHighPrice(highPrice);
  }
    

  const setHighPriceSearch = (e) => {
    if(e.target.value === ''){
      setHighPrice(9999999)
    }else{
      setHighPrice(e.target.value)
    }
  }

  const setBrand = (e) => {
    props.onSetBrand(e.target.value);
  }

  return (
    <div className="search">
      <div className="search__price">
        <label htmlFor="search__price--lowest">Price </label>
        <input
          onChange={setLowPriceSearch}
          type="number"
          name="search__price--lowest"
          className="search__price--lowest"
          placeholder="from"
        />
        <input
          onChange={setHighPriceSearch}
          type="number"
          name="search__price--highest"
          className="search__price--highest"
          placeholder="to"
        />
        <input
          type="submit"
          className="search__price--submit"
          value="Search"
          onClick={searchByPrice}
        ></input>
      </div>
      <div className="search__brand">
        <input
          onChange={setBrand}
          type="text"
          name="search-brand"
          id="search-brand"
          placeholder="Brand and model"
        />
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return{
    onSetLowPrice: (price) => dispatch({type:"SEARCH_LOW_PRICE", price:price }),
    onSetHighPrice: (price) => dispatch({type:"SEARCH_HIGH_PRICE", price:price }),
    onSetBrand: (brand) => dispatch({type: "SEARCH_BRAND", brand:brand}),
  }

}

export default connect(null, mapDispatchToProps)(Search)
