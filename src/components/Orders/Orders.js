import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../App";
import OrderDetails from "../OrderDetails/OrderDetails";

const Orders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(
      `https://nameless-fortress-49774.herokuapp.com/orders?email=${loggedInUser.email}`
    )
      .then((res) => res.json())
      .then((data) => filterOrders(data));
  }, []);
  // console.log('order', orders);

  const filterOrders = (data) => {
    const filterData = data.filter(
      (order) => order.email === loggedInUser.email
    );
    setOrders(filterData);
  };

  return (
    <div className="container">
      <h3 style={{ textAlign: "center" }}>Total Orders:{orders.length} </h3>
      <h2>Order by: {loggedInUser.email}</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Weight</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((orderProduct) => (
            <OrderDetails orderProduct={orderProduct} key={orderProduct._id} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Orders;
