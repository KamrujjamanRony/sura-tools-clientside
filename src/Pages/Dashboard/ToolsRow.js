import React from "react";

const ToolsRow = ({ tool, handleToolDelete }) => {
  const { _id, image, name, min_quantity, available_quantity, price } = tool;
  return (
    <tr>
      <th>
        <div className="avatar">
          <div className="w-16 rounded">
            <img src={image} alt="tool" />
          </div>
        </div>
      </th>
      <td>{name}</td>
      <td>{price}</td>
      <td>{available_quantity}</td>
      <td>{min_quantity}</td>
      <td>
        <button
          onClick={() => handleToolDelete(_id)}
          className="btn btn-error btn-xs"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ToolsRow;
