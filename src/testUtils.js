import React from "react";
import UserContext from "./auth/UserContext";
import App from "../src/App";

const MockUserContext = ({ children }) => {
  const mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwibG9jYXRpb25JZCI6MSwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTcxMzA3NTM4Mn0.dXlnawfzk6wlsgpouoSp58QLvlOOSJFC03iq_FXab-I";

  const mockUserDetail = {
    userId: 1,
    vehicleId: 1,
    locationId: 1,
    transactionId: 1,
    ticketNum: "1",
    mobile: "5553334444",
    color: "red",
    make: "honda",
    username: "testuser",
  };

  const mockLocation = {
    sitename: "testSitename",
  };

  const mockVehicle = {
    ticketNum: 1,
    vehicleStatus: `parked`,
    mobile: "1113334444",
    color: "testColor",
    make: "testMake",
    damages: "testDamages",
    notes: "testNotes",
  };

  const mockTransaction = {
    userId: 1,
    vehicleId: 1,
    locationId: 1,
  };

  return <UserContext.Provider value={{ token: mockToken, userDetail: mockUserDetail, location: mockLocation, vehicle: mockVehicle, transaction: mockTransaction, update: App.update, register: App.register }}>{children}</UserContext.Provider>;
};

export { MockUserContext };
