import React, { useState } from "react";
import SplitList from "../WorkoutMaker/SplitList.json";
import { Button, Modal } from "react-bootstrap";
import Goals from "./goals"; // Important import!! This is the Goals selection that comes after choosing the split!

// This file is all of the prop functions that keep the user going through the workout creator (Workoutmaker.jsx) dependent on choices

const beginnerSplitItem = SplitList.find((split) => split.splitID === 1); // find out the data I need specifically for Beginner split
const beginnerSplitItem2 = SplitList.find((split) => split.splitID === 2);

const NoviceSplitItem = SplitList.find((split) => split.splitID === 1); // find out the data I need specifically for Novice split
const NoviceSplitItem2 = SplitList.find((split) => split.splitID === 2);
const NoviceSplitItem3 = SplitList.find((split) => split.splitID === 3);

const IntermediateSplitItem = SplitList.find((split) => split.splitID === 2); // find out the data I need specifically for Intermediate split
const IntermediateSplitItem2 = SplitList.find((split) => split.splitID === 3);
const IntermediateSplitItem3 = SplitList.find((split) => split.splitID === 4);

const AdvancedSplitItem = SplitList.find((split) => split.splitID === 4); // find out the data I need specifically for Advanced split
const AdvancedSplitItem2 = SplitList.find((split) => split.splitID === 5);
const AdvancedSplitItem3 = SplitList.find((split) => split.splitID === 6);

const ExpertSplitItem = SplitList.find((split) => split.splitID === 4); // find out the data I need specifically for Expert split
const ExpertSplitItem2 = SplitList.find((split) => split.splitID === 5);
const ExpertSplitItem3 = SplitList.find((split) => split.splitID === 6);
const ExpertSplitItem4 = SplitList.find((split) => split.splitID === 7);

export function BeginnerSplit() {
  const [fullscreen, setFullscreen] = useState(true); // this allows the modal to take a fullscreen approach
  const [showTrainingGoal, setShowTrainingGoal] = useState(false);

  function handleShowTrainingGoal(breakpoint) {
    // this will handle opening the Training Goals Section!
    setFullscreen(breakpoint);
    setShowTrainingGoal(true);
  }
  return (
    <div>
      <h1>Choose Your Split</h1>
      <ul>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          {beginnerSplitItem ? ( // this creates a sudo function that will help change the item to an error code if not fetching the data correctly
            <div>
              <p>Recomended: {beginnerSplitItem.name}</p>{" "}
              {/* This grabs the data from the find function that will take the specific data from SplitList.json*/}
              <p>Time: {beginnerSplitItem.time}</p>
            </div>
          ) : (
            <p>404 Error</p> // this will be a not found error code to track the split data not loading in properly
          )}
        </Button>
        <Modal
          show={showTrainingGoal}
          fullscreen={fullscreen}
          onHide={() => setShowTrainingGoal(false)}
        >
          <Modal.Body>
            <Goals />
            {/* this is the button that leads to the next page after you select your Training Goal! */}
          </Modal.Body>
        </Modal>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          {beginnerSplitItem2 ? (
            <div>
              <p>Recomended: {beginnerSplitItem2.name}</p>{" "}
              {/* This grabs the data from the find function that will take the specific data from SplitList.json*/}
              <p>Time: {beginnerSplitItem2.time}</p>
            </div>
          ) : (
            <p>404 Error</p>
          )}
        </Button>
      </ul>
    </div>
  );
}
export function NoviceSplit() {
  const [fullscreen, setFullscreen] = useState(true); // this allows the modal to take a fullscreen approach
  const [showTrainingGoal, setShowTrainingGoal] = useState(false);

  function handleShowTrainingGoal(breakpoint) {
    // this will handle opening the Training Goals Section!
    setFullscreen(breakpoint);
    setShowTrainingGoal(true);
  }
  return (
    <div>
      <h1>Choose Your Split</h1>
      <ul>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          {NoviceSplitItem ? ( // this creates a sudo function that will help change the item to an error code if not fetching the data correctly
            <div>
              <p>Recomended: {NoviceSplitItem.name}</p>{" "}
              {/* This grabs the data from the find function that will take the specific data from SplitList.json*/}
              <p>Time: {NoviceSplitItem.time}</p>
            </div>
          ) : (
            <p>404 Error</p> // this will be a not found error code to track the split data not loading in properly
          )}
        </Button>
        <Modal
          show={showTrainingGoal}
          fullscreen={fullscreen}
          onHide={() => setShowTrainingGoal(false)}
        >
          <Modal.Body>
            <Goals />
            {/* this is the button that leads to the next page after you select your Training Goal! */}
          </Modal.Body>
        </Modal>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          {NoviceSplitItem2 ? (
            <div>
              <p>Recomended: {NoviceSplitItem2.name}</p>{" "}
              {/* This grabs the data from the find function that will take the specific data from SplitList.json*/}
              <p>Time: {NoviceSplitItem2.time}</p>
            </div>
          ) : (
            <p>404 Error</p>
          )}
        </Button>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          {NoviceSplitItem3 ? (
            <div>
              <p>Recomended: {NoviceSplitItem3.name}</p>{" "}
              {/* This grabs the data from the find function that will take the specific data from SplitList.json*/}
              <p>Time: {NoviceSplitItem3.time}</p>
            </div>
          ) : (
            <p>404 Error</p>
          )}
        </Button>
      </ul>
    </div>
  );
}
export function IntermediateSplit() {
  const [fullscreen, setFullscreen] = useState(true); // this allows the modal to take a fullscreen approach
  const [showTrainingGoal, setShowTrainingGoal] = useState(false);

  function handleShowTrainingGoal(breakpoint) {
    // this will handle opening the Training Goals Section!
    setFullscreen(breakpoint);
    setShowTrainingGoal(true);
  }
  return (
    <div>
      <h1>Choose Your Split</h1>
      <ul>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          {IntermediateSplitItem ? ( // this creates a sudo function that will help change the item to an error code if not fetching the data correctly
            <div>
              <p>Recomended: {IntermediateSplitItem.name}</p>{" "}
              {/* This grabs the data from the find function that will take the specific data from SplitList.json*/}
              <p>Time: {IntermediateSplitItem.time}</p>
            </div>
          ) : (
            <p>404 Error</p> // this will be a not found error code to track the split data not loading in properly
          )}
        </Button>
        <Modal
          show={showTrainingGoal}
          fullscreen={fullscreen}
          onHide={() => setShowTrainingGoal(false)}
        >
          <Modal.Body>
            <Goals />
            {/* this is the button that leads to the next page after you select your Training Goal! */}
          </Modal.Body>
        </Modal>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          {IntermediateSplitItem2 ? (
            <div>
              <p>Recomended: {IntermediateSplitItem2.name}</p>{" "}
              {/* This grabs the data from the find function that will take the specific data from SplitList.json*/}
              <p>Time: {IntermediateSplitItem2.time}</p>
            </div>
          ) : (
            <p>404 Error</p>
          )}
        </Button>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          {IntermediateSplitItem3 ? (
            <div>
              <p>Recomended: {IntermediateSplitItem3.name}</p>{" "}
              {/* This grabs the data from the find function that will take the specific data from SplitList.json*/}
              <p>Time: {IntermediateSplitItem3.time}</p>
            </div>
          ) : (
            <p>404 Error</p>
          )}
        </Button>
      </ul>
    </div>
  );
}
export function AdvancedSplit() {
  const [fullscreen, setFullscreen] = useState(true); // this allows the modal to take a fullscreen approach
  const [showTrainingGoal, setShowTrainingGoal] = useState(false);

  function handleShowTrainingGoal(breakpoint) {
    // this will handle opening the Training Goals Section!
    setFullscreen(breakpoint);
    setShowTrainingGoal(true);
  }
  return (
    <div>
      <h1>Choose Your Split</h1>
      <ul>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          {AdvancedSplitItem ? ( // this creates a sudo function that will help change the item to an error code if not fetching the data correctly
            <div>
              <p>Recomended: {AdvancedSplitItem.name}</p>{" "}
              {/* This grabs the data from the find function that will take the specific data from SplitList.json*/}
              <p>Time: {AdvancedSplitItem.time}</p>
            </div>
          ) : (
            <p>404 Error</p> // this will be a not found error code to track the split data not loading in properly
          )}
        </Button>
        <Modal
          show={showTrainingGoal}
          fullscreen={fullscreen}
          onHide={() => setShowTrainingGoal(false)}
        >
          <Modal.Body>
            <Goals />
            {/* this is the button that leads to the next page after you select your Training Goal! */}
          </Modal.Body>
        </Modal>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          {AdvancedSplitItem2 ? (
            <div>
              <p>Recomended: {AdvancedSplitItem2.name}</p>{" "}
              {/* This grabs the data from the find function that will take the specific data from SplitList.json*/}
              <p>Time: {AdvancedSplitItem2.time}</p>
            </div>
          ) : (
            <p>404 Error</p>
          )}
        </Button>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          {AdvancedSplitItem3 ? (
            <div>
              <p>Recomended: {AdvancedSplitItem3.name}</p>{" "}
              {/* This grabs the data from the find function that will take the specific data from SplitList.json*/}
              <p>Time: {AdvancedSplitItem3.time}</p>
            </div>
          ) : (
            <p>404 Error</p>
          )}
        </Button>
      </ul>
    </div>
  );
}
export function ExpertSplit() {
  const [fullscreen, setFullscreen] = useState(true); // this allows the modal to take a fullscreen approach
  const [showTrainingGoal, setShowTrainingGoal] = useState(false);

  function handleShowTrainingGoal(breakpoint) {
    // this will handle opening the Training Goals Section!
    setFullscreen(breakpoint);
    setShowTrainingGoal(true);
  }
  return (
    <div>
      <h1>Choose Your Split</h1>
      <ul>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          {ExpertSplitItem ? ( // this creates a sudo function that will help change the item to an error code if not fetching the data correctly
            <div>
              <p>Recomended: {ExpertSplitItem.name}</p>{" "}
              {/* This grabs the data from the find function that will take the specific data from SplitList.json*/}
              <p>Time: {ExpertSplitItem.time}</p>
            </div>
          ) : (
            <p>404 Error</p> // this will be a not found error code to track the split data not loading in properly
          )}
        </Button>
        <Modal
          show={showTrainingGoal}
          fullscreen={fullscreen}
          onHide={() => setShowTrainingGoal(false)}
        >
          <Modal.Body>
            <Goals />
            {/* this is the button that leads to the next page after you select your Training Goal! */}
          </Modal.Body>
        </Modal>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          {ExpertSplitItem2 ? (
            <div>
              <p>Recomended: {ExpertSplitItem2.name}</p>{" "}
              {/* This grabs the data from the find function that will take the specific data from SplitList.json*/}
              <p>Time: {ExpertSplitItem2.time}</p>
            </div>
          ) : (
            <p>404 Error</p>
          )}
        </Button>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          {ExpertSplitItem3 ? (
            <div>
              <p>Recomended: {ExpertSplitItem3.name}</p>{" "}
              {/* This grabs the data from the find function that will take the specific data from SplitList.json*/}
              <p>Time: {ExpertSplitItem3.time}</p>
            </div>
          ) : (
            <p>404 Error</p>
          )}
        </Button>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          {ExpertSplitItem4 ? (
            <div>
              <p>Recomended: {ExpertSplitItem4.name}</p>{" "}
              {/* This grabs the data from the find function that will take the specific data from SplitList.json*/}
              <p>Time: {ExpertSplitItem4.time}</p>
            </div>
          ) : (
            <p>404 Error</p>
          )}
        </Button>
      </ul>
    </div>
  );
}
