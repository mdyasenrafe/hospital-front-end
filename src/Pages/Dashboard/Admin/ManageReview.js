import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Swal from "sweetalert2";
import {
  deleteReviewApi,
  getReviewApi,
  updateReviewApi,
} from "../../../Api/Index";

const ManageReview = () => {
  const [loading, setLoading] = useState(true);
  const [review, setReview] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await getReviewApi();
    if (response.error === true) {
      //   Swal.fire(" ", res.message, "error");
      setLoading(false);
    } else {
      setReview(response.data);
    }
  };

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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want Delete this Appointment",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteReviewApi({ _id: id });
        if (res.error == true) {
          Toast.fire({
            icon: "error",
            title: "something went wrong",
          });
        } else {
          const filterItem = review.filter((item) => item._id !== id);
          setReview(filterItem);
          Toast.fire({
            icon: "success",
            title: "Deleted successfully",
          });
        }
      }
    });
  };

  const updateReview = async (id) => {
    const res = await updateReviewApi({ _id: id });
    if (res.error == true) {
      Toast.fire({
        icon: "error",
        title: "something went wrong",
      });
    } else {
      Toast.fire({
        icon: "success",
        title: "Apporved successfully",
      });
    }
  };

  return (
    <section className="container">
      <div className="text-center pb-4">
        <h1 className="fw-bold">
          <span>Manage</span>
          <span className="text-red"> Review</span>
        </h1>
      </div>

      {review?.length === 0 ? (
        <div className="text-center my-5">
          <h1>No records found.</h1>
        </div>
      ) : (
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>description</th>
              <th>Photo </th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {review?.map((data, index) => (
              <tr key={index}>
                <td>{data?.name}</td>
                <td>{data?.description}</td>
                <td>
                  <img className="box-photo" src={data?.photo} alt="" />
                </td>
                <td>
                  {data?.status === "appoved" ? (
                    <span className="text-success">{data?.status}</span>
                  ) : (
                    data?.status
                  )}
                </td>
                <td>
                  {data?.status == "appoved" ? (
                    <></>
                  ) : (
                    <button
                      onClick={() => updateReview(data?._id)}
                      className="btn bg-black mb-2"
                    >
                      Apporve
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(data?._id)}
                    className="btn bg-red"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </section>
  );
};

export default ManageReview;
