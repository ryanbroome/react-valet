import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, ListGroup, ListGroupItem, CardText, Button } from "reactstrap";

const ProfileDetail = ({ userDetail }) => {
  return (
    <Card
      color="light"
      body
      className="text-center">
      <CardBody>
        <CardTitle>Current User </CardTitle>
        <CardSubtitle>{userDetail.username}</CardSubtitle>
        <ListGroup>
          <ListGroupItem>Lifetime Parked: {userDetail.totalParked}</ListGroupItem>
          <ListGroupItem>
            Name: {userDetail.firstName} {userDetail.lastName}
          </ListGroupItem>
          <ListGroupItem>Phone: {userDetail.phone}</ListGroupItem>
          <ListGroupItem>Email: {userDetail.email}</ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
};
export default ProfileDetail;
