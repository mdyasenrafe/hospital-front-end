import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <section className="my-5">
      <div className="text-center pt-3">
        <h1 className="fw-bold">
          <span className="text-red">About</span>
          <span> Us</span>
        </h1>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <img
              className="w-100"
              src="https://i.ibb.co/3mXbwH1/About-us-page-pana.png"
              alt=""
            />
          </Col>
          <Col
            xs={12}
            md={6}
            className="mt-4 px-4 px-sm-4 mt-sm-4 mt-md-0 px-md-0"
          >
            <p>
              Medicare-Health-Center is part of Medicare Group, present in over
              25 cities, with 30+ hospitals, 15 clinics and 50+ diagnostic
              centers across 2 continents, in their mission to provide quality
              healthcare in emerging markets.
            </p>
            <p>
              Medicare-Health-Center is the first and only hospital to be
              accredited by the Joint Commission International (JCI) 5 times in
              a row. The JCI Gold Seal of Approval is a globally recognized and
              reflects an organization’s commitment to best practices in quality
              and patient safety. Medicare-Health-Center was first accredited by
              JCI in 2008 and till date remains the only hospital in Bangladesh
              to hold this international recognized standard. Accreditation by
              recognized international institutions such as JCI are crucial to
              drive compliance and improve quality and cost-effectiveness across
              the hospitals and has become a priority for healthcare
              organizations across the world.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
