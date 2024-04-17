// TODO fix placeholder , Rendered Components vs NavHead component not looking good
// todo fix error handling . When there is an error, express responds with an error the way we set it up

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./App.css";
import ValetApi from "./api/Api";
import UserContext from "./auth/UserContext";

import Routes from "./routes-nav/Routes";
import NavHead from "./routes-nav/NavHead";

function App() {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [userDetail, setUserDetail] = useState(JSON.parse(localStorage.getItem("userDetail")) || null);
  const [error, setError] = useState(null);
  const history = useHistory();

  const login = async (username, password) => {
    try {
      // make api call
      const res = await ValetApi.validateUser(username, password);
      const userRes = await ValetApi.getUser(username);

      // set state token, userDetails
      setToken(res.data.token);
      setUserDetail(userRes.data.user);

      // set token on API helper class (needed for valid requests)
      ValetApi.token = res.data.token;

      // save token and userDetails to localStorage to persist if refresh
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userDetail", JSON.stringify(userRes.data.user));

      setError(null);
      // redirect
      history.push("/transactions/active");
    } catch (err) {
      setError(err);
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

      // reset error
      setError(null);

      // redirect to parked vehicles page
      history.push("/");
    } catch (err) {
      setError(err);
      console.error(err);
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
      setError(null);
    } catch (err) {
      setError(err);
      console.error(err);
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

      setError(null);
      // save to localStorage?
    } catch (err) {
      setError(err);
      console.error(err);
    }
  };

  const addLocation = async (sitename) => {
    try {
      const createLocationRes = await ValetApi.createLocation(sitename);
      console.log(createLocationRes.data, "CREATE LOCATION RES.DATA");
      const newLocationId = createLocationRes.data.location.success;
      alert(`Location with sitename ${sitename} and with ID ${newLocationId} successfully created, you'll want to keep track of that location ID to register new users with`);
      history.push("/");
    } catch (err) {
      setError(err);
      console.error(err);
    }
  };

  useEffect(() => {
    const cleanup = () => {
      // Reset error state
      setError(null);
    };

    return cleanup;
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ token, userDetail, error, login, register, update, logout, addVehicle, addLocation, setError }}>
        <NavHead />
        <p
          height="200px"
          style={{ margin: "100px" }}>
          {" "}
        </p>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <Routes />
      </UserContext.Provider>
    </div>
  );
}

export default App;
