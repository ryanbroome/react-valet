import React, { useContext } from "react";

import { NavLink } from "react-router-dom";

import { Nav, NavItem, Navbar } from "reactstrap";
import UserContext from "../auth/UserContext";

/**NavHead Component to render a Navbar, different Items rendered based on if logged in user present
 *
 * **/

const NavHead = () => {
  const { token, userDetail } = useContext(UserContext);

  function isLoggedIn() {
    return (
      <Navbar>
        <Nav
          justified
          pills
          expand="lg"
          className="fixed-top bg-light">
          <NavItem>
            <NavLink
              exact
              to="/"
              className="nav-link"
              activeClassName="active">
              Home Page
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              exact
              to="/updateProfile"
              className="nav-link"
              activeClassName="active">
              Update Profile
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              exact
              to={`/locations/id/${userDetail ? userDetail.locationId : ""}`}
              className="nav-link"
              activeClassName="active">
              Location
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              exact
              to={`/transactions/active`}
              className="nav-link"
              activeClassName="active">
              Active Garage
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              exact
              to="/addLocation"
              className="nav-link"
              activeClassName="active">
              Add Location
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              exact
              to="/addVehicle"
              className="nav-link"
              activeClassName="active">
              Add Vehicle
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }

  function isLoggedOut() {
    return (
      <Navbar>
        <Nav
          justified
          pills>
          <NavItem>
            <NavLink
              exact
              to="/"
              className="nav-link"
              activeClassName="active">
              Home
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              exact
              to="/about"
              className="nav-link"
              activeClassName="active">
              About
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              exact
              to="/login"
              className="nav-link"
              activeClassName="active">
              Login
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              exact
              to="/register"
              className="nav-link"
              activeClassName="active">
              New User
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }

  return token ? isLoggedIn() : isLoggedOut();
};

export default NavHead;
