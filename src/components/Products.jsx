// import React, { useState, useEffect } from "react";
// import Skeleton from "react-loading-skeleton";
// //import { NavLink } from "react-router-dom";

// const Products = () => {
//       const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [products, setProducts] = useState([]);
//     let componentMounted = true;
    
//       useEffect(() => {
//         fetchProducts();
//       }, []);
    
//      const fetchProducts = async () => {
//        setLoading(true);
//          const response = await fetch("https://fakestoreapi.com/products");
//          console.log(response);
         
//        if (componentMounted) {
//          setData(await response.clone().json());
//            console.log(response);
//            setProducts(response);
//          setLoading(false);
//        }

//        return () => {
//          componentMounted = false;
//        };
//      };
    
//     const Loading = () => {
//         return (
//           <>
//             {/* Loading... */}
//             <div className="col-md-3">
//               <Skeleton height={350} />
//             </div>
//             <div className="col-md-3">
//               <Skeleton height={350} />
//             </div>
//             <div className="col-md-3">
//               <Skeleton height={350} />
//             </div>
//             <div className="col-md-3">
//               <Skeleton height={350} />
//             </div>
//           </>
//         );
//     };

//     const ShowProducts = () => {
//         // item.map((product) => {
//             return (
//               <>
//                 <div className="col-md-3 mb-4">
//                   {products.map((product) => (
//                     <div
//                       className="card h-100 text-center p-4"
//                       key={product.id}
//                     >
//                       <img
//                         src={product.image}
//                         className="card-img-top"
//                         alt={product.title}
//                         height="250px"
//                       />
//                       <div className="card-body">
//                         <h5 className="card-title mb-0">
//                           {
//                             product.title
//                             //.substring(0, 12)
//                           }
//                           ...
//                         </h5>
//                         <p className="card-text lead fw-bold">
//                           ${product.price}
//                         </p>
//                         <a
//                           href=""
//                           // to={`/products/${product.id}`}
//                           className="btn btn-outline-dark"
//                         >
//                           Buy Now
//                         </a>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             );
//         // })
        
//     }

//   return (
//     <div>
//       <div className="container my-5 py-5">
//         <div className="row">
//           <div className="col-12 mb-5">
//             <h1 className="display-6 fw-bolder text-center"> Products</h1>
//             <hr />
//           </div>
//         </div>
//         <div className="row justify-content-center">
//           {loading ? <Loading /> : <ShowProducts />}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Products;





import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      
    fetchProducts();
  }, []);
    
    const fetchProducts = () => {
      setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
          setProducts(res.data);
          setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
        
        
       
    };
    
    const Loading = () => {
      return (
          <>
              <h3>Loading..</h3>
          <div className="col-md-3">
            <Skeleton height={350} />
          </div>
          <div className="col-md-3">
            <Skeleton height={350} />
          </div>
          <div className="col-md-3">
            <Skeleton height={350} />
          </div>
          <div className="col-md-3">
            <Skeleton height={350} />
          </div>
        </>
      );
    };

    const ShowProducts = () => {
        return (
          <>
            <div className="item-container">
            <div className="col-md-3 mb-4">
              {products.map((product) => (
                <div className="card  text-center p-4 " key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt=""
                    height="250px"
                  />
                  
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title}...</h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <button className="btn btn-outline-dark">Buy Now</button>
                  </div>
                </div>
              ))}
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
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>

  );
};
export default Products;
