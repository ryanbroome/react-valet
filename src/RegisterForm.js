import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup, Form, Input, Label, Button } from "reactstrap";
import ThemeContext from "./ThemeContext";

const RegisterForm = () => {
  const history = useHistory();
  const { register } = useContext(ThemeContext);

  const INITIAL_STATE = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    locationId: "",
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
    // method to update parent state to trigger authentication and saving of token in context
    register(formData.username, formData.password, formData.firstName, formData.lastName, formData.email, formData.phone, formData.locationId);
    setFormData(INITIAL_STATE);
    // *
    history.push(`/`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>New User Form</h3>
      {Object.keys(INITIAL_STATE).map((val, idx) => (
        <FormGroup key={`FormGroup-${val}`}>
          <Label
            htmlFor={val}
            key={`Label-${idx}`}></Label>
          <Input
            id={val}
            key={`Input-${val}`}
            type={val !== "email" ? "text" : "email"}
            name={val}
            placeholder={val.toLowerCase()}
            value={formData[val]}
            onChange={handleChange}></Input>
        </FormGroup>
      ))}

      <Button color="primary">Register</Button>
    </Form>
  );
};

export default RegisterForm;
