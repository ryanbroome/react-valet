import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup, Form, Input, Label, Button } from "reactstrap";
import UserContext from "./UserContext";

const RegisterForm = () => {
  const history = useHistory();
  const { register } = useContext(UserContext);
  //todo add a type="select" Input on form with each <option> being the different locations available to choose from</option>
  //todo update if formType object needed or write out each input if needed
  const INITIAL_STATE = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    locationId: "",
  };

  let formType = {
    username: "text",
    password: "password",
    firstName: "text",
    lastName: "text",
    email: "email",
    phone: "phone",
    locationId: "text",
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
    register(formData.username, formData.password, formData.firstName, formData.lastName, formData.email, formData.phone, Number(formData.locationId));
    setFormData(INITIAL_STATE);
    history.push(`/transactions/active`);
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
            type={formType[val] ? formType[val] : "text"}
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
