import React, { useEffect, useState } from "react";
import ValetApi from "./api/Api";

const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(function fetchUsersWhenMounted() {
    async function fetchUsers() {
      try {
        const res = await ValetApi.getUsers();
        console.log("useEffect res", res);
        setUsers(res.data.users);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUsers();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <div>
          <h1>{user.username}</h1>
          <ul>
            <li>
              name : {user.firstName} {user.lastName}
            </li>
            <li>email: {user.email}</li>
            <li>phone: {user.phone}</li>
            <li>total parked : {user.totalParked}</li>
            <li>admin : {user.isAdmin ? "true" : "false"}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserPage;
