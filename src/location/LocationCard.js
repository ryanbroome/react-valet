import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, ListGroup, ListGroupItem, CardText, Button } from "reactstrap";
// import { Link } from "react-router-dom";

const LocationCard = ({ location }) => {
  if (!location) {
    return null;
  }
  return (
    <Card
      color="light"
      body
      className="text-center">
      <CardBody>
        <CardTitle>Current Site: {location.sitename}</CardTitle>
        <CardSubtitle>More details to follow about location</CardSubtitle>
        <ListGroup>
          <ListGroupItem>Address to follow</ListGroupItem>
          <ListGroupItem>Hours to follow</ListGroupItem>
          <ListGroupItem>List of Active Valets to follow</ListGroupItem>
          <ListGroupItem>Total vehicles parked by location to follow</ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default LocationCard;
