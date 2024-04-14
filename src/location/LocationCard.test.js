import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LocationCard from "./LocationCard";
import { MemoryRouter } from "react-router";
import { MockUserContext } from "../testUtils";

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <MockUserContext children={<LocationCard />}></MockUserContext>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("renders without crashing", function () {
  const location = { location: { sitename: "testSitename" } };
  render(
    <MemoryRouter>
      <MockUserContext children={<LocationCard location={{ location }} />}></MockUserContext>
    </MemoryRouter>
  );
});
