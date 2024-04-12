import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, ListGroup, ListGroupItem, CardText } from "reactstrap";
import TransactionList from "./TransactionList";

const TransactionCard = ({ transaction, checkout }) => {
  return (
    // <div>
    <Card
      color="light"
      body
      className="text-center">
      <CardBody>
        <CardSubtitle>Ticket: {transaction.ticketNum}</CardSubtitle>

        <ListGroup flush>
          <ListGroupItem>Mobile: {transaction.mobile}</ListGroupItem>
          <ListGroupItem>
            <Link to={`/transactions/id/${transaction.transactionId}`}>Detail </Link>
          </ListGroupItem>
          <ListGroupItem>Color: {transaction.color}</ListGroupItem>
          <ListGroupItem>Make: {transaction.make}</ListGroupItem>
        </ListGroup>

        <ListGroup>
          <ListGroupItem>
            Parked By Valet: {transaction.firstName} {transaction.lastName}
          </ListGroupItem>
          <ListGroupItem>In Time: {transaction.checkIn}</ListGroupItem>
          <ListGroupItem>Damages: {transaction.damages}</ListGroupItem>
          <ListGroupItem>Notes: {transaction.notes}</ListGroupItem>
          <button
            onClick={() => {
              checkout(transaction.username, transaction.vehicleId);
            }}>
            CHECKOUT
          </button>
        </ListGroup>
        <ListGroup>
          {/* <ListGroupItem>Site: {transaction.sitename}</ListGroupItem>
          <ListGroupItem>Site ID: {transaction.locationId}</ListGroupItem>
          <ListGroupItem>
            <b>Transaction Info</b>
          </ListGroupItem> */}
          {/* <ListGroupItem>Trans: {transaction.transactionId}</ListGroupItem> */}
          {/* <ListGroupItem>Ticket:{transaction.ticketNum}</ListGroupItem> */}
          {/* <ListGroupItem>Trans Time: {transaction.transactionTime}</ListGroupItem> */}
          {/* <ListGroupItem>
            <b>Customer Vehicle Info</b>
          </ListGroupItem> */}
          {/* <ListGroupItem>Vehicle ID: {transaction.vehicleId}</ListGroupItem> */}
          {/* <ListGroupItem>Status: {transaction.vehicleStatus}</ListGroupItem> */}
          {/* <ListGroupItem>Out Time: {transaction.checkOut}</ListGroupItem> */}
          {/* <b>Valet Info</b> */}
          {/* </ListGroupItem> */}
          {/* <ListGroupItem>Valet ID: {transaction.userId}</ListGroupItem> */}
          {/* <ListGroupItem>Last: {transaction.lastName}</ListGroupItem> */}
          {/* <ListGroupItem>Phone: {transaction.phone}</ListGroupItem> */}
          {/* <ListGroupItem>Email: {transaction.email}</ListGroupItem> */}
          {/* <ListGroupItem>TotalParked: {transaction.totalParked > 0 ? transaction.totalParked : "None"}</ListGroupItem> */}
          {/* <ListGroupItem>Admin: {transaction.isAdmin ? "Yes" : "No"}</ListGroupItem> */}
        </ListGroup>
      </CardBody>
    </Card>
    // </div>
  );
};

export default TransactionCard;
