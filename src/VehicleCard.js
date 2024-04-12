import React from "react";
// import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, ListGroup, ListGroupItem, CardText } from "reactstrap";

const VehicleCard = ({ vehicle }) => {
  return (
    <div>
      <Card
        color="light"
        body
        className="text-center">
        <CardBody>
          <CardSubtitle>Ticket:{vehicle.ticketNum}</CardSubtitle>
          <ListGroup flush>
            <ListGroupItem>in: {vehicle.mobile}</ListGroupItem>
            <ListGroupItem>in: {vehicle.checkIn}</ListGroupItem>
            <ListGroupItem>out: {vehicle.checkOut}</ListGroupItem>
            <ListGroupItem>status: {vehicle.vehicleStatus}</ListGroupItem>
            <ListGroupItem>color: {vehicle.color}</ListGroupItem>
            <ListGroupItem>make: {vehicle.make}</ListGroupItem>
            <ListGroupItem>damages: {vehicle.damages}</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </div>
  );
};

export default VehicleCard;
