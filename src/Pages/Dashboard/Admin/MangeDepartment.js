import React, { useEffect, useState } from "react";
import { Col, Table, Card, Row } from "react-bootstrap";
import { deleteDepartmentApi, getDepartmentsApi } from "../../../Api/Index";
import { Link } from "react-router-dom";
import LoadingSpiner from "../../../Components/LoadingSpiner";
import Swal from "sweetalert2";

const MangeDepartment = () => {
  const [departments, setDepartments] = useState([]);
  const [pageCount, setPageCount] = useState();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    setLoading(true);
  }, [page]);

  const size = 5;
  const fetchData = async () => {
    const response = await getDepartmentsApi(page, size);
    if (response.error === true) {
      // Swal.fire(" ", res.message, "error");
      setLoading(false);
    } else {
      setDepartments(response.data);
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

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Do you want Delete this Appointment",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteDepartmentApi({ _id: id });
        if (res.error == true) {
          Toast.fire({
            icon: "error",
            title: "something went wrong",
          });
        } else {
          const filterItem = departments.filter((item) => item._id !== id);
          setDepartments(filterItem);
          Toast.fire({
            icon: "success",
            title: "Deleted successfully",
          });
        }
      }
    });
  };
  return (
    <div>
      <div className="text-center pb-4">
        <h1 className="fw-bold">
          <span>Manage</span>
          <span className="text-red"> Department</span>
        </h1>
      </div>

      {loading == true ? (
        <LoadingSpiner loading={loading} height={"50vh"} />
      ) : (
        <>
          <Row xs={1} md={2} lg={3} className="g-4 p-4 p-md-0">
            {departments?.map((data, index) => (
              <Col key={index}>
                <Card className="h-100 border-0 text-center shadow-lg p-3">
                  <Card.Img height="350" variant="top" src={data?.photo} />
                  <Card.Body>
                    <Card.Title className="cursor-pointor text-primary">
                      {data?.name}
                    </Card.Title>
                    <Card.Text>{data?.shortDescription}</Card.Text>
                    <Card.Text className="fw-bold">
                      Fee : <span className="text-orange">${data?.fee}</span>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="border-0 bg-light">
                    <button
                      onClick={() => handleDelete(data?._id)}
                      className="btn bg-red"
                    >
                      Delete
                    </button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
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
        </>
      )}
    </div>
  );
};

export default MangeDepartment;
