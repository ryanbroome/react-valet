import React, { useState, useContext } from "react";

import { FormGroup, Form, Col, Input, Button } from "reactstrap";
import UserContext from "../auth/UserContext";

const TransactionSearchForm = ({ search, reset, lostKeys }) => {
  const { userDetail } = useContext(UserContext);

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
    <div>
      <Form onSubmit={handleSubmit}>
        <Button color="primary">Find</Button>
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
      </Form>
      <Button
        color="warning"
        onClick={() => {
          reset(userDetail.locationId, "parked");
        }}>
        Show All
      </Button>

      <Button
        color="danger"
        onClick={() => {
          lostKeys(userDetail.locationId, userDetail.id);
        }}>
        Lost Keys
      </Button>
    </div>
  );
};

export default TransactionSearchForm;
