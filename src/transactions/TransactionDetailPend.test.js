import React from "react";
import { render } from "@testing-library/react";
import TransactionDetail from "./TransactionDetail";
import { MemoryRouter, Route } from "react-router-dom";
import TransactionList from "./TransactionList";

import { MockUserContext } from "../testUtils";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <MockUserContext children={<TransactionList />}></MockUserContext>
    </MemoryRouter>
  );
});

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <UserProvider>
        <TransactionDetail />
      </UserProvider>
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter initialEntries={["/TransactionDetail/ibm"]}>
      <UserProvider>
        <Route path="/TransactionDetail/:handle">
          <TransactionDetail />
        </Route>
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot with logo", function () {
  const transaction = {
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
  const { asFragment } = render(
    <MemoryRouter>
      <TransactionDetail transaction={transaction} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
