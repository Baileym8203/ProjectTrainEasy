import React, { useState} from "react";
import { Button, Modal } from "react-bootstrap";
import Goals from "./goals"; // Important import!! This is the Goals selection that comes after choosing the split!

// This file is all of the prop functions that keep the user going through the workout creator (Workoutmaker.jsx) dependent on choices

export function BeginnerSplitMale() {
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
          <div>
            <p>Recomended: Full Body</p>
            <p>Time: 3 Day</p>
          </div>
        </Button>
        <Modal
          show={showTrainingGoal}
          fullscreen={fullscreen}
          onHide={() => setShowTrainingGoal(false)}
        >
          <Modal.Body>
            <Goals />
          </Modal.Body>
        </Modal>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          <div>
            <p>Recomended: Push Pull</p>
            <p>Time: 4 Day</p>
          </div>
        </Button>
      </ul>
    </div>
  );
}
export function NoviceSplitMale() {
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
          <div>
            <p>Recomended: Full Body</p>
            {/* This grabs the data from the find function that will take the specific data from SplitList.json*/}
            <p>Time: 3 Day</p>
          </div>
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
          <div>
            <p>Recomended: Push Pull</p>
            <p>Time: 4 Day</p>
          </div>
        </Button>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          <div>
            <p>Recomended: Upper Lower</p>
            <p>Time: 4 Day</p>
          </div>
        </Button>
      </ul>
    </div>
  );
}
export function IntermediateSplitMale() {
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
          <div>
            <p>Recomended: Push Pull</p>
            <p>Time: 4 Day</p>
          </div>
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
          <div>
            <p>Recomended: Upper Lower</p>
            <p>Time: 4 Day</p>
          </div>
        </Button>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          <div>
            <p>Recomended: Push Pull Legs</p>
            <p>Time: 6 Day</p>
          </div>
        </Button>
      </ul>
    </div>
  );
}
export function AdvancedSplitMale() {
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
          <div>
            <p>Recomended: Push Pull Legs</p>
            <p>Time: 6 Day</p>
          </div>
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
          <div>
            <p>Recomended: Push Pull + Arms</p>
            <p>Time: 5 Day</p>
          </div>
        </Button>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          <div>
            <p>Recomended: Upper Lower + Arms</p>
            <p>Time: 5 Day</p>
          </div>
        </Button>
      </ul>
    </div>
  );
}
export function ExpertSplitMale() {
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
          <div>
            <p>Recomended: Push Pull Legs</p>
            <p>Time: 5 Day</p>
          </div>
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
          <div>
            <p>Recomended: Push Pull + Arms</p>
            <p>Time: 5 Day</p>
          </div>
        </Button>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          <div>
            <p>Recomended: Upper Lower + Arms</p>
            <p>Time: 5 Day</p>
          </div>
        </Button>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          <div>
            <p>Recomended: Full Body </p>
            <p>Time: 4 Day</p>
          </div>
        </Button>
      </ul>
    </div>
  );
}

export function BeginnerSplitFemale() {
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
          <div>
            <p>Recomended: Full Body</p>
            <p>Time: 3 Day</p>
          </div>
        </Button>
        <Modal
          show={showTrainingGoal}
          fullscreen={fullscreen}
          onHide={() => setShowTrainingGoal(false)}
        >
          <Modal.Body>
            <Goals />
          </Modal.Body>
        </Modal>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          <div>
            <p>Recomended: Push Pull</p>
            <p>Time: 4 Day</p>
          </div>
        </Button>
      </ul>
    </div>
  );
}
export function NoviceSplitFemale() {
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
          <div>
            <p>Recomended: Full Body</p>
            {/* This grabs the data from the find function that will take the specific data from SplitList.json*/}
            <p>Time: 3 Day</p>
          </div>
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
          <div>
            <p>Recomended: Push Pull</p>
            <p>Time: 4 Day</p>
          </div>
        </Button>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          <div>
            <p>Recomended: Upper Lower</p>
            <p>Time: 4 Day</p>
          </div>
        </Button>
      </ul>
    </div>
  );
}
export function IntermediateSplitFemale() {
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
          <div>
            <p>Recomended: Push Pull</p>
            <p>Time: 4 Day</p>
          </div>
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
          <div>
            <p>Recomended: Upper Lower</p>
            <p>Time: 4 Day</p>
          </div>
        </Button>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          <div>
            <p>Recomended: Push Pull Legs</p>
            <p>Time: 6 Day</p>
          </div>
        </Button>
      </ul>
    </div>
  );
}
export function AdvancedSplitFemale() {
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
          <div>
            <p>Recomended: Push Pull Legs</p>
            <p>Time: 6 Day</p>
          </div>
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
          <div>
            <p>Recomended: Push Pull + Glutes</p>
            <p>Time: 5 Day</p>
          </div>
        </Button>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          <div>
            <p>Recomended: Upper Lower + Legs</p>
            <p>Time: 5 Day</p>
          </div>
        </Button>
      </ul>
    </div>
  );
}
export function ExpertSplitFemale() {
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
          <div>
            <p>Recomended: Push Pull Legs</p>
            <p>Time: 5 Day</p>
          </div>
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
          <div>
            <p>Recomended: Push Pull + Glutes</p>
            <p>Time: 5 Day</p>
          </div>
        </Button>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          <div>
            <p>Recomended: Upper Lower + Legs</p>
            <p>Time: 5 Day</p>
          </div>
        </Button>
        <Button onClick={() => handleShowTrainingGoal(fullscreen)}>
          <div>
            <p>Recomended: Full Body </p>
            <p>Time: 4 Day</p>
          </div>
        </Button>
      </ul>
    </div>
  );
}

