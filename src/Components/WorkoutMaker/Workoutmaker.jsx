import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import GenderSelection from "./genderselection";
function WorkoutMaker() {
  // this is the home function of the entire process of the workout maker

  return (
    <Container
      style={{ marginTop: "50px" }}
      className="d-flex flex-column align-items-center"
    >
      <Row>
        <Col>
          <GenderSelection />
        </Col>
      </Row>
    </Container>
  );
}

export default WorkoutMaker;
