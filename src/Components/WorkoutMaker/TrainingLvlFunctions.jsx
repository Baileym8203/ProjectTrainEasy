import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase-config";
import { Timestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { SaveUserDataTrainingLvl } from "../Firebase/FirebaseUtills";
import { GetUserDataTrainingLvl } from "../Firebase/FirebaseUtills";
import { auth } from "../Firebase/firebase-config";
import { DocumentReference, DocumentSnapshot } from "firebase/firestore";

export function Beginner({ BeginnerMale, BeginnerFemale }) {
  const [fullscreen, setFullscreen] = useState(true); // this allows the modal to take a fullscreen approach
  const [showBeginner, setShowBeginner] = useState(false);
  const [userId, setUserId] = useState(null);
  const [gender, setGender] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        // this gender selection is now running smooth!!
        if (user) {
          console.log("User is authenticated:", user.uid);
          setUserId(user.uid);

          try {
            const userDocRef = doc(db, "users", user.uid);
            const userDocSnapshot = await getDoc(userDocRef);

            if (userDocSnapshot.exists()) {
              const userData = userDocSnapshot.data();
              setGender(userData.gender || null);
            } else {
              console.log("No such document!");
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          }

          // Fetch additional user data if needed
          GetUserDataTrainingLvl(user.uid)
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
        setLoading(false); // Set loading to false once data is fetched
      });

      return () => unsubscribe();
    };

    fetchUserData();
  }, []);

  const HandleSaveClick = async () => {
    if (userId) {
      const data = {
        traininglvl: "beginner",
        updatedAt: Timestamp.now(),
      };

      await SaveUserDataTrainingLvl(userId, data);
      const updatedData = await GetUserDataTrainingLvl(userId);
      console.log("Updated user data:", updatedData);
    } else {
      console.log("User is not authenticated.");
    }
  };

  // Compare gender choices on render if and only if the button is pressed
  if (gender === "male" && showBeginner === true) {
    console.log("User is male");
    return (
      <div>
        <Modal
          show={showBeginner}
          fullscreen={fullscreen}
          onHide={() => setShowBeginner(false)}
        >
          <Modal.Body>{BeginnerMale}</Modal.Body>
        </Modal>
      </div>
    );
  } else if (gender === "female" && showBeginner === true) {
    console.log("User is female");
    return (
      <div>
        <div>
          <Modal
            show={showBeginner}
            fullscreen={fullscreen}
            onHide={() => setShowBeginner(false)}
          >
            <Modal.Body>{BeginnerFemale}</Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }

  function handleShowBeginner(breakpoint) {
    // this will handle opening the beginner split list
    setFullscreen(breakpoint);
    setShowBeginner(true);
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      <Row>
        <Col>
          <Button
            className="mb-3"
            onClick={() => {
              handleShowBeginner(fullscreen);
              HandleSaveClick();
            }}
          >
            <div>
              <p>Training Lvl: Beginner</p>
              <p>How long you've been training: 1 - 6 Months</p>
            </div>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export function Novice({ NoviceMale }) {
  // next in line for programming in gender selection correctly!!
  const [fullscreen, setFullscreen] = useState(true); // this allows the modal to take a fullscreen approach
  const [showNovice, setShowNovice] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // all of the functions nessesary to change the user choice data and just fetching it for now to see the results
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is authenticated:", user.uid);
        setUserId(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const HandleSaveClick = async () => {
    // will save the new data to the user that chooses on the click of the choice
    if (userId) {
      const data = {
        traininglvl: "novice",
        updatedAt: Timestamp.now(),
      };

      await SaveUserDataTrainingLvl(userId, data); // will save the user data then show the updated user data within the console
      const updatedData = await GetUserDataTrainingLvl(userId);
      console.log("Updated user data:", updatedData);
    } else {
      console.log("User is not authenticated.");
    }
  };

  function handleShowNovice(breakpoint) {
    // this will handle opening the novice split list
    setFullscreen(breakpoint);
    setShowNovice(true);
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      <Row>
        <Col>
          <Button
            className="mb-3"
            onClick={() => {
              handleShowNovice(fullscreen);
              HandleSaveClick();
            }}
          >
            <div>
              <p>Training Lvl: Novice</p>
              <p>How long you've been training: 6 - 12 Months</p>
            </div>
          </Button>
          <Modal
            show={showNovice}
            fullscreen={fullscreen}
            onHide={() => setShowNovice(false)}
          >
            <Modal.Body>{NoviceMale}</Modal.Body>{" "}
            {/*Need to add a conditonal that takes the gender data and changes the outcome based on that data */}
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}

export function Intermediate({ IntermediateMale }) {
  const [fullscreen, setFullscreen] = useState(true); // this allows the modal to take a fullscreen approach
  const [showIntermediate, setShowIntermediate] = useState(false); // all of these are the use states for the modals when opening and closing for the different training levels
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // all of the functions nessesary to change the user choice data and just fetching it for now to see the results
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is authenticated:", user.uid);
        setUserId(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const HandleSaveClick = async () => {
    // will save the new data to the user that chooses on the click of the choice
    if (userId) {
      const data = {
        traininglvl: "intermediate",
        updatedAt: Timestamp.now(),
      };

      await SaveUserDataTrainingLvl(userId, data); // will save the user data then show the updated user data within the console
      const updatedData = await GetUserDataTrainingLvl(userId);
      console.log("Updated user data:", updatedData);
    } else {
      console.log("User is not authenticated.");
    }
  };

  function handleShowIntermediate(breakpoint) {
    // this will handle opening the intermediate split list
    setFullscreen(breakpoint);
    setShowIntermediate(true);
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      <Row>
        <Col>
          <Button
            className="mb-3"
            onClick={() => {
              handleShowIntermediate(fullscreen);
              HandleSaveClick();
            }}
          >
            <div>
              <p>Training Lvl: Intermediate</p>{" "}
              <p>How long you've been training: 1 - 3 Years</p>
            </div>
          </Button>
          <Modal
            show={showIntermediate}
            fullscreen={fullscreen}
            onHide={() => setShowIntermediate(false)}
          >
            <Modal.Body>{IntermediateMale}</Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}

export function Advanced({ AdvancedMale }) {
  const [fullscreen, setFullscreen] = useState(true); // this allows the modal to take a fullscreen approach
  const [showAdvanced, setShowAdvanced] = useState(false); // all of these are the use states for the modals when opening and closing for the different training levels
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // all of the functions nessesary to change the user choice data and just fetching it for now to see the results
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is authenticated:", user.uid);
        setUserId(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const HandleSaveClick = async () => {
    // will save the new data to the user that chooses on the click of the choice
    if (userId) {
      const data = {
        traininglvl: "advanced",
        updatedAt: Timestamp.now(),
      };

      await SaveUserDataTrainingLvl(userId, data); // will save the user data then show the updated user data within the console
      const updatedData = await GetUserDataTrainingLvl(userId);
      console.log("Updated user data:", updatedData);
    } else {
      console.log("User is not authenticated.");
    }
  };

  function handleShowAdvanced(breakpoint) {
    // this will handle opening the Advanced split list
    setFullscreen(breakpoint);
    setShowAdvanced(true);
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      <Row>
        <Col>
          <Button
            className="mb-3"
            onClick={() => {
              handleShowAdvanced(fullscreen);
              HandleSaveClick();
            }}
          >
            <div>
              <p>Training Lvl: Advanced</p>
              <p>How long you've been training: 3 - 5 Years</p>
            </div>
          </Button>
          <Modal
            show={showAdvanced}
            fullscreen={fullscreen}
            onHide={() => setShowAdvanced(false)}
          >
            <Modal.Body>{AdvancedMale}</Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}

export function Expert({ ExpertMale }) {
  const [fullscreen, setFullscreen] = useState(true); // this allows the modal to take a fullscreen approach
  const [showExpert, setShowExpert] = useState(false); // all of these are the use states for the modals when opening and closing for the different training levels
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // all of the functions nessesary to change the user choice data and just fetching it for now to see the results
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is authenticated:", user.uid);
        setUserId(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const HandleSaveClick = async () => {
    // will save the new data to the user that chooses on the click of the choice
    if (userId) {
      const data = {
        traininglvl: "expert",
        updatedAt: Timestamp.now(),
      };

      await SaveUserDataTrainingLvl(userId, data); // will save the user data then show the updated user data within the console
      const updatedData = await GetUserDataTrainingLvl(userId);
      console.log("Updated user data:", updatedData);
    } else {
      console.log("User is not authenticated.");
    }
  };

  function handleShowExpert(breakpoint) {
    // this will handle opening the Expert split list
    setFullscreen(breakpoint);
    setShowExpert(true);
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      <Row>
        <Col>
          <Button
            className="mb-3"
            onClick={() => {
              handleShowExpert(fullscreen);
              HandleSaveClick();
            }}
          >
            <div>
              <p>Training Lvl: Expert</p>{" "}
              <p>How long you've been training: 5 - 10 Years</p>
            </div>
          </Button>
          <Modal
            show={showExpert}
            fullscreen={fullscreen}
            onHide={() => setShowExpert(false)}
          >
            <Modal.Body>{ExpertMale}</Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}
