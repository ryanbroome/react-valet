// TODO IN PROGRESS, implement data input validation on all appliaction forms
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormikForm = () => {
  return (
    <div>
      <h1>Formik Test App for validation of input data</h1>
      <Formik
        initialValues={{
          ticketNum: "",
          mobile: "",
          color: "",
          make: "",
          damages: "",
          notes: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.ticketNum) {
            errors.ticketNum = "Required";
          } else if (!/^[0-9]{1,6}$/i.test(values.ticketNum)) {
            errors.ticketNum = "must be between 1-6 numbers";
          }
          if (!values.mobile) {
            errors.mobile = "Required";
          } else if (!/^[0-9]{4,10}$/i.test(values.mobile)) {
            errors.mobile = "must 4-10 char long and must be numbers";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 6));
            setSubmitting(false);
          }, 400);
        }}>
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="text"
              name="ticketNum"
            />
            <ErrorMessage
              name="ticketNum"
              component="div"
            />
            <Field
              type="text"
              name="mobile"
            />
            <ErrorMessage
              name="mobile"
              component="div"
            />
            <Field
              type="text"
              name="color"
            />
            <ErrorMessage
              name="color"
              component="div"
            />
            <Field
              type="text"
              name="make"
            />
            <ErrorMessage
              name="make"
              component="div"
            />
            <Field
              type="text"
              name="damages"
            />
            <ErrorMessage
              name="damages"
              component="div"
            />
            <Field
              type="text"
              name="notes"
            />
            <ErrorMessage
              name="notes"
              component="div"
            />
            <button
              type="submit"
              disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
