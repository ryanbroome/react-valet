import React, { useContext, useState, useEffect } from "react";
import ValetApi from "./api/Api";
import VehicleCard from "./VehicleCard";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function fetchVehiclesWhenMounted() {
    async function fetchVehicles() {
      try {
        const res = await ValetApi.getAllVehicles();
        setVehicles(res.data.vehicles);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchVehicles();
  }, []);

  if (isLoading) {
    return <p>Loading Spinner</p>;
  } else
    return (
      <div>
        <h1>this is a list of all vehicles</h1>
        {/* should change to transactions with same date for the api call */}
        {vehicles.map((v) => (
          <VehicleCard vehicle={v} />
        ))}
      </div>
    );
};

export default VehicleList;
