import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>Make Admin</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className="mx-3">
        <FloatingLabel
          controlId="floatingInput"
          label="Enter Your email"
          className="my-3"
        >
          <Form.Control
            {...register("email", { required: true })}
            type="email"
            placeholder="email"
            className="mb-3"
          />
        </FloatingLabel>
        {errors.email && (
          <span className="text-danger my-3">This field is required</span>
        )}
        <input
          type="submit"
          className="btn btn-outline-danger my-4 w-100 d-block"
        />
      </Form>
    </div>
  );
};

export default MakeAdmin;
