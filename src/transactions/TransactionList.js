import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
// import { FormGroup, Form, Input, Label, Button } from "reactstrap";

import ValetApi from "../api/Api";

import TransactionSearchForm from "../forms/TransactionSearchForm";
import TransactionCard from "./TransactionCard";
import UserContext from "../auth/UserContext";

const TransactionList = () => {
  const { userDetail, token } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);
  const history = useHistory();

  useEffect(
    function fetchTransactionsWhenMounted() {
      async function fetchTransactions() {
        try {
          const res = await ValetApi.getAllTransactionsByLocationAndStatus(userDetail.locationId, "parked");
          setTransactions(res.data.transactions);
        } catch (err) {
          console.log(err);
        }
      }
      fetchTransactions();
    },
    [userDetail.locationId]
  );

  const handleSearchByMobile = async (locationId, mobile) => {
    try {
      const searchRes = await ValetApi.getActiveTransactionsByMobile(locationId, mobile);
      setTransactions([...searchRes.data.transactions]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleReset = async (locationId, status) => {
    try {
      const resetRes = await ValetApi.getAllTransactionsByLocationAndStatus(locationId, status);
      setTransactions([...resetRes.data.transactions]);
      history.push("/transactions/active");
    } catch (err) {
      console.error(`Error resetting getAllTransactionsByLocationAndStatus`);
    }
  };

  const checkout = async (username, vehicleId, transactionId) => {
    try {
      await ValetApi.checkoutVehicle(vehicleId);
      await ValetApi.parkOne(username);

      setTransactions(transactions.filter((trans) => trans.transactionId !== transactionId));
      history.push("/addVehicle");
    } catch (err) {
      console.error(`Error parkOne for username : ${username} vehicleId : ${vehicleId}`);
    }
  };

  const handleLostKeys = async (locationId, userId) => {
    try {
      const searchRes = await ValetApi.lostKeys(locationId, userId);
      setTransactions([...searchRes.data.transactions]);
    } catch (err) {
      console.log(err);
    }
  };

  function loggedIn(transactions) {
    return (
      <div>
        <TransactionSearchForm
          search={handleSearchByMobile}
          reset={handleReset}
          lostKeys={handleLostKeys}
        />
        {transactions.length > 0
          ? transactions.map((trans) => (
              <TransactionCard
                key={`TransactionCard-${trans.transactionId}`}
                transaction={trans}
                checkout={checkout}
              />
            ))
          : "No Vehicles Active at this location"}
      </div>
    );
  }

  function loggedOut() {
    return (
      <div>
        <p>Please Login to see your ActiveGarage</p>
      </div>
    );
  }

  return token ? loggedIn(transactions) : loggedOut();
};

export default TransactionList;