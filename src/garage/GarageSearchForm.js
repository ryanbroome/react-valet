import React, { useState } from "react";

//// import "./GarageSearchForm.css";
import { FormGroup, Form, Col, Input, Button } from "reactstrap";

const GarageSearchForm = ({ search, resetList }) => {
  const INITIAL_STATE = {
    mobile: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    search(formData.mobile);
    setFormData({ mobile: "" });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {Object.keys(INITIAL_STATE).map((val, idx) => (
        <Col
          md={10}
          key={`Col-${idx}`}>
          <FormGroup key={`FormGroup-${val}`}>
            <Input
              id={val}
              key={`Input-${val}`}
              type="text"
              name={val}
              placeholder={val.toLowerCase()}
              value={formData[val]}
              onChange={handleChange}></Input>
          </FormGroup>
        </Col>
      ))}

      <Button color="primary">Search</Button>
      <Button
        color="danger"
        onClick={resetList}>
        Reset
      </Button>
    </Form>
  );
};

export default GarageSearchForm;
