import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
          console.log("LOCATIONRES FOR TESTING ", locationRes.data.location[0]);
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
