import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getDepartmentsApi } from "../../Api/Index";
import LoadingSpiner from "../../Components/LoadingSpiner";

const Services = () => {
  const [departments, setDepartments] = useState([]);
  const [count, setCount] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await getDepartmentsApi();
    if (response.error === true) {
      // Swal.fire(" ", res.message, "error");
      setLoading(false);
    } else {
      setDepartments(response.data);
      setCount(response?.count);
      setLoading(false);
    }
  };

  return (
    <section className="my-5 container">
      <div className="text-center pb-4">
        <h1 className="fw-bold">
          <span>Our</span>
          <span className="text-red"> Departments</span>
        </h1>
      </div>
      <div className="department_area mb-5">
        <h1 className="department_area_text">
          We provide exclusive services for your Health
        </h1>
      </div>
      {loading == true && <LoadingSpiner loading={loading} />}
      <Row xs={1} md={2} lg={3} className="g-4 p-4 p-md-0">
        {departments?.map((data) => (
          <Col>
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
                <Link to={`/department/${data?._id}`}>
                  <button className="btn bg-red">See More</button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Services;
