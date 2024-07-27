import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Ez from "../Img/Ez.mp4";
import { useNavigate } from "react-router-dom";




function Signup() {

    const navigate = useNavigate(); // this function allows the user to navigate to the workoutmaker function of the application

    const handleSignUp = () => { // This will send the user to the route /creator entering the workoutmaker function
      navigate('/Creator');
    };

  return (
    <Container fluid className="d-flex flex-column align-items-center">
      <Row className="mt-3">
        <Col>
        <FloatingLabel
          controlId="floatingInput"
          label="First Name"
          className="mb-3"
        >
          <Form.Control type="name" placeholder="Danny" />
        </FloatingLabel>
        </Col>
        <Col>
        <FloatingLabel
          controlId="floatingInput"
          label="Last Name"
          className="mb-3"
        >
          <Form.Control type="name" placeholder="Buckets" />
        </FloatingLabel>
        </Col>
      </Row>

      <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3"
      >
        <Form.Control type="username" placeholder="Danny36" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <Button onClick={handleSignUp} className="mt-3">Sign Up</Button>
    </Container>
  );
}

export default Signup;
