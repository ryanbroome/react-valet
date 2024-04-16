import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LocationCard from "./LocationCard";
import { MemoryRouter } from "react-router";

it("LocationCard: matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <LocationCard />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("LocationCard: renders without crashing", function () {
  const location = { sitename: "testSitename" };
  render(
    <MemoryRouter>
      <LocationCard location={location} />
    </MemoryRouter>
  );
});
