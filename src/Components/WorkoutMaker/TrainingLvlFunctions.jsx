import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { db, getDocs, collection } from "../Firebase/firebase-config";

 export function Beginner({Beginner}) {
    const [fullscreen, setFullscreen] = useState(true); // this allows the modal to take a fullscreen approach
    const [showBeginner, setShowBeginner] = useState(false);
    const [TrainingLvl, setTrainingLvl] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => { // this will fetch the data needed from firebase firestore from the specific database!
        try {
          const querySnapshot = await getDocs(collection(db, 'traininglvl'));
          const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setTrainingLvl(data);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };
  
      fetchData();
    }, []);
  
    const beginnerItem = TrainingLvl.find(TrainingLvl => TrainingLvl.id === "1");
  
  
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
              onClick={() => handleShowBeginner(fullscreen)}
            >
              {beginnerItem ? (
              <div>
                <p>Training Lvl: {beginnerItem.name}</p>{" "}

                <p>How long you've been training: {beginnerItem.month}</p>
              </div>
            ) : (
              <p>404 Error</p>
            )}
            </Button>
            <Modal
              show={showBeginner}
              fullscreen={fullscreen}
              onHide={() => setShowBeginner(false)}
            >
              <Modal.Body>{Beginner}</Modal.Body>
               
            </Modal>
          </Col>
          </Row>
          </Container>
   )}

   export function Novice({Novice}) {
    const [fullscreen, setFullscreen] = useState(true); // this allows the modal to take a fullscreen approach
    const [showNovice, setShowNovice] = useState(false);
    const [TrainingLvl, setTrainingLvl] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => { // this will fetch the data needed from firebase firestore from the specific database!
        try {
          const querySnapshot = await getDocs(collection(db, 'traininglvl'));
          const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setTrainingLvl(data);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };
  
      fetchData();
    }, []);
  
    const NoviceItem = TrainingLvl.find(TrainingLvl => TrainingLvl.id === "2");
  
  
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
              onClick={() => handleShowNovice(fullscreen)}
            >
              {NoviceItem ? (
              <div>
                <p>Training Lvl: {NoviceItem.name}</p>{" "}
          
                <p>How long you've been training: {NoviceItem.month}</p>
              </div>
            ) : (
              <p>404 Error</p>
            )}
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
          </Container>
   )}

   export function Intermediate({Intermediate}) {

   const [fullscreen, setFullscreen] = useState(true); // this allows the modal to take a fullscreen approach
   const [showIntermediate, setShowIntermediate] = useState(false); // all of these are the use states for the modals when opening and closing for the different training levels
   const [TrainingLvl, setTrainingLvl] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => { // this will fetch the data needed from firebase firestore from the specific database!
        try {
          const querySnapshot = await getDocs(collection(db, 'traininglvl'));
          const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setTrainingLvl(data);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };
  
      fetchData();
    }, []);
  
    const IntermediateItem = TrainingLvl.find(TrainingLvl => TrainingLvl.id === "3");

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
      onClick={() => handleShowIntermediate(fullscreen)}
    >
      {IntermediateItem ? (
              <div>
                <p>Training Lvl: {IntermediateItem.name}</p>{" "}
               
                <p>How long you've been training: {IntermediateItem.month}</p>
              </div>
            ) : (
              <p>404 Error</p>
            )}
    </Button>
    <Modal
      show={showIntermediate}
      fullscreen={fullscreen}
      onHide={() => setShowIntermediate(false)}
    >
      <Modal.Body>{Intermediate}</Modal.Body>
       
    </Modal>
  </Col>
  </Row>
  </Container>
)
  }

export function Advanced({Advanced}) {
    const [fullscreen, setFullscreen] = useState(true); // this allows the modal to take a fullscreen approach
    const [showAdvanced, setShowAdvanced] = useState(false); // all of these are the use states for the modals when opening and closing for the different training levels
    const [TrainingLvl, setTrainingLvl] = useState([]);
     
     useEffect(() => {
       const fetchData = async () => { // this will fetch the data needed from firebase firestore from the specific database!
         try {
           const querySnapshot = await getDocs(collection(db, 'traininglvl'));
           const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
           setTrainingLvl(data);
         } catch (error) {
           console.error("Error fetching data: ", error);
         }
       };
   
       fetchData();
     }, []);
   
     const AdvancedItem = TrainingLvl.find(TrainingLvl => TrainingLvl.id === "4");
 
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
       onClick={() => handleShowAdvanced(fullscreen)}
     >
       {AdvancedItem ? (
               <div>
                 <p>Training Lvl: {AdvancedItem.name}</p>{" "}
                 
                 <p>How long you've been training: {AdvancedItem.month}</p>
               </div>
             ) : (
               <p>404 Error</p>
             )}
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
   </Container>
 )
}

export function Expert({Expert}) {
    const [fullscreen, setFullscreen] = useState(true); // this allows the modal to take a fullscreen approach
    const [showExpert, setShowExpert] = useState(false); // all of these are the use states for the modals when opening and closing for the different training levels
    const [TrainingLvl, setTrainingLvl] = useState([]);
     
     useEffect(() => {
       const fetchData = async () => { // this will fetch the data needed from firebase firestore from the specific database!
         try {
           const querySnapshot = await getDocs(collection(db, 'traininglvl'));
           const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
           setTrainingLvl(data);
         } catch (error) {
           console.error("Error fetching data: ", error);
         }
       };
   
       fetchData();
     }, []);
   
     const ExpertItem = TrainingLvl.find(TrainingLvl => TrainingLvl.id === "5");
 
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
       onClick={() => handleShowExpert(fullscreen)}
     >
       {ExpertItem ? (
               <div>
                 <p>Training Lvl: {ExpertItem.name}</p>{" "}
               
                 <p>How long you've been training: {ExpertItem.month}</p>
               </div>
             ) : (
               <p>404 Error</p>
             )}
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
 )
}
