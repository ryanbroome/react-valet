import React, { useContext } from "react";

import UserContext from "./UserContext";

const Updates = () => {
  const { token, userDetail } = useContext(UserContext);

  function loggedOut() {
    return (
      <div>
        <p>Updates to come</p>
      </div>
    );
  }

  function loggedIn() {
    return (
      <div>
        <h1>Checkout these updates I'm looking to complete to improve the next version</h1>
        <h3>Welcome user: {userDetail ? userDetail.username : "Loading Spinner"}</h3>
        <ul>
          <li>add profile info for profile page, location ID / location sitename</li>
          <li>cleanup unused code and comments</li>
          <li>format date better? </li>
          <li>make call for weather conditions? </li>
          <li>order the active transactions by ticket number or phone number or maybe add a filter function</li>
          <li>Update the size and shape of the elements to get them in position for a phone</li>
          <li>adjust layout to minimize buttons HOMEscreen, NAVBAR LOGIN REGISTER THEN NAVBAR BECOMES DROP DOWN HOMESCREEN ONLY BUTTONS NEEDED ADD VEHICLE / ACTIVE GARAGE</li>
          <li>update the background and colors and styling</li>
          <li>write tests for all components and all functions</li>
        </ul>
      </div>
    );
  }

  return token ? loggedIn() : loggedOut();
};

export default Updates;
