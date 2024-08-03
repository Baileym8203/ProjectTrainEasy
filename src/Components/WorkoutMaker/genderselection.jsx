import React, {useEffect, useState} from "react";
import TrainingLevel from "./traininglevel";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebase-config";
import { GetUserDataGender, SaveUserDataGender } from "../Firebase/FirebaseUtills";
import { Timestamp } from "firebase/firestore";

function GenderSelection() {
  const [fullscreen, setFullscreen] = useState(true); // this allows the modal to take a fullscreen approach
  const [showMale, setShowMale] = useState(false); // these 2 will handle the changing of states when the modals open and close
  const [showFemale, setShowFemale] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // all of the functions nessesary to change the user choice data and just fetching it for now to see the results
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is authenticated:", user.uid);
        setUserId(user.uid);

        GetUserDataGender(user.uid)
          .then((data) => {
            console.log("Fetched user data:", data);
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      } else {
        console.log("No user is authenticated");
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

 
  const HandleSaveClickMale = async () => { // this will change the data when the choice "male" is chosen and update the data in firebase
    if (userId) {
      const dataMale = {
        gender: "male",
        updatedAt: Timestamp.now(),
      };

  await SaveUserDataGender(userId, dataMale);
  const updatedData = await GetUserDataGender(userId);
  console.log("Updated user data:", updatedData);
} else {
  console.log("User is not authenticated.");
}
};

      const HandleSaveClickFemale = async () => {  // this will change the data when the choice "female" is chosen and update the data in firebase
        if (userId) {
          const dataFemale = {
            gender: "female",
            updatedAt: Timestamp.now(),
          };

      await SaveUserDataGender(userId,dataFemale);
      const updatedData = await GetUserDataGender(userId);
      console.log("Updated user data:", updatedData);
    } else {
      console.log("User is not authenticated.");
    }
  };


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
            onClick={() => {handleShowMale(fullscreen); HandleSaveClickMale();}}
          >
            Male
          </Button>
          <Modal
            show={showMale}
            fullscreen={fullscreen}
            onHide={() => setShowMale(false)}
          >
            <Modal.Body>
              <TrainingLevel/>
            </Modal.Body>
            {/* this is where i've made the props of all training levels 
            as well as given them their specific data needed for the user on selection*/}
          </Modal>
        </Col>
        <Col>
          <Button
            className="me-2 mb-2"
            onClick={() => {handleShowFemale(fullscreen); HandleSaveClickFemale();}}
          >
            Female
          </Button>
          <Modal
            show={showFemale}
            fullscreen={fullscreen}
            onHide={() => setShowFemale(false)}
          >
            <Modal.Body>
              <TrainingLevel/>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}

export default GenderSelection;
