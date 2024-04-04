import React, { useContext, useState, useEffect } from "react";
import ValetApi from "./api/Api";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(function fetchVehiclesWhenMounted() {
    async function fetchVehicles() {
      try {
        const res = await ValetApi.getVehicles();
        setVehicles(res.data.vehicles);
      } catch (err) {
        console.log(err);
      }
    }
    fetchVehicles();
  }, []);

  return (
    <div>
      {vehicles.map((v) => (
        <ul>
          <li>{v.id}</li>
          <li>{v.make}</li>
          <li>{v.model}</li>
          <li>{v.mobile}</li>
          <li>{v.color}</li>
        </ul>
      ))}
    </div>
  );
};

export default VehicleList;
