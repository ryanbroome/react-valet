import React, { useHistory } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router";
import { MockUserContext } from "../src/testUtils";

import App from "./App";

it("App: renders without crashing", function () {
  render(
    <MemoryRouter>
      <MockUserContext children={<App />}></MockUserContext>
    </MemoryRouter>
  );
});

test("App: renders Home link", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const homeLinkElement = screen.getByText("Home");
  expect(homeLinkElement).toBeInTheDocument();
});
