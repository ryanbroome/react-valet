import React, { useState, useContext } from "react";

import { Form, Col, Input, Button, Row, Label, InputGroup } from "reactstrap";
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
    <Form
      onSubmit={handleSubmit}
      className="fixed-bottom bg-dark"
      zindex="-1">
      <Row className="row-cols-lg-auto g-3 align-items-end">
        <Col>
          <Label
            className="visually-hidden"
            htmlFor="mobile"></Label>
          <InputGroup>
            <Input
              id="mobile"
              type="text"
              name="mobile"
              placeholder="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
            <Button color="success">Find Mobile</Button>
          </InputGroup>
        </Col>
      </Row>
      <Row> {` =========================================================`}</Row>
      <Row>
        <Col>
          <Button
            color="success"
            onClick={() => {
              reset(userDetail.locationId, "parked");
            }}>
            Show All
          </Button>
        </Col>

        <Col>
          <Button
            color="danger"
            onClick={() => {
              lostKeys(userDetail.locationId, userDetail.id);
            }}>
            Lost Keys
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default TransactionSearchForm;
