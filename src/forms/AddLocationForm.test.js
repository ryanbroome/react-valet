import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddLocationForm from "./AddLocationForm";
import { MemoryRouter } from "react-router";
import { MockUserContext } from "../testUtils";

it("AddLocationForm: matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <MockUserContext children={<AddLocationForm />}></MockUserContext>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("AddLocationForm: renders without crashing", function () {
  render(
    <MemoryRouter>
      <MockUserContext children={<AddLocationForm />}></MockUserContext>
    </MemoryRouter>
  );
});
