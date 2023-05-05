import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://sura-tools-serverside-production.up.railway.app/users/", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Make Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserRow key={user._id} user={user} refetch={refetch} index={index}></UserRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;