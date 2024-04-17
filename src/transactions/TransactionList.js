import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import ValetApi from "../api/Api";

import TransactionSearchForm from "../forms/TransactionSearchForm";
import TransactionCard from "./TransactionCard";
import UserContext from "../auth/UserContext";

/** Show Transactions for active user location
 *
 * **/
const TransactionList = () => {
  const history = useHistory();
  const { userDetail, token, error, setError } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);

  useEffect(function fetchTransactionsWhenMounted() {
    async function fetchTransactions() {
      try {
        const res = await ValetApi.getAllTransactionsByLocationAndStatus(userDetail.locationId, "parked");
        setTransactions(res.data.transactions);
      } catch (err) {
        setError(err);
        console.error(err);
      }
    }
    fetchTransactions();
  }, []);

  const handleSearchByMobile = async (locationId, mobile) => {
    try {
      const searchRes = await ValetApi.getActiveTransactionsByMobile(locationId, mobile);
      setTransactions([...searchRes.data.transactions]);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  const handleReset = async (locationId, status) => {
    try {
      const resetRes = await ValetApi.getAllTransactionsByLocationAndStatus(locationId, status);
      setTransactions([...resetRes.data.transactions]);
      history.push("/transactions/active");
    } catch (err) {
      setError(err);
      console.error(err);
    }
  };

  const checkout = async (username, vehicleId, transactionId) => {
    try {
      await ValetApi.checkoutVehicle(vehicleId);
      await ValetApi.parkOne(username);

      setTransactions(transactions.filter((trans) => trans.transactionId !== transactionId));
      history.push("/addVehicle");
    } catch (err) {
      setError(err);
      console.error(err);
    }
  };

  const handleLostKeys = async (locationId, userId) => {
    try {
      const searchRes = await ValetApi.lostKeys(locationId, userId);
      setTransactions([...searchRes.data.transactions]);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  function loggedIn(transactions) {
    return (
      <div>
        {error && <div>{error}</div>}
        <TransactionSearchForm
          search={handleSearchByMobile}
          reset={handleReset}
          lostKeys={handleLostKeys}
        />

        <div className="container-fluid row wrap">
          {transactions.length > 0 ? (
            transactions.map((trans) => (
              <div
                className="col-sm"
                key={`Transaction-Container-${trans.transactionId}`}>
                <TransactionCard
                  key={`TransactionCard-${trans.transactionId}`}
                  transaction={trans}
                  checkout={checkout}
                />
              </div>
            ))
          ) : (
            <div
              className="spinner-border text-primary"
              role="status">
              <span className="visually-hidden"></span>
            </div>
          )}
        </div>
      </div>
    );
  }

  function loggedOut() {
    return (
      <div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <p>Please Login to see your ActiveGarage</p>
      </div>
    );
  }

  return token ? loggedIn(transactions) : loggedOut();
};

export default TransactionList;
