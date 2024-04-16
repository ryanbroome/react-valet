import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import About from "./About";
import { MockUserContext } from "../testUtils";

it("About: matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <MockUserContext>
        <About />
      </MockUserContext>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("About: matches snapshot when logged out", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <MockUserContext currentUser={null}>
        <About />
      </MockUserContext>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
