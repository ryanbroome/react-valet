import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup, Form, Input, Label, Button, FormText } from "reactstrap";
import UserContext from "../auth/UserContext";

const AddLocationForm = () => {
  const history = useHistory();
  const { addLocation } = useContext(UserContext);

  const INITIAL_STATE = {
    sitename: "",
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
    addLocation(formData.sitename);
    setFormData(INITIAL_STATE);
    history.push(`/`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>New Location Form</h3>
      <Button color="primary">Add Location</Button>
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
    </Form>
  );
};

export default AddLocationForm;
