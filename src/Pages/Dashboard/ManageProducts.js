import React from "react";
import { toast } from "react-toastify";
import useTools from "../../hooks/useTools";
import ToolsRow from "./ToolsRow";

const ManageProducts = () => {
  const [tools, setTools] = useTools([]);
  const handleToolDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure You want to delete this Order?"
    );
    if (proceed) {
      const url = `http://localhost:5000/tool/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remainingOrders = tools.filter((tool) => tool._id !== id);
            setTools(remainingOrders);
            toast("Item Deleted!!!");
          }
        });
    }
  };
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Image</th>
            <th>Tool</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Min Quantity</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <ToolsRow
              key={tool._id}
              tool={tool}
              handleToolDelete={handleToolDelete}
            ></ToolsRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
