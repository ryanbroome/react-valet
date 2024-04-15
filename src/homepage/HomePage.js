import React, { useContext } from "react";
import UserContext from "../auth/UserContext";
import { Button } from "reactstrap";
import ProfileDetail from "../profile/ProfileDetail";

import logo from "../images/parkPilot.jpg";

const HomePage = () => {
  const { token, userDetail, logout } = useContext(UserContext);

  function loggedOut() {
    return (
      <div>
        <h1>Welcome To Park Pilot</h1>
        <img
          src={logo}
          alt="logo"
          height="300px"></img>
      </div>
    );
  }

  function loggedIn() {
    return (
      <div>
        <img
          src={logo}
          alt="logo"
          height="300px"></img>
        <div>
          {userDetail ? (
            <ProfileDetail userDetail={userDetail} />
          ) : (
            <div
              className="spinner-border text-primary"
              role="status">
              <span className="visually-hidden"></span>
            </div>
          )}
          <Button
            color="danger"
            onClick={logout}
            size="sm">
            Logout
          </Button>
        </div>
      </div>
    );
  }

  return token ? loggedIn() : loggedOut();
};

export default HomePage;
