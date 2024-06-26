import { Card, CardBody, CardSubtitle, ListGroup, ListGroupItem } from "reactstrap";

import React, { useEffect, useState, useContext } from "react";
import UserContext from "../auth/UserContext";
import { useParams } from "react-router-dom";
import ValetApi from "../api/Api";

const TransactionDetail = () => {
  const { id } = useParams();
  const { error, setError } = useContext(UserContext);
  const [transaction, setTransaction] = useState();

  useEffect(
    function fetchTransactionsAtMount() {
      async function fetchTransactions() {
        try {
          const transactionRes = await ValetApi.getTransactionById(id);
          setTransaction(transactionRes.data.transactions);
        } catch (err) {
          setError(err);
          console.log(err);
        }
      }
      fetchTransactions();
    },
    [id]
  );

  function viewTransaction(transaction) {
    return (
      <div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <Card
          color="light"
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
              <ListGroupItem>TotalParked: {Number(transaction.totalParked) > 0 ? transaction.totalParked : "None"}</ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </div>
    );
  }

  function showSpinner() {
    return (
      <div
        className="spinner-border text-primary"
        role="status">
        {error && <div style={{ color: "red" }}>{error}</div>}
        <span className="visually-hidden"></span>
      </div>
    );
  }
  return transaction ? viewTransaction(transaction) : showSpinner();
};

export default TransactionDetail;
