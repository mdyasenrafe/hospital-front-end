import React from "react";
import { Col, Row } from "react-bootstrap";
import CountUp from "react-countup";

const ClientPage = () => {
  return (
    <section className="py-5 container">
      <div className="text-center pb-5">
        <h1 className="fw-bold">
          <span>Medicare</span>
          <span className="text-red"> at A Glance</span>
        </h1>
      </div>
      <Row className="align-items-center">
        <Col>
          <div className="d-flex align-items-center">
            <img height={50} src="https://i.ibb.co/HnVjrxP/icon-2.png" alt="" />
            <h5 className="fw-bold mx-4">
              <CountUp duration={10} end={45} />
            </h5>
          </div>
          <p className="fw-bold">Award Show</p>
        </Col>
        <Col>
          <div className="d-flex align-items-center">
            <img height={50} src="https://i.ibb.co/1v1HWCP/icon-3.png" alt="" />
            <h5 className="fw-bold mx-4">
              <CountUp duration={10} end={1220} />
            </h5>
          </div>
          <p>Satisfied Patients</p>
        </Col>
        <Col>
          <div className="d-flex align-items-center">
            <img height={50} src="https://i.ibb.co/d64jpyH/icon-1.png" alt="" />

            <h5 className="fw-bold mx-4">
              <CountUp duration={10} end={654} />
            </h5>
          </div>
          <p>Hospital Rooms</p>
        </Col>
        <Col>
          <div className="d-flex align-items-center">
            <img height={50} src="https://i.ibb.co/YWTYJx7/icon-4.png" alt="" />
            <h5 className="fw-bold mx-4">
              <CountUp duration={10} end={478} />
            </h5>
          </div>
          <p>Machines</p>
        </Col>
      </Row>
    </section>
  );
};

export default ClientPage;
