import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import HomePage from "./HomePage";
import { MockUserContext } from "../testUtils";

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <MockUserContext>
        <HomePage />
      </MockUserContext>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <MockUserContext currentUser={null}>
        <HomePage />
      </MockUserContext>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
