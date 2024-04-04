import React, { useContext, useEffect, useState } from "react";

import ValetApi from "./api/Api";

import UserPage from "./UserPage";
import VehicleList from "./VehicleList";

const HomePage = () => {
  // TODO REMEMBER YOU CAN HAVE MULTIPLE RETURN WITH logic for which to return to avoid having something render when state is still empty

  return (
    <div>
      <UserPage />
      <VehicleList />
    </div>
  );
};

export default HomePage;
