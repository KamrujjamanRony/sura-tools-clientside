import React from "react";

const UserRow = ({ user, refetch, index }) => {
  const { email, role } = user;
  const handleMakeAdmin = () => {
    const updatedUser = {
      role: 'admin'
  }
  // update user role
  fetch(`https://sura-tools-serverside-kamrujjamanrony.vercel.app/create-user/${email}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updatedUser),
  }).then(res => res.json()).then(data => {
      refetch();
  })
  }
  
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
      {
                    role === 'admin' ? <label  htmlFor="details-modal" className="btn btn-xs btn-black" disabled>Already Admin</label>
                        :
                        <label onClick={handleMakeAdmin} htmlFor="details-modal" className="btn btn-xs bg-primary hover:bg-cyan-600 border-0 modal-button">Make Admin</label>
                }
      </td>
    </tr>
  );
};

export default UserRow;