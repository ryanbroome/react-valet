import React from "react";
import { render } from "@testing-library/react";
import ProfileForm from "./ProfileForm";
import { MemoryRouter } from "react-router";
import { MockUserContext } from "../testUtils";

it("ProfileForm: renders without crashing", function () {
  render(
    <MemoryRouter>
      <MockUserContext children={<ProfileForm />}></MockUserContext>
    </MemoryRouter>
  );
});
