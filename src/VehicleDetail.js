import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import VehicleCard from "./VehicleCard";
import ThemeContext from "./ThemeContext";
import { Card, CardBody, CardTitle, CardSubtitle, ListGroup, ListGroupItem, CardText, Button } from "reactstrap";
import ValetApi from "./api/Api";

const VehicleDetail = () => {
  const { mobile } = useParams();
  const [vehicle, setVehicle] = useState("empty");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    function fetchVehicleAtMount() {
      async function fetchVehicle() {
        try {
          const vehicleRes = await ValetApi.getVehicleByMobile(mobile);
          setVehicle(vehicleRes.data.vehicle[0]);
          setIsLoading(false);
          return vehicleRes;
        } catch (err) {
          console.log(err);
        }
      }
      fetchVehicle();
    },
    [mobile]
  );

  if (isLoading) {
    return <p>Loading Spinner</p>;
  } else {
    return (
      <div>
        <VehicleCard vehicle={vehicle} />
        <Button>
          <Link to={`/vehicles/status/parked`}>Back</Link>
        </Button>
      </div>
    );
  }
};

export default VehicleDetail;
