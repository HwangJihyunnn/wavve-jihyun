import React from "react";
import { Container, Navbar, Nav, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container fluid>
          <Link to="/">
            <img width={150} src="https://www.wavve.com/img/ci-wavve.5b304973.svg" alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="nav-area">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "300px" }}
              navbarScroll
            >
              <Link to="/" className="nav-item">홈</Link>
              <Link to="/movies" className="nav-item">로그인</Link>    
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="'최신영화'검색"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">검색하기</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
