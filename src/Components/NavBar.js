import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const NavBar = () => {
  const { user, handleSignOUt } = UseAuth();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            height={45}
            src="https://i.ibb.co/DQdxNHq/large-2-removebg-preview.png"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/department">
              Departments
            </Nav.Link>
            <Nav.Link as={Link} to="/doctors">
              Doctors
            </Nav.Link>

            {user?.email ? (
              <>
                <Nav.Link as={Link} to="/dashboard">
                  DashBoard
                </Nav.Link>
                <Nav.Link>
                  <span>{user?.displayName}</span>
                  <button
                    onClick={handleSignOUt}
                    className="btn bg-red rounded-pill"
                  >
                    Logout
                  </button>
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                Log in
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
