import React from "react";
import image from "./images/download.jpg";
import Products from "./Products";
// fs-4 py-4 
const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white">
        <img src={image} className="card-img" alt="bgimage" height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5
              className="card-title display-3
             fw-bold">
              Welcome to our Ecommerce Shop
            </h5>
            <p className="card-text lead mx-5 px-4 ">
              “ We Always deliver more than expected.”
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
