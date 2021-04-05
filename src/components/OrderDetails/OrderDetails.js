import React from "react";

const OrderDetails = ({ orderProduct }) => {
  console.log("object", orderProduct);
  const { name, price, weight } = orderProduct;
  return (
    <>
      {" "}
      <tr>
        <td>{name}</td>
        <td>1</td>
        <td>{weight}</td>
        <td>${price}</td>
      </tr>
    </>
  );
};

export default OrderDetails;
