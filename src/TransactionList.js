import React, { useEffect, useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { FormGroup, Form, Input, Label, Button } from "reactstrap";

import ValetApi from "./api/Api";
// import AddVehicleForm from "./AddVehicleForm";

import TransactionSearchForm from "./TransactionSearchForm";
import TransactionCard from "./TransactionCard";
import ThemeContext from "./ThemeContext";

// import VehicleCard from "./VehicleCard";

const TransactionList = () => {
  const { userDetail, token } = useContext(ThemeContext);
  // const [mobileSearchTerm, setMobileSearchTerm] = useState("''");
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

  //TODO doesnt work need to pass in vehicleID, transactionID not sure I want to delete a vehicle
  const handleRemove = async (vehicleId, transactionId) => {
    await ValetApi.deleteVehicle(vehicleId);
    await ValetApi.deleteTransaction(transactionId);
    // remove from local storage
    history.push("/transactions/active");
  };

  // *What to render if token present or not
  function loggedIn(transactions) {
    return (
      <div>
        <TransactionSearchForm
          search={handleSearchByMobile}
          reset={handleReset}
        />
        {transactions.length > 0
          ? transactions.map((trans) => (
              <div key={`Transaction-${trans.transactionId}`}>
                <TransactionCard
                  transaction={trans}
                  checkout={checkout}
                />
              </div>
            ))
          : "false"}
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
