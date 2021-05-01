import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import "./AddProduct.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

const AddProducts = () => {
  const [imageURL, setImageURL] = useState(null);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    const productData = {
      name: data.name,
      imageURL: imageURL,
      weight: data.weight,
      price: data.price,
      email: data.email,
    };
    console.log(data);
    const url = `https://nameless-fortress-49774.herokuapp.com/addProduct`;
    // console.log(productData);
    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      // console.log("server side response", productData, res));
      .then((data) => {
        Swal.fire("Success", "Product added", "success");
      });
  };

  const handleImageUpload = (e) => {
    const imageData = new FormData();
    imageData.set("key", "50211fd67230a7597f1fe464edd20367");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => {
        //    console.log(response.data.data.display_url);
        setImageURL(response.data.data.display_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
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
              <Link to="/admin" className="text-white">
                <FontAwesomeIcon icon={faThLarge} /> <span>Manage Product</span>
              </Link>
            </li>
            <li>
              <Link to="/addProduct" className="text-white">
                <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Product</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className=" margin col-md-8 p-4 pr-5">
        <h4 className="add-title"> Add Product </h4>

        <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <input
              name="email"
              defaultValue={loggedInUser.email}
              className="form-control"
              placeholder="Email"
              ref={register({ required: true })}
            />
            {errors.name && (
              <span className="text-danger">Email required</span>
            )}
          </div>
          <div className="mb-3">
            <input
              name="name"
              className="form-control"
              placeholder="Product Name"
              ref={register({ required: true })}
            />
            {errors.name && (
              <span className="text-danger">Product name is required</span>
            )}
          </div>
          <div className="mb-3">
            <input
              name="weight"
              className="form-control"
              placeholder="Product weight"
              ref={register({ required: true })}
            />
            {errors.name && (
              <span className="text-danger">Product Weight is required</span>
            )}
          </div>

          <div className="mb-3">
            <input
              name="price"
              className="form-control"
              placeholder="Product Price"
              ref={register({ required: true })}
            />
            {errors.name && (
              <span className="text-danger">Price is required</span>
            )}
          </div>
          <div className="input-group mb-3">
            <input
              onChange={handleImageUpload}
              name="imageURL"
              type="file"
              className="form-control"
              ref={register({ required: true })}
            />
            {errors.image && (
              <span className="text-danger">File is required</span>
            )}
          </div>

          <input
            className="btn btn-success d-block w-100"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
