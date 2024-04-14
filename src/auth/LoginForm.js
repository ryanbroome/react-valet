import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup, Form, Input, Label, Button } from "reactstrap";
import UserContext from "./UserContext";

const LoginForm = () => {
  const history = useHistory();
  const { login } = useContext(UserContext);

  const INITIAL_STATE = {
    username: "",
    password: "",
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
    login(formData.username, formData.password);
    setFormData(INITIAL_STATE);
    history.push(`/`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Login</h3>
      {Object.keys(INITIAL_STATE).map((val, idx) => (
        <FormGroup key={`FormGroup-${val}`}>
          <Label
            htmlFor={val}
            key={`Label-${idx}`}></Label>
          <Input
            id={val}
            key={`Input-${val}`}
            type="text"
            name={val}
            placeholder={val.toLowerCase()}
            value={formData[val]}
            onChange={handleChange}></Input>
        </FormGroup>
      ))}

      <Button color="primary">Login</Button>
    </Form>
  );
};

export default LoginForm;
