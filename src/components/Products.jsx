import React, { useState, useEffect } from "react";

const Products = () => {

     const [loading, setLoading] = useState(false);
    let componentMounted = true;
    
      useEffect(() => {
        const getProducts = async () => {
          setLoading(true);
          const response = await fetch("https://fakestoreapi.com/products");
          if (componentMounted) {
            setLoading(false);
            
          }

          return () => {
            componentMounted = false;
          };
        };

        getProducts();
      }, []);
    
    const Loading = () => {
      return (
        <>
         Loading...
        </>
      );
    };

    const ShowProducts = (product) => { 
        return (
          <>
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4" key={product.id}>
                <img
                  src={product.image}
                  className="card-img-top"
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.title}
                  </h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <a
                    to={`${product.id}`}
                    className="btn btn-outline-dark"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </>
        );
    }

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center"> Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Products;