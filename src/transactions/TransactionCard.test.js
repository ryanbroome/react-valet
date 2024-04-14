import React from "react";
import { render } from "@testing-library/react";
import TransactionCard from "./TransactionCard";
import { MemoryRouter } from "react-router";

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
      <TransactionCard transaction={transaction} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
