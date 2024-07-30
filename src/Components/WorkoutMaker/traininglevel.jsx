import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import { Beginner, Novice, Intermediate, Advanced, Expert } from "./TrainingLvlFunctions"; // All Training lvl files with Firestore data
import { BeginnerSplit, NoviceSplit, IntermediateSplit, AdvancedSplit, ExpertSplit } from "./workoutsplitlist";

function TrainingLevel() {
  // This file is the home file for training Lvls. This file is mainly to keep track of props easier with simplicity
  // These are extremly IMPORTANT!! These are the props that will be passing all the training level data

  return (
    <Container className="d-flex flex-column align-items-center">
      <Row>
        <Col>
         <Beginner Beginner = {<BeginnerSplit />}/>
        </Col>
        <Col>
         <Novice Novice = {<NoviceSplit />}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Intermediate Intermediate = {<IntermediateSplit />}/>
        </Col>
        <Col>
         <Advanced Advanced = {<AdvancedSplit />} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Expert Expert = {<ExpertSplit />} />
        </Col>
      </Row>
    </Container>
  );
}

export default TrainingLevel;
