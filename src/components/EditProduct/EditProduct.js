import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const EditProduct = () => {
  const [editProduct, setEditProduct] = useState([]);

  useEffect(() => {
    fetch("https://nameless-fortress-49774.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setEditProduct(data));
  }, [editProduct]);

  
  const deleteProduct = (id) => {
    fetch(`https://nameless-fortress-49774.herokuapp.com/delete/${id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("delete ");
        if (result) {
          console.log("delete_success");
        }
      })
      .then((err) => console.log("object", err));
  };

  return (
    <div className="manage-product-area">
      <h3>Manage Product</h3>

      <div className="manage-background">
        <div className="container">
          <div className="product-info">
            <Table hover>
              <thead>
                <tr>
                  <th className="border-left-design">Product Name</th>
                  <th>Weight</th>
                  <th>Price</th>
                  <th>Email</th>
                  <th className="border-right-design">Action</th>
                </tr>
              </thead>
              <tbody>
                {editProduct?.map((product) => (
                  <tr>
                    <td>{product.name}</td>
                    <td>{product.weight}</td>
                    <td>{product.price}</td>
                    <td>{product.email}</td>
                    <td>
                      <button
                        onClick={() => deleteProduct(product._id)}
                        className="btn delete-btn"
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
