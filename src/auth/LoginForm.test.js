import React from "react";
import { render } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { MemoryRouter } from "react-router";
import { MockUserContext } from "../testUtils";

it("LoginForm: matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <MockUserContext children={<LoginForm />}></MockUserContext>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
