import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import Swal from 'sweetalert2';

const Checkout = () => {
  const { _id } = useParams();
  const [detail, setDetail] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    const url = `https://nameless-fortress-49774.herokuapp.com/checkout/${_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetail(data[0]));
  }, [_id]);
  // console.log(detail);
  // console.log("name,price", detail?.name, detail?.price);

  let name = detail?.name;
  let price = detail?.price;
  let weight = detail?.weight;

  const handleCheckout = () => {
    const orderInfo = {
      name,
      price,
      weight,
      ...loggedInUser
    };
    fetch("https://nameless-fortress-49774.herokuapp.com/addOrders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json()) // console.log('server side response', res)
      .then((data) => {
        if (data) {
          // alert(
          //   "your order placed successfully,Go to order page to see orders"
          // );
          Swal.fire('Success', 'your order placed successfully,Go to order page to see your orders', 'success');
        }
      });
  };
  return (
    <div className="container">
      <div className="checkout mt-5">
      <h4 className=""> Checkout </h4>
      <h4 className=""> Order time : 
       {
        new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
        }
      </h4>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>SL No.</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Weight</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{name}</td>
            <td>1</td>
            <td>{weight}</td>
            <td>${price}</td>
          </tr>
          <tr>
          <td colSpan="4">Total</td>
            {/* <td></td> */}
            <td>${price}</td>
          </tr>
        </tbody>
      </Table>
      <Button variant="primary" onClick={handleCheckout}>
        {" "}
        Checkout
      </Button>
      </div>
      </div>
  );
};
export default Checkout;
