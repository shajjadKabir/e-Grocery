import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";

import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("https://nameless-fortress-49774.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section className="bg">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1 py-5">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.length === 0 && (
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          )}

          {products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
