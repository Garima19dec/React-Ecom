import React from "react";
import image from "./images/download.jpg";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <div className="card bg-dark text-white">
        <img src={image} className="card-img" alt="..." height="550px" />
        <div className="card-img-overlay">
          <div classNameName="container"></div>
          <h5 className="card-title fs-4 py-4 fw-bold ">
            Welcome to our Ecommerce Shop
          </h5>
          <p className="card-text fs-5 mx-5">“ We Always deliver more than expected.”</p>
        </div>
          </div>
          <Products/>
    </div>
  );
}

export default Home;
