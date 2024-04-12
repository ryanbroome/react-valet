import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, ListGroup, ListGroupItem, CardText, Button } from "reactstrap";
// import { Link } from "react-router-dom";

const LocationCard = (location) => {
  return (
    <Card
      color="light"
      body
      className="text-center">
      <CardBody>
        <CardSubtitle>Sitename: {location.sitename}</CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default LocationCard;
