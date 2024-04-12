import React from "react";
import { Card } from "reactstrap";

const ProfileDetail = ({ userDetail }) => {
  return (
    <div>
      <h3>user: {userDetail.username}</h3>
      <ul>
        <li>lifetime total parked: {userDetail.totalParked}</li>
        <li>
          name : {userDetail.firstName} {userDetail.lastName}
        </li>
        <li>phone: {userDetail.phone}</li>
        <li>email: {userDetail.email}</li>
      </ul>
    </div>
  );
};
export default ProfileDetail;
