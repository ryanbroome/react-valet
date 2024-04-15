import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardSubtitle, ListGroup, ListGroupItem, Button } from "reactstrap";

const TransactionCard = ({ transaction, checkout }) => {
  return (
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
        </ListGroup>
        <ListGroup></ListGroup>
        <ListGroup>
          <Button
            color="danger"
            onClick={() => {
              checkout(transaction.username, transaction.vehicleId);
            }}>
            CHECKOUT
          </Button>
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default TransactionCard;
