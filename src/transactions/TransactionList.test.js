import React from "react";
import { render } from "@testing-library/react";

import TransactionList from "./TransactionList";
import { MemoryRouter } from "react-router";
import { MockUserContext } from "../testUtils";

it("TransactionList: renders without crashing", function () {
  render(
    <MemoryRouter>
      <MockUserContext children={<TransactionList />}></MockUserContext>
    </MemoryRouter>
  );
});
