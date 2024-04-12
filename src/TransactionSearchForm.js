import React, { useState, useContext } from "react";

import { FormGroup, Form, Col, Input, Button } from "reactstrap";
import ThemeContext from "./ThemeContext";

const TransactionSearchForm = ({ search, resetList }) => {
  const { userDetail } = useContext(ThemeContext);

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
    search(userDetail.locationId, formData.mobile);
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

export default TransactionSearchForm;
