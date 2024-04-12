import React, { useEffect, useState, useContext } from "react";
import ProfileForm from "./ProfileForm";
import ProfileDetail from "./ProfileDetail";

import ThemeContext from "./ThemeContext";

const Profile = () => {
  const { userDetail, token } = useContext(ThemeContext);

  function loggedIn(userDetail) {
    return (
      <div>
        <ProfileForm />
        <ProfileDetail userDetail={userDetail} />
      </div>
    );
  }

  function loggedOut() {
    return (
      <div>
        <p>Please Login to see your UserDetails</p>
      </div>
    );
  }

  return token ? loggedIn(userDetail) : loggedOut();
};

export default Profile;
