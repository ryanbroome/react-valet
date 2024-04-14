import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TransactionDetail from "../transactions/TransactionDetail";
import { MemoryRouter } from "react-router";
import { MockUserContext } from "../testUtils";

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <MockUserContext children={<TransactionDetail />}></MockUserContext>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("renders without crashing", function () {
  render(
    <MemoryRouter initialEntries={["/transactions/id/1"]}>
      <MockUserContext children={<TransactionDetail />}></MockUserContext>
    </MemoryRouter>
  );
});
