import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { makeAdminApi } from "../../../Api/Index";

const MakeAdmin = () => {
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

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await makeAdminApi(data);
    if (res?.error == true) {
      Toast.fire({
        icon: "error",
        title: "Something went wrong",
      });
    } else {
      Toast.fire({
        icon: "success",
        title: "added successfully",
      }).then(() => {
        reset();
      });
    }
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
