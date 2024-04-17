import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../homepage/HomePage";
import About from "../homepage/About";

import AddVehicleForm from "../forms/AddVehicleForm";
import AddLocationForm from "../forms/AddLocationForm";

import TransactionList from "../transactions/TransactionList";
import TransactionDetail from "../transactions/TransactionDetail";

import LocationDetail from "../location/LocationDetail";

import ProfileForm from "../forms/ProfileForm";
// import LoginForm from "../auth/LoginForm";
import ValidLoginForm from "../auth/ValidLoginForm";

// import RegisterForm from "../auth/RegisterForm";
import ValidRegisterForm from "../auth/ValidRegisterForm";

import NotFound from "./NotFound";

const Routes = () => {
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
        <ValidLoginForm />
        {/* <LoginForm /> */}
      </Route>

      <Route
        exact
        path="/register">
        <ValidRegisterForm />
      </Route>

      <Route
        exact
        path="/about">
        <About />
      </Route>

      <Route
        exact
        path="/updateProfile">
        <ProfileForm />
      </Route>

      <Route
        exact
        path="/addVehicle">
        <AddVehicleForm />
      </Route>

      <Route
        exact
        path="/addLocation">
        <AddLocationForm />
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
        <LocationDetail />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
