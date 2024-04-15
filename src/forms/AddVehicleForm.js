import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup, Form, Input, Label, Button } from "reactstrap";
import UserContext from "../auth/UserContext";

// add method either passed as props or saved in context ?
const AddVehicleForm = () => {
  const { addVehicle } = useContext(UserContext);
  const history = useHistory();

  const INITIAL_STATE = {
    ticketNum: "",
    mobile: "",
    color: "",
    make: "",
    damages: "",
    notes: "",
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
    addVehicle(formData.ticketNum, "parked", formData.mobile, formData.color, formData.make, formData.damages, formData.notes);
    setFormData(INITIAL_STATE);
    history.push(`/transactions/active`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Add Vehicle</h3>
      {Object.keys(INITIAL_STATE).map((val, idx) => (
        <FormGroup key={`FormGroup-${val}`}>
          <Input
            id={val}
            key={`Input-${val}`}
            type={val !== "email" ? "text" : "email"}
            name={val}
            placeholder={val.toLowerCase()}
            value={formData[val]}
            onChange={handleChange}
          />
          <Label
            htmlFor={val}
            key={`Label-${idx}`}></Label>
        </FormGroup>
      ))}

      <Button color="primary">Add</Button>
    </Form>
  );
};

export default AddVehicleForm;
