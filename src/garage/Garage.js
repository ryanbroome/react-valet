import React, { useState, useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import ValetApi from "../api/Api";
import ThemeContext from "../ThemeContext";

import GarageSearchForm from "./GarageSearchForm";
import VehicleCard from "../VehicleCard";

const Garage = () => {
  const history = useHistory();

  const { token, userDetail } = useContext(ThemeContext);
  const [vehicles, setVehicles] = useState(null);
  const [mobileSearchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  function noToken() {
    history.push("/");
    return null;
  }
  // todo redefine this as handleSearch
  useEffect(
    function fetchTransactionsAtMount() {
      try {
        async function filterVehicles() {
          const filteredRes = await ValetApi.getVehicleByMobile(mobileSearchTerm);
          setVehicles(filteredRes.data.vehicle);
          setIsLoading(false);
        }
        filterVehicles();
      } catch (err) {
        console.log(err);
      }
    },
    [mobileSearchTerm]
  );

  const searchVehicles = (mobileSearchTerm) => {
    setIsLoading(true);
    setSearchTerm(mobileSearchTerm);
  };

  function resetList() {
    setSearchTerm("");
  }

  function loggedIn(vehicles) {
    if (!vehicles || vehicles.length === 0) {
      return <div>Sorry no vehicles to show yet</div>;
    }

    function orderedMobileNumbers(vehicles) {
      const activeTicketNums = [];
      vehicles.map((v) => activeTicketNums.push(v.mobile));
      return activeTicketNums.sort();
    }

    return (
      <div>
        <GarageSearchForm
          search={searchVehicles}
          reset={resetList}
        />

        {orderedMobileNumbers(vehicles).map((mobile) => (
          <div>
            <ul>
              <Link to={`/vehicles/${mobile}`}>{mobile}</Link>
            </ul>
          </div>
        ))}
      </div>
    );
  }

  if (isLoading) {
    return <p>Loading Spinner</p>;
  } else {
    return token ? loggedIn(vehicles) : noToken();
  }
};

export default Garage;
