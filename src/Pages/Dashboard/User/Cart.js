import { async } from "@firebase/util";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AllCartApi, deleteCartApi, getCartApi } from "../../../Api/Index";
import LoadingSpiner from "../../../Components/LoadingSpiner";
import UseAuth from "../../../Hooks/UseAuth";

const Cart = () => {
  const { user } = UseAuth();

  const [carts, setCarts] = useState();
  const [pageCount, setPageCount] = useState();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const pn = location.pathname;

  useEffect(() => {
    if (user?.email) {
      fetchData();
      setLoading(true);
    }
  }, [page, user]);

  const size = 5;
  const fetchData = async () => {
    let bodyData = {
      email: user?.email,
    };
    let response;
    if (pn === "/dashboard/myAppointment") {
      response = await getCartApi(bodyData, page, size);
    } else if (pn === "/dashboard/allAppointment") {
      response = await AllCartApi(page, size);
    }
    if (response.error === true) {
      // Swal.fire(" ", res.message, "error");
      setLoading(false);
    } else {
      setCarts(response.data);
      setLoading(false);
      const count = response?.count;
      const pageNumber = Math.ceil(count / size);
      setPageCount(pageNumber);
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
        const res = await deleteCartApi({ _id: id });
        if (res.error == true) {
          Toast.fire({
            icon: "error",
            title: "Deleted successfully",
          });
        } else {
          const filterItem = carts.filter((item) => item._id !== id);
          setCarts(filterItem);
          Toast.fire({
            icon: "success",
            title: "Deleted successfully",
          });
        }
      }
    });
  };

  return loading == true ? (
    <LoadingSpiner loading={loading} height={"50vh"} />
  ) : (
    <div>
      <div className="text-center pb-4">
        <h1 className="fw-bold">
          <span>{pn === "/dashboard/allAppointment" ? " " : "Your"}</span>
          <span className="text-red"> appointments</span>
        </h1>
      </div>
      {carts?.length === 0 ? (
        <div className="text-center my-5">
          <h1>No records found.</h1>
        </div>
      ) : (
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Service Name</th>
              <th>Date and Time</th>
              <th>Fee</th>
              <th>Discount Fee</th>
              <th>Total Fee</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {carts?.map((data, index) => (
              <tr key={index}>
                <td>{data?.name}</td>
                <td>{data?.email}</td>
                <td>{data?.servieName}</td>
                <td>
                  {data?.date} <br /> {data.time}
                </td>
                <td>{data?.fee}</td>
                <td>{data?.discountFee}</td>
                <td>{data?.totalfee}</td>
                <td>
                  <button
                    onClick={() => handleDelete(data?._id)}
                    className="text-red cursor-pointor btn bg-red"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <div className="m-5 text-center">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            className={
              number === page
                ? "selected py-2 px-4 bg-red btn "
                : "btn border-1"
            }
            key={number}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cart;
