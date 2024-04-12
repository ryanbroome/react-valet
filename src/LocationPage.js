import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

import ThemeContext from "./ThemeContext";
import { Card, CardBody, CardTitle, CardSubtitle, ListGroup, ListGroupItem, CardText, Button } from "reactstrap";
// import Transactions from "./Transactions";

import LocationCard from "./LocationCard.js";
import ValetApi from "./api/Api";

const LocationPage = () => {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(
    function fetchLocationAtMount() {
      async function fetchLocation() {
        try {
          const locationRes = await ValetApi.getLocationById(id);
          setLocation(locationRes.data.location[0]);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      }
      fetchLocation();
    },
    [id]
  );
  if (loading) {
    return (
      <div>
        <span>Loading Spinner</span>
      </div>
    );
  } else
    return (
      <div>
        <LocationCard location={location} />
        <p>{location ? location.sitename : ""}</p>
      </div>
    );
};

export default LocationPage;
