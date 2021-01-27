import React from "react";
import "./Landing.css";
import newsImg from "./img/car-news.jpg";

function Landing() {
  return (
    <div className="landing">
      <div className="landing__main">
        <div className="landing__main--content">
          <h1>Welcome to car shop.</h1>
          <p>
            For fantastic offers and great choice, our site is your number one
            second hand car shop.
          </p>
          <div className="line"></div>
          <a href="./carlist.html">EXPLORE</a>
        </div>
      </div>
      <div className="landing__news">
        <div className="landing__news--text">
          <h1>Latest News</h1>
          <h1>ARE DIESEL ENGINES GOING TO BE BANNED?</h1>
          <div className="line line-black"></div>
          <p>
            Full electrification powered by renewable sources is a long way from
            mainstream adoption, but diesel continues to represent a viable
            option for drivers now and in the future. We show you why.
          </p>
          <a
            href="https://dieselinformation.aecc.eu/are-diesel-engines-going-to-be-banned/"
            target="_blank"
            className="read-more-news"
          >
            Read more
          </a>
        </div>
        <div className="landing__news--image">
          <img src={newsImg} alt="" />
        </div>
      </div>
      <div className="landing__about">
        <div className="landing__about--image"></div>
        <div className="landing__about--text">
          <h1>About</h1>
          <p>
            Hi! We are situated in Belgrade, Serbia. This is the site where you
            come to either sell your car, or buy it from other users.
          </p>
        </div>
      </div>
      <div className="landing__contact">
          <h1>CONTACT</h1>
          <div className="landing__contact--text">
              <ul>
                <li><a href=""><i className="fas fa-phone"></i> +381605559659</a></li>
                <li><a href=""><i className="fas fa-envelope"></i> novovicnenad96@gmail.com</a></li>
                <li><a href=""><i className="fab fa-linkedin"></i> Nenad Novovic</a></li>
              </ul>
            </div>
      </div>
      <div className="landing__footer">
        <h4>&copy; Corpyright Nenad Novovic 2020</h4>
      </div>
    </div>
  );
}

export default Landing;
