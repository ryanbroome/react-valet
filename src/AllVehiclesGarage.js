import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import ValetApi from "./api/Api";
import AddVehicleForm from "./AddVehicleForm";
import VehicleCard from "./VehicleCard";
import ThemeContext from "./ThemeContext";

const AllVehiclesGarage = () => {
  const { userDetail, token } = useContext(ThemeContext);
  const [vehicles, setVehicles] = useState([]);
  const history = useHistory();

  useEffect(function fetchVehiclesWhenMounted() {
    async function fetchVehicles() {
      try {
        const res = await ValetApi.getAllVehicles();
        setVehicles(res.data.vehicles);
      } catch (err) {
        console.log(err);
      }
    }
    fetchVehicles();
  }, []);

  const addVehicle = async (ticketNum, vehicleStatus, mobile, color, make, damages, notes) => {
    try {
      const addVehicleRes = await ValetApi.createVehicle(Number(ticketNum), vehicleStatus, mobile, color, make, damages, notes);
      setVehicles([...vehicles, addVehicleRes.data.vehicle]);
      const addTransactionRes = await ValetApi.createTransaction(userDetail.id, addVehicleRes.data.vehicle.id, userDetail.locationId);
      // save to localStorage?
      // redirecting?
    } catch (err) {
      console.log(err);
      //alert(error)
    }
  };

  function loggedIn(vehicle) {
    return (
      <div>
        <AddVehicleForm addVehicle={addVehicle} />
        {vehicles.length > 0 ? vehicles.map((v) => <VehicleCard vehicle={v} />) : "false"}
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

  return token ? loggedIn(userDetail) : loggedOut();
};

export default AllVehiclesGarage;
