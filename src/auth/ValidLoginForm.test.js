import React from "react";
import { render } from "@testing-library/react";
import ValidLoginForm from "./ValidLoginForm";
import { MemoryRouter } from "react-router";
import { MockUserContext } from "../testUtils";

it("ValidLoginForm: matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <MockUserContext children={<ValidLoginForm />}></MockUserContext>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
