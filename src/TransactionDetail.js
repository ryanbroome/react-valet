import { Card, CardBody, CardTitle, CardSubtitle, ListGroup, ListGroupItem, CardText, Button } from "reactstrap";
import ThemeContext from "./ThemeContext";

import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import ValetApi from "./api/Api";

const TransactionDetail = () => {
  // ? How to pass transaction.id
  const { id } = useParams();
  // console.log("TRANSACTION DETAIL ID=> ", id);
  // const [transactionIdSearchTerm, setTransactionIdSearchTerm] = useState(id);
  const [transaction, setTransaction] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    function fetchTransactionsAtMount() {
      async function fetchTransactions() {
        try {
          const transactionRes = await ValetApi.getTransactionById(id);
          setTransaction(transactionRes.data.transactions);
          setIsLoading(false);
        } catch (err) {
          console.log(err);
        }
      }
      fetchTransactions();
    },
    [id]
  );

  function loggedIn(transaction) {
    return (
      <Card
        color="dark"
        body
        className="text-center">
        <CardBody>
          <CardSubtitle>{transaction.ticketNum}</CardSubtitle>
          <ListGroup flush>
            <ListGroupItem>Site: {transaction.sitename}</ListGroupItem>
            <ListGroupItem>Site ID: {transaction.locationId}</ListGroupItem>
            <ListGroupItem>Trans ID: {transaction.transactionId}</ListGroupItem>
            <ListGroupItem>Ticket:{transaction.ticketNum}</ListGroupItem>
            <ListGroupItem>Trans Time: {transaction.transactionTime}</ListGroupItem>
            <ListGroupItem>Mobile: {transaction.mobile}</ListGroupItem>
            <ListGroupItem>Vehicle ID: {transaction.vehicleId}</ListGroupItem>
            <ListGroupItem>Status: {transaction.vehicleStatus}</ListGroupItem>
            <ListGroupItem>In Time: {transaction.checkIn}</ListGroupItem>
            <ListGroupItem>Out Time: {transaction.checkOut}</ListGroupItem>
            <ListGroupItem>Color: {transaction.color}</ListGroupItem>
            <ListGroupItem>Make: {transaction.make}</ListGroupItem>
            <ListGroupItem>Damages: {transaction.damages}</ListGroupItem>
            <ListGroupItem>Notes: {transaction.notes}</ListGroupItem>
            <ListGroupItem>Valet ID: {transaction.userId}</ListGroupItem>
            <ListGroupItem>
              Valet: {transaction.firstName} {transaction.lastName}
            </ListGroupItem>
            <ListGroupItem>Last: {transaction.lastName}</ListGroupItem>
            <ListGroupItem>Phone: {transaction.phone}</ListGroupItem>
            <ListGroupItem>Email: {transaction.email}</ListGroupItem>
            <ListGroupItem>TotalParked: {transaction.totalParked > 0 ? transaction.totalParked : "None"}</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    );
  }

  function loggedOut() {
    return (
      <div>
        <p>Loading Spinner</p>
      </div>
    );
  }
  return transaction ? loggedIn(transaction) : loggedOut();
};

export default TransactionDetail;