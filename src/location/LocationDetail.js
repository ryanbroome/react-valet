import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

// import { Card, CardBody, CardTitle, CardSubtitle, ListGroup, ListGroupItem, CardText, Button } from "reactstrap";

import LocationCard from "./LocationCard.js";
import ValetApi from "../api/Api.js";

const LocationDetail = () => {
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
      <div
        className="spinner-border text-primary"
        role="status">
        <span className="visually-hidden"></span>
      </div>
    );
  } else
    return (
      <div>
        <LocationCard location={location} />
      </div>
    );
};

export default LocationDetail;
