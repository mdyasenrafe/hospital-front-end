import React from "react";
import { useForm } from "react-hook-form";
import { Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import Swal from "sweetalert2";
import { postDepartmentsApi } from "../../../Api/Index";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const onSubmit = async (data) => {
    const res = await postDepartmentsApi(data);
    if (res?.error == true) {
      Toast.fire({
        icon: "error",
        title: "Something went wrong",
      });
    } else {
      Toast.fire({
        icon: "success",
        title: "Created successfully",
      }).then(() => {
        reset();
      });
    }
  };

  return (
    <div>
      <div className="text-center pb-4">
        <h1 className="fw-bold">
          <span>Add</span>
          <span className="text-red"> Depertment</span>
        </h1>
      </div>

      <Form onSubmit={handleSubmit(onSubmit)} className="mx-3">
        <FloatingLabel
          controlId="floatingInput"
          label="Depertment name"
          className="mb-3"
        >
          <Form.Control
            {...register("name", { required: true })}
            type="name"
            placeholder="name"
            className="mb-3"
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Photo" className="mb-3">
          <Form.Control
            {...register("photo", { required: true })}
            type="text"
            placeholder="Enter Your Image"
            className="mb-3"
            required
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="short description"
          className="mb-3"
        >
          <Form.Control
            {...register("shortDescription", { required: true })}
            type="text"
            placeholder="Designation"
            className="mb-3"
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Fee" className="mb-3">
          <Form.Control
            {...register("fee", { required: true })}
            type="number"
            placeholder="Designation"
            className="mb-3"
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="another photo"
          className="mb-3"
        >
          <Form.Control
            {...register("photo1", { required: true })}
            type="text"
            placeholder="Designation"
            className="mb-3"
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="causes"
          className="mb-3"
        >
          <Form.Control
            {...register("causes", { required: true })}
            type="text"
            placeholder="Designation"
            className="mb-3"
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="treatment"
          className="mb-3"
        >
          <Form.Control
            {...register("treatment", { required: true })}
            type="text"
            placeholder="Designation"
            className="mb-3"
            required
          />
        </FloatingLabel>
        <FloatingLabel
          className="mb-3"
          controlId="floatingTextarea2"
          label="Description"
        >
          <Form.Control
            {...register("fullDescription", { required: true })}
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            className="mb-3"
          />
        </FloatingLabel>

        <FloatingLabel
          className="mb-3"
          controlId="floatingTextarea2"
          label="Enter Your Description"
        >
          <Form.Control
            {...register("description", { required: true })}
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            className="mb-3"
          />
        </FloatingLabel>

        {/* <FloatingLabel
          controlId="floatingInput"
          label="Enter Your Rating"
          className="mb-3"
        >
          <Form.Control
            type="number"
            {...register("", { required: true, min: 0, max: 5 })}
            placeholder="Enter Your Rating here"
            className="mb-3"
          />
        </FloatingLabel> */}
        <input
          type="submit"
          className="btn btn-outline-danger my-4 w-100 d-block"
        />
      </Form>
    </div>
  );
};

export default AddService;
