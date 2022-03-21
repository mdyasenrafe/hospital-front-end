import React, { useEffect, useState } from "react";
import { Container, Modal, Table, Button } from "react-bootstrap";
import { Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

import { postCartApi, SingleDepartmentApi } from "../../Api/Index";
import LoadingSpiner from "../../Components/LoadingSpiner";
import UseGetUser from "../../Hooks/GetUser";

const Detail = () => {
  const { id } = useParams();
  const { getUser } = UseGetUser();
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const [productDetail, setProductDetail] = useState();
  const [ownDate, setOwnDate] = useState();
  const [time, setTime] = useState();
  const [error, setError] = useState("");

  const handleCloseModal = () => setShow(false);
  const handleShowModal = () => setShow(true);

  const handleClickModal = () => {
    console.log("object");
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    if (id) {
      let bodyData = {
        _id: id,
      };

      const res = await SingleDepartmentApi(bodyData);
      setProductDetail(res.data);
      setLoading(false);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let discountFee = 0;
    let fee = parseInt(productDetail?.fee);
    let totalAmount = parseInt(productDetail?.fee);
    if (fee >= 25000) {
      discountFee = Math.floor((fee * 20) / 100);
      totalAmount = Math.floor(fee - discountFee);
    }
    if (time && ownDate) {
      let dataBody = {
        name: getUser?.name,
        servieName: productDetail?.name,
        phoneNumber: getUser?.phoneNumber,
        email: getUser?.email,
        fee: fee,
        discountFee: discountFee,
        totalfee: totalAmount,
        date: ownDate,
        time: time,
      };
      const res = await postCartApi(dataBody);
      if (res.error === true) {
        setError("please enter your all value");
      } else {
        setError("");
        Swal.fire(" ", res.message, "success").then(() => {
          window.location.href = "/dashboard/myAppointment";
        });
      }
    } else {
      setError("enter your all value");
    }
  };
  console.log(ownDate, time);
  return (
    <section className="px-4 px-md-0">
      {loading == true ? (
        <LoadingSpiner loading={loading} height={"100vh"} />
      ) : (
        <Container>
          <div className="py-4">
            <h1 className="pb-4">
              <span>What is </span>
              <span className="text-red">{productDetail?.name}</span>
            </h1>
          </div>
          <p>{productDetail?.fullDescription}</p>
          <div>
            <h1 className="pb-3">
              What Causes{" "}
              <span className="text-red">{productDetail?.name}</span>
            </h1>
            <p>{productDetail?.causes}</p>
          </div>
          <div>
            <h1 className="py-3">
              What are <span className="text-red">{productDetail?.name}</span>{" "}
              symptoms and signs?
            </h1>
            <ul className="fs-5 pb-3">
              <li>{productDetail?.symptoms[0]}</li>
              <li>{productDetail?.symptoms[1]}</li>
              <li>{productDetail?.symptoms[2]}</li>
              <li>{productDetail?.symptoms[3]}</li>
            </ul>
          </div>
          <div>
            <h1 className="py-4">
              What is the treatment for{" "}
              <span className="text-red">{productDetail?.name}</span>?
            </h1>
            <p>{productDetail?.treatment}</p>
          </div>
          <div className="text-center my-4">
            <button onClick={handleShowModal} className="btn bg-orange">
              Book Your Appoinmenet
            </button>
          </div>
        </Container>
      )}

      <Modal
        show={show}
        onHide={handleCloseModal}
        onClose={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel
              className="mb-3"
              controlId="floatingInputGrid2"
              label="Patient Name"
            >
              <Form.Control
                defaultValue={getUser?.name}
                type="text"
                placeholder="name@example.com"
                readOnly
              />
            </FloatingLabel>
            <FloatingLabel
              className="mb-3"
              controlId="floatingInputGrid3"
              label="Patient mobile number"
            >
              <Form.Control
                type="number"
                placeholder="name@example.com"
                defaultValue={getUser?.phoneNumber}
                readOnly
              />
            </FloatingLabel>
            <FloatingLabel
              className="mb-3"
              controlId="floatingInputGrid3"
              label="Enter Your Date"
            >
              <Form.Control
                onChange={(e) => setOwnDate(e.target.value)}
                type="date"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingSelectGrid1"
              label="Please Select Time"
              className="mb-3"
            >
              <Form.Select
                onChange={(e) => setTime(e.target.value)}
                className="mb-3"
                aria-label="Floating label select example"
              >
                <option value={"7.00 am - 8.00 am"}>Time</option>
                <option value={"7.00 am - 8.00 am"}>7.00 am - 8.00 am</option>
                <option value={"8.00 am - 9.00 am"}>8.00 am - 9.00 am</option>
                <option value={"9.00 am - 10.00 am"}>9.00 am - 10.00 am</option>
                <option value={"10.00 am - 11.00 am"}>
                  10.00 am - 11.00 am
                </option>
              </Form.Select>

              <FloatingLabel
                className="mb-3"
                controlId="floatingInputGrid3"
                label="Fee"
              >
                <Form.Control
                  defaultValue={productDetail?.fee}
                  type="text"
                  placeholder="name@example.com"
                  readOnly
                />
              </FloatingLabel>
            </FloatingLabel>
            {error && <p className="text-danger">{error}</p>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg-black btn" onClick={handleCloseModal}>
            Close
          </Button>
          <button type="submit" className="bg-red btn" onClick={handleSubmit}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Detail;
