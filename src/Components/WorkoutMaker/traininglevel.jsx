import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import { Beginner, Novice, Intermediate, Advanced, Expert } from "./traininglevelfunctions"; // All Training lvl files with Firestore data
import { BeginnerSplitMale, NoviceSplitMale, IntermediateSplitMale, AdvancedSplitMale, ExpertSplitMale} from "./workoutsplitlistmale";
import { BeginnerSplitFemale, NoviceSplitFemale, IntermediateSplitFemale, AdvancedSplitFemale, ExpertSplitFemale } from "./workoutsplitlistfemale";
function TrainingLevel() {
  // This file is the home file for training Lvls. This file is mainly to keep track of props easier with simplicity
  // These are extremly IMPORTANT!! These are the props that will be passing all the training level data

  return (
    <Container className="d-flex flex-column align-items-center">
      <Row>
        <Col>
         <Beginner BeginnerMale = {<BeginnerSplitMale />} BeginnerFemale = {<BeginnerSplitFemale />}/>
        </Col>
        <Col>
         <Novice NoviceMale = {<NoviceSplitMale />} NoviceFemale = {<NoviceSplitFemale />}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Intermediate IntermediateMale = {<IntermediateSplitMale />} IntermediateFemale = {<IntermediateSplitFemale />}/>
        </Col>
        <Col>
         <Advanced AdvancedMale = {<AdvancedSplitMale />} AdvancedFemale = {<AdvancedSplitFemale />}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Expert ExpertMale = {<ExpertSplitMale />} ExpertFemale = {<ExpertSplitFemale />} />
        </Col>
      </Row>
    </Container>
  );
}

export default TrainingLevel;
