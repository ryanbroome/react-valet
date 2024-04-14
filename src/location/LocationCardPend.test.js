import React from "react";
import { render } from "@testing-library/react";
import LocationCard from "./LocationCard";
import { UserProvider } from "../testUtils";

it("matches snapshot", function () {
  let location = { title: "CEO", salary: 1000000, equity: 10 };
  const { asFragment } = render(
    <UserProvider>
      <LocationCard location={item} />
    </UserProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
