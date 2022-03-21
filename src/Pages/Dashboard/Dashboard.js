import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import UseGetUser from "../../Hooks/GetUser";

const Dashboard = () => {
  const { getUser } = UseGetUser();
  return (
    <section>
      <Row>
        <Col xs={12} md={3}>
          <div className="bg-dark h-100 text-light py-5">
            <ul className="list-unstyled">
              {getUser?.role === "admin" ? (
                <>
                  <li>
                    <Link
                      className="coustom-nav-link px-2 my-2"
                      to={`/dashboard/make-admin`}
                    >
                      Make Admin
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="coustom-nav-link px-2 my-2"
                      to={`/dashboard/allAppointment`}
                    >
                      All Appointment
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="coustom-nav-link px-2 my-2"
                      to={`/dashboard/addDepertment`}
                    >
                      Add Prouduct
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="coustom-nav-link px-2 my-2"
                      to={`/dashboard/manageDepartment`}
                    >
                      All Prouduct
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="coustom-nav-link px-2 my-2"
                      to={`/dashboard/manageReview`}
                    >
                      Review
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to={`/dashboard/myAppointment`}
                      className="coustom-nav-link px-2 my-2"
                    >
                      My Appointment
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="coustom-nav-link px-2 my-2"
                      to={`/dashboard/add-review`}
                    >
                      Add Review
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </Col>
        <Col xs={12} md={9} className="py-5">
          <Outlet />
        </Col>
      </Row>
    </section>
  );
};

export default Dashboard;
