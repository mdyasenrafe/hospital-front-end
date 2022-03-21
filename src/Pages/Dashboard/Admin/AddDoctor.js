import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { addDoctorApi } from "../../../Api/Index";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    watch,
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
    const res = await addDoctorApi(data);
    if (res?.error == true) {
      Toast.fire({
        icon: "error",
        title: "Something went wrong",
      });
    } else {
      Toast.fire({
        icon: "success",
        title: "Doctor Added successfully",
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
          <span className="text-red"> Doctor</span>
        </h1>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        <input type="submit" className="btn bg-red w-100" />
      </Form>
    </div>
  );
};

export default AddDoctor;
