import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <section className="cotainer py-5">
      <div className="text-center pb-4">
        <h1 className="fw-bold">
          <span className="text-red">Contact</span>
          <span> Us</span>
        </h1>
      </div>
      <div className="department_area">
        <h1 className="department_area_text">Don't Hesitate To Contact Us</h1>
      </div>
      <Row className="align-items-center">
        <Col sm={12} md={6} className="text-center">
          <div>
            <img
              className="w-100"
              src={"https://i.ibb.co/xf4C577/Contact-us-rafiki.png"}
              alt=""
            />
          </div>
        </Col>
        <Col sm={12} md={6}>
          <Form className="mt-5">
            <FloatingLabel
              controlId="floatingInput"
              label="Enter Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Enter Your subject"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Enter Your Message"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <input
              className="btn btn-danger d-block w-100 mt-5"
              type="submit"
            />
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default Contact;
