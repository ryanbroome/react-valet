import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FormGroup, Form, Input, Label, Button } from "reactstrap";
import UserContext from "./UserContext";

const ValidLoginForm = () => {
  const { login, error, setError } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().max(25, "Must be 25 characters or less").required("username required"),
      password: Yup.string().required("password required"),
    }),
    onSubmit: async (values) => {
      login(values.username, values.password);
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
          autoComplete="current-password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}></Input>
        {formik.touched.password && formik.errors.password ? <div style={{ color: "red" }}>{formik.errors.password}</div> : null}
      </FormGroup>
      <Button
        type="submit"
        color="success">
        Login
      </Button>
    </Form>
  );
};

export default ValidLoginForm;
