import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TransactionSearchForm from "./TransactionSearchForm";
import { MemoryRouter } from "react-router";
import { MockUserContext } from "../testUtils";

it("TransactionSearchForm: matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <MockUserContext children={<TransactionSearchForm />}></MockUserContext>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("TransactionSearchForm: renders without crashing", function () {
  render(
    <MemoryRouter>
      <MockUserContext children={<TransactionSearchForm />}></MockUserContext>
    </MemoryRouter>
  );
});
