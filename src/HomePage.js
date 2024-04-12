import React, { useContext } from "react";

// import Profile from "./Profile";
// import VehicleList from "./VehicleList";
// import LoginForm from "./LoginForm";

import ThemeContext from "./ThemeContext";

const HomePage = () => {
  // consume token from context, will be there if login, register or patch user
  const { token, userDetail } = useContext(ThemeContext);

  function loggedOut() {
    return (
      <div>
        <h1>Welcome To Park Pilot</h1>
      </div>
    );
  }
  //!  wrote this to try and get line 28 to work, for some reason right after login it can't read username or it's like userDetail.username doesn't work

  function loggedIn() {
    return (
      <div>
        <h1>Welcome To Park Pilot</h1>
        <p>Welcome new user: {userDetail ? userDetail.username : "Loading Spinner"}</p>
        <ul>
          TODO:
          <li>cleanup unused code and comments</li>
          <li>Update the size and shape of the elements to get them in position for a phone</li>
          <li>adjust layout to minimize buttons HOMEscreen, NAVBAR LOGIN REGISTER THEN NAVBAR BECOMES DROP DOWN HOMESCREEN ONLY BUTTONS NEEDED ADD VEHICLE / ACTIVE GARAGE</li>
          <li>update the background and colors</li>
          <li>write tests for all components and all functions</li>
        </ul>
      </div>
    );
  }

  return token ? loggedIn() : loggedOut();
};

export default HomePage;
