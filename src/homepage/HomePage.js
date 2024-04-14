import React, { useContext } from "react";
import UserContext from "../auth/UserContext";

import ProfileDetail from "../profile/ProfileDetail";

const HomePage = () => {
  const { token, userDetail } = useContext(UserContext);

  function loggedOut() {
    return (
      <div>
        <h1>Welcome To Park Pilot</h1>
      </div>
    );
  }

  function loggedIn() {
    return (
      <div>
        <h1>Welcome To Park Pilot</h1>

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
        </div>
      </div>
    );
  }

  return token ? loggedIn() : loggedOut();
};

export default HomePage;
