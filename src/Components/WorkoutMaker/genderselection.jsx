import React from "react";
import TrainingLevel from "./traininglevel";
import {
  BeginnerSplit,
  NoviceSplit,
  IntermediateSplit,
  AdvancedSplit,
  ExpertSplit,
} from "./workoutsplitlist"; // these are IMPORTANT they are the imports that connect to the props that pass all the users training level data in the workoutmaker!
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

function GenderSelection() {
  const [fullscreen, setFullscreen] = useState(true); // this allows the modal to take a fullscreen approach
  const [showMale, setShowMale] = useState(false); // these 2 will handle the changing of states when the modals open and close
  const [showFemale, setShowFemale] = useState(false);

  function handleShowMale(breakpoint) {
    // this will handle opening the modal for male users
    setFullscreen(breakpoint);
    setShowMale(true);
  }

  function handleShowFemale(breakpoint) {
    // this will handle opening the modal for female users
    setFullscreen(breakpoint);
    setShowFemale(true);
  }
  return (
    <Container
      style={{ marginTop: "50px" }}
      className="d-flex flex-column align-items-center"
    >
      <Row>
        <Col>
          <Button
            className="me-2 mb-2"
            onClick={() => handleShowMale(fullscreen)}
          >
            Male
          </Button>
          <Modal
            show={showMale}
            fullscreen={fullscreen}
            onHide={() => setShowMale(false)}
          >
            <Modal.Body>
              <TrainingLevel
                Beginnner={<BeginnerSplit />}
                Novice={<NoviceSplit />}
                Intermediate={<IntermediateSplit />} // all of the props for the male gender choice!
                Advanced={<AdvancedSplit />}
                Expert={<ExpertSplit />}
              />
            </Modal.Body>
            {/* this is where i've made the props of all training levels 
            as well as given them their specific data needed for the user on selection*/}
          </Modal>
        </Col>
        <Col>
          <Button
            className="me-2 mb-2"
            onClick={() => handleShowFemale(fullscreen)}
          >
            Female
          </Button>
          <Modal
            show={showFemale}
            fullscreen={fullscreen}
            onHide={() => setShowFemale(false)}
          >
            <Modal.Body>
              <TrainingLevel
                Beginnner={<BeginnerSplit />}
                Novice={<NoviceSplit />}
                Intermediate={<IntermediateSplit />} // all the props for the female gender choice
                Advanced={<AdvancedSplit />}
                Expert={<ExpertSplit />}
              />
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}

export default GenderSelection;
