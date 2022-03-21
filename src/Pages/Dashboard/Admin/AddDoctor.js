import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <div className="text-center pb-4">
        <h1 className="fw-bold">
          <span>Add</span>
          <span className="text-red"> Doctor</span>
        </h1>
      </div>
      <FloatingLabel
        controlId="floatingInput"
        label="Your Name"
        className="my-3"
      >
        <Form.Control
          {...register("name", { required: true })}
          type="name"
          placeholder="name"
          className="mb-3"
          required
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Your email"
        className="my-3"
      >
        <Form.Control
          {...register("email", { required: true })}
          type="email"
          placeholder="email"
          className="mb-3"
          required
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="doctor designation"
        className="my-3"
      >
        <Form.Control
          {...register("designation", { required: true })}
          type="text"
          placeholder="text"
          className="mb-3"
          required
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Phone Number"
        className="my-3"
      >
        <Form.Control
          {...register("phoneNumber", { required: true })}
          type="text"
          placeholder="text"
          className="mb-3"
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="photo" className="my-3">
        <Form.Control
          {...register("photo", { required: true })}
          type="text"
          placeholder="text"
          className="mb-3"
          required
        />
      </FloatingLabel>
    </div>
  );
};

export default AddDoctor;
