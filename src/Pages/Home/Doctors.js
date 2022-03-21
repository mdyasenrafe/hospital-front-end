import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { getDoctorApi } from "../../Api/Index";
import LoadingSpiner from "../../Components/LoadingSpiner";

const Doctors = () => {
  const [teams, setTeams] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getDoctorApi();
    if (res.error === true) {
      setLoading(true);
    } else {
      setLoading(false);
      setTeams(res.data);
    }
  };

  return (
    <section className="container py-5">
      <div className="text-center pb-4">
        <h1 className="fw-bold">
          <span>Our</span>
          <span className="text-red"> Doctors</span>
        </h1>
      </div>
      {loading === true ? (
        <LoadingSpiner loading={loading} height={"0"} />
      ) : (
        <>
          <Row xs={1} md={3} className="px-3 px-sm-3 px-md-0 g-4">
            {teams?.map((data) => (
              <Col>
                <Card className="h-100 border-0  shadow-lg p-0">
                  <Card.Img
                    // height={"350px"}
                    width={"200"}
                    variant="top"
                    src={data?.photo}
                  />
                  <Card.Body className="text-justify">
                    <Card.Title>{data?.name}</Card.Title>
                    <Card.Text>
                      <span className="text-black">Designation</span> :{" "}
                      <span className="fw-bolder">{data?.designation}</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="text-black">Email</span> :{" "}
                      <span className="fw-bolder">{data?.email}</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="text-black">Phone</span> :{" "}
                      <span className="fw-bolder">{data?.phoneNumber}</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </section>
  );
};

export default Doctors;
