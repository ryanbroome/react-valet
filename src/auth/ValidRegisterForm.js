import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FormGroup, Form, Input, Label, Button } from "reactstrap";
import UserContext from "./UserContext";

const ValidRegisterForm = () => {
  const { register } = useContext(UserContext);
  // possibly update to add clearForm , or preventDefault if necessary
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      locationId: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().max(25, "Must be 25 characters or less").required("username required"),
      password: Yup.string().required("password required"),
      firstName: Yup.string().required("firstName required"),
      lastName: Yup.string().required("lastName required"),
      email: Yup.string().required("email required"),
      phone: Yup.string().required("phone required"),
      locationId: Yup.string().required("locationId is required, must be a valid location"),
    }),
    onSubmit: async (values) => {
      register(values.username, values.password, values.firstName, values.lastName, values.email, values.phone, Number(values.locationId));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormGroup>
        <Label htmlFor="username">username</Label>
        <Input
          id="username"
          placeholder="enter username here"
          name="username"
          type="text"
          autoComplete="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}></Input>
        {formik.touched.username && formik.errors.username ? <div style={{ color: "red" }}>{formik.errors.username}</div> : null}

        <Label htmlFor="password">password</Label>
        <Input
          id="password"
          placeholder="enter password here"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          autoComplete="current-password"></Input>
        {formik.touched.password && formik.errors.password ? <div style={{ color: "red" }}>{formik.errors.password}</div> : null}

        <Label htmlFor="firstName">first name</Label>
        <Input
          id="firstName"
          placeholder="enter first here"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}></Input>
        {formik.touched.firstName && formik.errors.firstName ? <div style={{ color: "red" }}>{formik.errors.firstName}</div> : null}

        <Label htmlFor="lastName">last name</Label>
        <Input
          id="lastName"
          placeholder="enter last here"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}></Input>
        {formik.touched.lastName && formik.errors.lastName ? <div style={{ color: "red" }}>{formik.errors.lastName}</div> : null}

        <Label htmlFor="email">email</Label>
        <Input
          id="email"
          placeholder="enter email here"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}></Input>
        {formik.touched.email && formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}

        <Label htmlFor="phone">phone</Label>
        <Input
          id="phone"
          placeholder="enter phone here"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}></Input>
        {formik.touched.phone && formik.errors.phone ? <div style={{ color: "red" }}>{formik.errors.phone}</div> : null}

        <Label htmlFor="locationId">location id</Label>
        <Input
          id="locationId"
          placeholder="enter locationId here"
          name="locationId"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.locationId}></Input>
        {formik.touched.locationId && formik.errors.locationId ? <div style={{ color: "red" }}>{formik.errors.locationId}</div> : null}
      </FormGroup>

      <Button
        type="submit"
        color="success">
        Register
      </Button>
    </Form>
  );
};

export default ValidRegisterForm;
