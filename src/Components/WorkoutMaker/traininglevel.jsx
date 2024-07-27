import React, {useState} from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

function TrainingLevel() { // This is next in development this will need the workout split list for the user
    const [fullscreen, setFullscreen] = useState(true); // this allows the modal to take a fullscreen approach
    const [showBeginner, setShowBeginner] = useState(false);
    const [showNovice, setShowNovice] = useState(false);
    const [showIntermediate, setShowIntermediate] = useState(false); // all of these are the use states for the modals when opening and closing for the different training levels
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [showExpert, setShowExpert] = useState(false);
  
    function handleShowBeginner(breakpoint) { // this will handle opening the beginner split list
      setFullscreen(breakpoint);
      setShowBeginner(true);
    }
  
    
    function handleShowNovice(breakpoint) { // this will handle opening the novice split list
      setFullscreen(breakpoint);
      setShowNovice(true);
    }

    function handleShowIntermediate(breakpoint) { // this will handle opening the intermediate split list
        setFullscreen(breakpoint);
        setShowIntermediate(true);
      }
    
      
      function handleShowAdvanced(breakpoint) { // this will handle opening the advanced split list
        setFullscreen(breakpoint);
        setShowAdvanced(true);
      }
      
      function handleShowExpert(breakpoint) { // this will handle opening the expert split list
        setFullscreen(breakpoint);
        setShowExpert(true);
      }
  return (
    <Container className="d-flex flex-column align-items-center">
      <Row>
        <Col>
          <Button className="mb-3"  onClick={() => handleShowBeginner(fullscreen)}>Beginner</Button>
          <Modal
            show={showBeginner}
            fullscreen={fullscreen}
            onHide={() => setShowBeginner(false)}
          >
            <Modal.Body>

            </Modal.Body>
          </Modal>
        </Col>
        <Col>
          <Button className="mb-3" onClick={() => handleShowNovice(fullscreen)}>Novice</Button>
          <Modal
            show={showNovice}
            fullscreen={fullscreen}
            onHide={() => setShowNovice(false)}
          >
            <Modal.Body>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="mb-3" onClick={() => handleShowIntermediate(fullscreen)}>Intermediate</Button>
          <Modal
            show={showIntermediate}
            fullscreen={fullscreen}
            onHide={() => setShowIntermediate(false)}
          >
            <Modal.Body>
            </Modal.Body>
          </Modal>
        </Col>
        <Col>
          <Button className="mb-3" onClick={() => handleShowAdvanced(fullscreen)}>Advanced</Button>
          <Modal
            show={showAdvanced}
            fullscreen={fullscreen}
            onHide={() => setShowAdvanced(false)}
          >
            <Modal.Body>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="mb-3" onClick={() => handleShowExpert(fullscreen)}>Expert</Button>
          <Modal
            show={showExpert}
            fullscreen={fullscreen}
            onHide={() => setShowExpert(false)}
          >
            <Modal.Body>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}

export default TrainingLevel;
