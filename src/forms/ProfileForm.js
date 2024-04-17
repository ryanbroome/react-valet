import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../auth/UserContext";
import { FormGroup, Form, Input, Label, Button } from "reactstrap";

const ProfileForm = () => {
  const { userDetail, update } = useContext(UserContext);
  const history = useHistory();

  // ?username if updated?
  let INITIAL_STATE = {
    username: userDetail.username,
    firstName: userDetail.firstName,
    lastName: userDetail.lastName,
    email: userDetail.email,
    phone: userDetail.phone,
  };

  let formType = {
    username: "text",
    firstName: "text",
    lastName: "text",
    email: "email",
    password: "password",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update(userDetail.username, { ...formData });
    setFormData(INITIAL_STATE);
    history.push(`/`);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        {Object.keys(INITIAL_STATE).map((val, idx) => (
          <FormGroup key={`FormGroup-${val}`}>
            <Label
              htmlFor={val}
              key={`Label-${idx}`}>
              {val}
            </Label>
            <Input
              id={val}
              key={`Input-${val}`}
              type={formType[val]}
              // type={val !== "email" ? "text" : "email"}
              name={val}
              placeholder={val.toLowerCase()}
              value={formData[val]}
              onChange={handleChange}></Input>
          </FormGroup>
        ))}

        <Button color="primary">Update</Button>
      </Form>
    </div>
  );
};

export default ProfileForm;
