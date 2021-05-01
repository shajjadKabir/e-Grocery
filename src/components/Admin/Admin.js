import React from "react";
import "./Admin.css";
import { Link } from "react-router-dom";
import EditProduct from "../EditProduct/EditProduct";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Admin = () => {
  return (
    <>
      <div className="container-fluid row ">
        <div className="margin col-md-4 px-4">
          <div className="sidebar ">
            <div>
              <Link to="/" className="text-white">
                <h2 className="mb-4"> e-Grocery</h2>
              </Link>
            </div>
            <ul className="list-unstyled">
              <li>
                <Link className="text-white">
                  <FontAwesomeIcon icon={faThLarge} />{" "}
                  <span>Manage Product</span>
                </Link>
              </li>
              <li>
                <Link to="/addProduct" className="text-white">
                  <FontAwesomeIcon icon={faPlusSquare} />{" "}
                  <span>Add Product</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" margin col-md-8 p-4 pr-5">
          <div className="form-area">
            <EditProduct />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
