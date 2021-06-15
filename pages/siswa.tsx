/* tslint:disable: no-shadowed-variable */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Decorator, Mutator } from 'final-form';
import * as React from 'react';
import { Field, Form } from 'react-final-form';


const onSubmit = async (values: any) => {
  // tslint:disable-next-line no-console
  console.log(values);
};

const Create: React.FC =()=> {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
          <Field
            name="secondName"
            component="input"
            type="text"
            placeholder="First Name"
          />
          <Field
            name="treeName"
            component="input"
            type="text"
            placeholder="First Name"
          />
          <Field
            name="fourName"
            component="input"
            type="text"
            placeholder="First Name"
          />
          <button
            type="button"
            onClick={form.reset}
            disabled={submitting || pristine}
          >
            Reset
          </button>
          <button type="submit" disabled={submitting || pristine}>
            Submit
          </button>
          <pre>{JSON.stringify(values)}</pre>
        </form>
      )}
    </Form>
  );
}
export default Create;