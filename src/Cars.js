import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Car from "./Car";
import "./Cars.css";
import { db } from "./firebase";
import { Pagination } from "./Pagination";
import Spinner from "./Spinner";

function Cars(props) {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    await db
      .collection("cars")
      .orderBy("created_at", "desc")
      .onSnapshot((snapshot) =>
        setCars(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    console.log("cars>>>", cars);
  }, [])

  useEffect(() => {
    const carsFilteredByPrice = cars.filter((car) => {
      console.log(props.searchPriceHigh);
      if (parseInt(car.data.price) < parseInt(props.searchPriceHigh) &&
        parseInt(car.data.price) > parseInt(props.searchPriceLow)) {
        return car;
      }
    });
    setCars(carsFilteredByPrice);
  }, [props]);

  // const filteredByName = cars.filter( car => {
  //     if (
  //         car.brand
  //           .toUpperCase()
  //           .indexOf(props.searchBrand.value.trim().toUpperCase()) != -1 ||
  //         car.model
  //           .toUpperCase()
  //           .indexOf(props.searchBrand.value.trim().toUpperCase()) != -1
  //       ) {
  //         return car;
  //       }
  // })

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = cars.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageNumber = (num) => {
    setCurrentPage(num);
  };

  return (
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
      <Pagination
        paginate={handlePageNumber}
        postsPerPage={postsPerPage}
        totalPosts={cars.length}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    searchPriceLow: state.searchPriceLow,
    searchPriceHigh: state.searchPriceHigh,
    searchBrand: state.searchBrand,
  };
};

export default connect(mapStateToProps)(Cars);
