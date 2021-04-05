import React from "react";
import { useHistory } from "react-router-dom";
import './Product.css';

const Product = (props) => {
  const { _id, name, imageURL, price } = props.product;
  let history = useHistory();
  const handleClick = (_id) => {
    // console.log(_id);
  };
  return (
    <div className="col">
      <div className="card h-100 shadow-sm rounded product p-3">
        <div className = "product-bg">
         <img src={imageURL} className="p-4 img-fluid card-img-top" alt="product-banner" />
        </div>
        
        <div className="card-body">
          <h3 className="card-title">{name}</h3> <br />
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <h5>
            <span>$ {price}</span>
          </h5>
          <button
            onClick={() => {
              handleClick(_id);
              history.push(`/checkout/${_id}`);
            }}
            className="btn btn-primary   py-2"
          >
            <span className="ms-2">BUY NOW</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
