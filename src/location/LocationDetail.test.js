import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LocationDetail from "../location/LocationDetail";
import { MemoryRouter } from "react-router";
import { MockUserContext } from "../testUtils";

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <MockUserContext children={<LocationDetail />}></MockUserContext>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("renders without crashing", function () {
  render(
    <MemoryRouter initialEntries={["/locations/id/1"]}>
      <MockUserContext children={<LocationDetail />}></MockUserContext>
    </MemoryRouter>
  );
});
