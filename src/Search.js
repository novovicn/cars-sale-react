import React from "react";
import { connect } from "react-redux";
import './Search.css';

function Search(props) {

  const setLowPrice = (e) => {
    props.onSetLowPrice(e.target.value);
  }

  const setHighPrice = (e) => {
    props.onSetHighPrice(e.target.value);
  }

  const setBrand = (e) => {
    props.onSetBrand(e.target.value);
  }

  return (
    <div className="search">
      <div className="search__price">
        <label htmlFor="search__price--lowest">Price </label>
        <input
          onChange={setLowPrice}
          type="number"
          name="search__price--lowest"
          className="search__price--lowest"
          placeholder="from"
        />
        <input
          onChange={setHighPrice}
          type="number"
          name="search__price--highest"
          className="search__price--highest"
          placeholder="to"
        />
        <input
          type="submit"
          className="search__price--submit"
          value="Search"
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
