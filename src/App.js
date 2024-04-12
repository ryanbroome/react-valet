import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./App.css";
import ValetApi from "./api/Api";
import ThemeContext from "./ThemeContext";

import Routes from "./Routes";
import NavHead from "./NavHead";

function App() {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [userDetail, setUserDetail] = useState(JSON.parse(localStorage.getItem("userDetail")) || null);
  // const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();

  const login = async (username, password) => {
    try {
      // make api call
      const res = await ValetApi.validateUser(username, password);
      const userRes = await ValetApi.getUser(username);

      // set state token, userDetails
      setToken(res.data.token);
      setUserDetail(userRes.data.user);
      // setIsLoading(false);

      // set token on API helper class (needed for valid requests)
      ValetApi.token = res.data.token;

      // save token and userDetails to localStorage to persist if refresh
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userDetail", JSON.stringify(userRes.data.user));

      // redirect to parked vehicles page
      // history.push("/vehicles/status/parked");
      history.push("/transactions/active");
    } catch (err) {
      console.error(err);
    }
  };

  const register = async (username, password, firstName, lastName, email, phone, locationId) => {
    try {
      // make api call: register user
      const res = await ValetApi.registerUser(username, password, firstName, lastName, email, phone, locationId);
      const userRes = await ValetApi.getUser(username);

      // set state: token, userDetails
      setToken(res.data.token);
      setUserDetail(userRes.data.user);
      // setIsLoading(false);

      // set token on API helper class (needed for valid requests)
      ValetApi.token = res.data.token;

      // save token and userDetails to localStorage to persist if refresh
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userDetail", JSON.stringify(userRes.data.user));

      // redirect to parked vehicles page
      // history.push("/vehicles/status/parked");
      history.push("/transactions/active");
    } catch (err) {
      console.log(err);
    }
  };

  const update = async (username, data) => {
    try {
      // API call to update user
      const res = await ValetApi.updateUser(username, { ...data });

      // update state when user updated
      setUserDetail(res.data.user);
      // setIsLoading(false);

      // update localstorage with user data
      localStorage.setItem("userDetail", JSON.stringify(res.data.user));

      //? check if this matters
      const newUser = res;
      if (newUser.username !== username) {
        // how to handle this or if it matters
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    setToken(null);
    setUserDetail(null);
    localStorage.clear();
    history.push("/");
  };

  const addVehicle = async (ticketNum, vehicleStatus, mobile, color, make, damages, notes) => {
    try {
      const addVehicleRes = await ValetApi.createVehicle(Number(ticketNum), vehicleStatus, mobile, color, make, damages, notes);
      await ValetApi.createTransaction(userDetail.id, addVehicleRes.data.vehicle.id, userDetail.locationId);
      await ValetApi.parkOne(userDetail.username);
      // const addTransactionRes =
      // const parkOneRes =
      setUserDetail({ ...userDetail, totalParked: userDetail.totalParked + 1 });

      history.push("/");

      // save to localStorage?
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={{ token, userDetail, login, register, update, logout, addVehicle }}>
        <NavHead />
        <Routes />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
