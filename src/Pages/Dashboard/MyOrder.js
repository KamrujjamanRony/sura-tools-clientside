import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [myOrders, setMyOrders] = useState([]);
  
  useEffect(() => {
    const getItems = async () => {
      const email = user.email;
      const url = `https://sura-tools-serverside-kamrujjamanrony.vercel.app/my-order?email=${email}`;
      const { data } = await axios.get(url);
      setMyOrders(data);
    };
    getItems();
  }, [user]);
  const handleOrderDelete = (id) => {
    const proceed = window.confirm("Are you sure You want to delete this Order?")
    if (proceed) {
      const url = `https://sura-tools-serverside-kamrujjamanrony.vercel.app/my-order/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remainingOrders = myOrders.filter(
            (myOrder) => myOrder._id !== id
          );
          setMyOrders(remainingOrders);
          toast("Item Deleted!!!");
        }
      });
    }
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>location</th>
              <th>Mobile No.</th>
              <th>Payment</th>
              <th>Cancel Order</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>
                  {order.paid ? (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">
                          {order.transactionId}
                        </span>
                      </p>
                    </div>
                  ) : (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-info">Payment</button>
                    </Link>
                  )}
                </td>
                <td>
                  {!order.paid && (
                    <button
                      onClick={() => handleOrderDelete(order._id)}
                      className="btn btn-error text-white"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;