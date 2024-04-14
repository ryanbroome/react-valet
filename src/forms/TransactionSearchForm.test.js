import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TransactionSearchForm from "./TransactionSearchForm";
import { MemoryRouter } from "react-router";
import { MockUserContext } from "../testUtils";

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <MockUserContext children={<TransactionSearchForm />}></MockUserContext>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <MockUserContext children={<TransactionSearchForm />}></MockUserContext>
    </MemoryRouter>
  );
});
