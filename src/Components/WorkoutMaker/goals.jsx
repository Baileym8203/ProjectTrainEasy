import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap'
import MyRoutine from './myroutine';

function Goals() {
    const [fullscreen, setFullscreen] = useState(true); // this allows the modal to take a fullscreen approach
    const [showRoutine, setShowRoutine] = useState(false);

    function handleShowRoutine(breakpoint) {
      // this will handle opening the Training Goals Section!
      setFullscreen(breakpoint);
      setShowRoutine(true);
    }
return (
    <div>
<h1>What is Most Important to you?</h1>
<ul>
<Button onClick={() => handleShowRoutine(fullscreen)}>Muscle</Button>
<Button onClick={() => handleShowRoutine(fullscreen)}>Strength</Button>
<Button onClick={() => handleShowRoutine(fullscreen)}>Both</Button>
<Modal
          show={showRoutine}
          fullscreen={fullscreen}
          onHide={() => setShowRoutine(false)}
        >
          <Modal.Body>
            <h1>Does Your Routine Look Good?</h1>
            <Button><MyRoutine/></Button>
          </Modal.Body>
        </Modal>
</ul>
</div>
)
}

export default Goals
