import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";

function TrainingLevel({ Beginnner, Novice, Intermediate, Advanced, Expert }) {
  // These are extremly IMPORTANT!! These are the props that will be passing all the traing level data
  const [fullscreen, setFullscreen] = useState(true); // this allows the modal to take a fullscreen approach
  const [showBeginner, setShowBeginner] = useState(false);
  const [showNovice, setShowNovice] = useState(false);
  const [showIntermediate, setShowIntermediate] = useState(false); // all of these are the use states for the modals when opening and closing for the different training levels
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showExpert, setShowExpert] = useState(false);

  function handleShowBeginner(breakpoint) {
    // this will handle opening the beginner split list
    setFullscreen(breakpoint);
    setShowBeginner(true);
  }

  function handleShowNovice(breakpoint) {
    // this will handle opening the novice split list
    setFullscreen(breakpoint);
    setShowNovice(true);
  }

  function handleShowIntermediate(breakpoint) {
    // this will handle opening the intermediate split list
    setFullscreen(breakpoint);
    setShowIntermediate(true);
  }

  function handleShowAdvanced(breakpoint) {
    // this will handle opening the advanced split list
    setFullscreen(breakpoint);
    setShowAdvanced(true);
  }

  function handleShowExpert(breakpoint) {
    // this will handle opening the expert split list
    setFullscreen(breakpoint);
    setShowExpert(true);
  }
  return (
    <Container className="d-flex flex-column align-items-center">
      <Row>
        <Col>
          <Button
            className="mb-3"
            onClick={() => handleShowBeginner(fullscreen)}
          >
            Beginner <br />
            1-6 Months
          </Button>
          <Modal
            show={showBeginner}
            fullscreen={fullscreen}
            onHide={() => setShowBeginner(false)}
          >
            <Modal.Body>
              {Beginnner}{" "}
              {/* these are all the training level props being rendered in as a fullscreen modal to save on website speed!!*/}
            </Modal.Body>
          </Modal>
        </Col>
        <Col>
          <Button className="mb-3" onClick={() => handleShowNovice(fullscreen)}>
            Novice <br />
            6-12 Months
          </Button>
          <Modal
            show={showNovice}
            fullscreen={fullscreen}
            onHide={() => setShowNovice(false)}
          >
            <Modal.Body>{Novice}</Modal.Body>
          </Modal>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            className="mb-3"
            onClick={() => handleShowIntermediate(fullscreen)}
          >
            Intermediate <br />
            1-3 years
          </Button>
          <Modal
            show={showIntermediate}
            fullscreen={fullscreen}
            onHide={() => setShowIntermediate(false)}
          >
            <Modal.Body>{Intermediate}</Modal.Body>
          </Modal>
        </Col>
        <Col>
          <Button
            className="mb-3"
            onClick={() => handleShowAdvanced(fullscreen)}
          >
            Advanced <br />
            3-5 years
          </Button>
          <Modal
            show={showAdvanced}
            fullscreen={fullscreen}
            onHide={() => setShowAdvanced(false)}
          >
            <Modal.Body>{Advanced}</Modal.Body>
          </Modal>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="mb-3" onClick={() => handleShowExpert(fullscreen)}>
            Expert <br />
            5-10 years
          </Button>
          <Modal
            show={showExpert}
            fullscreen={fullscreen}
            onHide={() => setShowExpert(false)}
          >
            <Modal.Body>{Expert}</Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}

export default TrainingLevel;
