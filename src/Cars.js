import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Car from "./Car";
import "./Cars.css";
import { db } from "./firebase";
import { Pagination } from "./Pagination";
import Spinner from "./Spinner";

function Cars(props) {

  const [cars, setCars] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [filteredCars, setFilteredCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    setFiltered(false);
    
    if(!props.user){
      alert('Only authenticated users can buy a car')
    }

     const getCars = async () => {
      setLoading(true);
      await db
      .collection("cars")
      // .orderBy("created_at", "desc")
      .onSnapshot((snapshot) => {
        setCars(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      });
      setLoading(false);
    }

    getCars();
    
    console.log("cars>>>", cars);
  }, [])

  useEffect(() => {



    const carsFilteredByPrice = cars.filter((car) => {
      if (parseInt(car.data.price) <= parseInt(props.searchPriceHigh) &&
        parseInt(car.data.price) >= parseInt(props.searchPriceLow)) {
        return car;
      }
    });

    const filterBrandAndPrice = carsFilteredByPrice.filter(car => {
      if (car.data.brand.toUpperCase().indexOf(props.searchBrand.trim().toUpperCase()) != -1 ||
                car.data.model.toUpperCase().indexOf(props.searchBrand.trim().toUpperCase()) != -1) {
                return car;
      }
    })


    console.log(cars);
    setFilteredCars(filterBrandAndPrice);
    setFiltered(true);
  }, [props.searchPriceLow, props.searchBrand, props.searchPriceHigh, cars]);


  const carsToRender = filtered? filteredCars : cars;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = carsToRender.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageNumber = (num) => {
    setCurrentPage(num);
  };

  console.log(filtered);

  return (
    <div className="carsRender">
      <div className="cars">
      {loading ? (
        <Spinner />
      ) : (
        currentPosts?.map((car) => (
          <Car
            key={car.id}
            id={car.id}
            image={car.data.imageURL}
            vin={car.data.VIN}
            brand={car.data.brand}
            model={car.data.model}
            owner={car.data.owner}
            price={car.data.price}
            sold={car.data.sold}
            year={car.data.year}
            mileage={car.data.mileage}
            sold={car.data.sold}
          />
        ))
      )}
      </div>
      
      <div className="pagination">
      <Pagination
        paginate={handlePageNumber}
        postsPerPage={postsPerPage}
        totalPosts={cars.length}
      />
      </div>
      
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    searchPriceLow: state.searchPriceLow,
    searchPriceHigh: state.searchPriceHigh,
    searchBrand: state.searchBrand,
    user: state.user
  };
};

export default connect(mapStateToProps)(Cars);
