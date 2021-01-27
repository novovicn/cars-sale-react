import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./MoreInfo.css";
import axios from "axios";
import Spinner from "./Spinner";

function MoreInfo(props) {
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState();

  let carSearch = `${props.car.brand}  ${props.car.model}`;
  console.log(carSearch);

  const wikiLink = `https://en.wikipedia.org/w/api.php?action=query&titles=${carSearch}&prop=extracts|pageimages|info&pithumbsize=400&inprop=url&redirects=&format=json&origin=*`;

  useEffect(() => {
    const fetchWiki = async () => {
      setLoading(true);
      const response = await axios.get(wikiLink);
      const pages = response.data.query.pages;
      const article = Object.values(pages)[0];
      setArticle(article);
      setLoading(false);
    };

    fetchWiki();
  }, []);

  const history = useHistory();

  const handleBack = () => {
    history.replace("/findcar");
  };

  console.log(article);

  return (
    <div className="moreInfo">
      <button onClick={handleBack} className="moreInfo__cancel">
        BACK
      </button>
      <div className="moreInfo__car">
        <div className="moreInfo__image">
          <img src={props.car.image} alt="" />
        </div>
        <div className="moreInfo__text">
          <h1 className="car-details-big">Car details</h1>
          <br />
          <p>
            <span className="bold">Brand:</span> {props.car.brand}
          </p>
          <p>
            <span className="bold">Model:</span> {props.car.model}
          </p>
          <p>
            <span className="bold">Year:</span> {props.car.year}
          </p>
          <p>
            <span className="bold">Owner:</span> {props.car.owner}
          </p>
          <p>
            <span className="bold">Mileage:</span> {props.car.mileage}
          </p>
          <p>
            <span className="bold">VIN:</span> {props.car.vin}
          </p>
          <h1 className="car-details-big">
            <span className="bold">Price:</span> {props.car.price} €
          </h1>
        </div>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="moreInfo__wiki">
          <div class="moreInfo__wiki--heading">
            <h1>More about this car from wikipedia:</h1>
          </div>
          <div class="moreInfo__wiki--image">
            <img src={article?.thumbnail?.source} />
          </div>
          <br />
          <div class="wiki-textbox">
            <p class="wiki-text">
              {article?.extract?.substring(0, 1000)}...
              <a class="read-more" href={article?.fullurl} target="_blank">
                [read more on wikipedia]
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    car: state.car,
  };
};

export default connect(mapStateToProps)(MoreInfo);
