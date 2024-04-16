import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RegisterForm from "./RegisterForm";
import { MemoryRouter } from "react-router";
import { MockUserContext } from "../testUtils";

it("Register Form: matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <MockUserContext children={<RegisterForm />}></MockUserContext>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("Register Form: renders without crashing", function () {
  render(
    <MemoryRouter>
      <MockUserContext children={<RegisterForm />}></MockUserContext>
    </MemoryRouter>
  );
});
