import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";
import About from "./About";

// import VehicleList from "./VehicleList";
// import VehicleDetail from "./VehicleDetail";
// import Transactions from "./Transactions";
// import Garage from "./garage/Garage";
// import ActiveGarage from "./AllVehiclesGarage";

import AddVehicleForm from "./AddVehicleForm";
import TransactionList from "./TransactionList";
import TransactionDetail from "./TransactionDetail";

import LocationPage from "./LocationPage";

import Profile from "./Profile";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

import NotFound from "./NotFound";

const Routes = () => {
  //
  return (
    <Switch>
      <Route
        exact
        path="/">
        <HomePage />
      </Route>

      <Route
        exact
        path="/login">
        <LoginForm />
      </Route>

      <Route
        exact
        path="/register">
        <RegisterForm />
      </Route>

      <Route
        exact
        path="/about">
        <About />
      </Route>

      <Route
        exact
        path="/profile">
        <Profile />
      </Route>

      <Route
        exact
        path="/addVehicle">
        <AddVehicleForm />
      </Route>

      <Route
        exact
        path="/transactions/active">
        <TransactionList />
      </Route>

      <Route
        exact
        path="/transactions/id/:id">
        <TransactionDetail />
      </Route>

      <Route
        exact
        path="/locations/id/:id">
        <LocationPage />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
