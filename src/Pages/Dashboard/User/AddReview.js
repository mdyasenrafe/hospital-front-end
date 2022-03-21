import React from "react";
import { useForm } from "react-hook-form";
import { Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import UseAuth from "../../../Hooks/UseAuth";
import UseGetUser from "../../../Hooks/GetUser";
import { postReviewApi } from "../../../Api/Index";
import Swal from "sweetalert2";

const AddReview = () => {
  const { user } = UseAuth();
  const { getUser } = UseGetUser();
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
    console.log(data);
    const res = await postReviewApi(data);
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
    <section>
      <div className="fw-bold text-center mb-3">
        <h1>
          Please Add An <span className="text-red">Review</span>
        </h1>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)} className="mx-3">
        <FloatingLabel
          controlId="floatingInput"
          label="Enter Your name"
          className="mb-3"
        >
          <Form.Control
            defaultValue={user?.displayName || ""}
            {...register("name", { required: true })}
            type="name"
            placeholder="name"
            className="mb-3"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Enter Your Image Link"
          className="mb-3"
        >
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
          label="Enter Your designation"
          className="mb-3"
        >
          <Form.Control
            {...register("role", { required: true })}
            type="text"
            placeholder="Designation"
            className="mb-3"
            required
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

        <FloatingLabel
          controlId="floatingInput"
          label="Enter Your Rating"
          className="mb-3"
        >
          <Form.Control
            type="number"
            {...register("rating", { required: true, min: 0, max: 5 })}
            placeholder="Enter Your Rating here"
            className="mb-3"
          />
        </FloatingLabel>
        {errors?.rating?.type === "required" && (
          <span className="text-danger my-3">This field is required</span>
        )}
        {errors?.rating?.type === "min" && (
          <span className="text-danger my-3">
            You Must be older then 0 and younger then 5 stars
          </span>
        )}
        {errors?.rating?.type === "max" && (
          <span className="text-danger my-3">
            You Rating must be older then 0 and younger then 5 stars
          </span>
        )}
        <input
          type="submit"
          className="btn btn-outline-danger my-4 w-100 d-block"
        />
      </Form>
    </section>
  );
};

export default AddReview;
