import React, { useState, useEffect} from "react";
import { Button, Modal } from "react-bootstrap";
import Goals from "./goals"; // Important import!! This is the Goals selection that comes after choosing the split!
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebase-config";
import {Timestamp } from "firebase/firestore";
import { GetUserDataSplit, SaveUserDataSplit } from "../Firebase/FirebaseUtills";
// This file is all of the prop functions that keep the user going through the workout creator (Workoutmaker.jsx) dependent on choices

export function BeginnerSplitMale() {
  const [fullscreen, setFullscreen] = useState(true); // this allows the modal to take a fullscreen approach
  const [showTrainingGoal, setShowTrainingGoal] = useState(false);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
       
        if (user) {
          console.log("User is authenticated:", user.uid);
          setUserId(user.uid);

          // Fetch additional user data if needed
          GetUserDataSplit(user.uid)
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

  const HandleSaveClickFullBody = async () => { // handles saving of the users choice of split when picked!
    if (userId) {
      const data = {
        split: "full body",
        updatedAt: Timestamp.now(),
      };

      await SaveUserDataSplit(userId, data); // this will update firestore when the user clicks!
      const updatedData = await GetUserDataSplit(userId);
      console.log("Updated user data:", updatedData);
    } else {
      console.log("User is not authenticated.");
    }
  };

  const HandleSaveClickPushPull = async () => { // handles saving of the users choice of split when picked!
    if (userId) {
      const data = {
        split: "Push Pull",
        updatedAt: Timestamp.now(),
      };

      await SaveUserDataSplit(userId, data); // this will update firestore when the user clicks!
      const updatedData = await GetUserDataSplit(userId);
      console.log("Updated user data:", updatedData);
    } else {
      console.log("User is not authenticated.");
    }
  };



  function handleShowTrainingGoal(breakpoint) {
    // this will handle opening the Training Goals Section!
    setFullscreen(breakpoint);
    setShowTrainingGoal(true);
  }

  return (
    <div>
      <h1>Choose Your Split</h1>
      <ul>
        <Button onClick={() => {handleShowTrainingGoal(fullscreen); HandleSaveClickFullBody();}}>
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
        <Button onClick={() => {handleShowTrainingGoal(fullscreen); HandleSaveClickPushPull();}}>
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
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        // this gender selection is now running smooth!!
        if (user) {
          console.log("User is authenticated:", user.uid);
          setUserId(user.uid);

          // Fetch additional user data if needed
          GetUserDataSplit(user.uid)
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

  const HandleSaveClickFullBody = async () => { // handles saving of the users choice of split when picked!
    if (userId) {
      const data = {
        split: "full body",
        updatedAt: Timestamp.now(),
      };

      await SaveUserDataSplit(userId, data); // this will update firestore when the user clicks!
      const updatedData = await GetUserDataSplit(userId);
      console.log("Updated user data:", updatedData);
    } else {
      console.log("User is not authenticated.");
    }
  };

  const HandleSaveClickPushPull = async () => { // handles saving of the users choice of split when picked!
    if (userId) {
      const data = {
        split: "Push Pull",
        updatedAt: Timestamp.now(),
      };

      await SaveUserDataSplit(userId, data); // this will update firestore when the user clicks!
      const updatedData = await GetUserDataSplit(userId);
      console.log("Updated user data:", updatedData);
    } else {
      console.log("User is not authenticated.");
    }
  };

  const HandleSaveClickUpperLower = async () => { // handles saving of the users choice of split when picked!
    if (userId) {
      const data = {
        split: "Upper Lower",
        updatedAt: Timestamp.now(),
      };

      await SaveUserDataSplit(userId, data); // this will update firestore when the user clicks!
      const updatedData = await GetUserDataSplit(userId);
      console.log("Updated user data:", updatedData);
    } else {
      console.log("User is not authenticated.");
    }
  };


  function handleShowTrainingGoal(breakpoint) {
    // this will handle opening the Training Goals Section!
    setFullscreen(breakpoint);
    setShowTrainingGoal(true);
  }

  return (
    <div>
      <h1>Choose Your Split</h1>
      <ul>
        <Button onClick={() => {handleShowTrainingGoal(fullscreen); HandleSaveClickFullBody();}}>
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
        <Button onClick={() => {handleShowTrainingGoal(fullscreen); HandleSaveClickPushPull();}}>
          <div>
            <p>Recomended: Push Pull</p>
            <p>Time: 4 Day</p>
          </div>
        </Button>
        <Button onClick={() => {handleShowTrainingGoal(fullscreen); HandleSaveClickUpperLower();}}>
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
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        // this gender selection is now running smooth!!
        if (user) {
          console.log("User is authenticated:", user.uid);
          setUserId(user.uid);

          // Fetch additional user data if needed
          GetUserDataSplit(user.uid)
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

  const HandleSaveClickPushPull = async () => { // handles saving of the users choice of split when picked!
    if (userId) {
      const data = {
        split: "Push Pull",
        updatedAt: Timestamp.now(),
      };

      await SaveUserDataSplit(userId, data); // this will update firestore when the user clicks!
      const updatedData = await GetUserDataSplit(userId);
      console.log("Updated user data:", updatedData);
    } else {
      console.log("User is not authenticated.");
    }
  };

  const HandleSaveClickUpperLower = async () => { // handles saving of the users choice of split when picked!
    if (userId) {
      const data = {
        split: "Upper Lower",
        updatedAt: Timestamp.now(),
      };

      await SaveUserDataSplit(userId, data); // this will update firestore when the user clicks!
      const updatedData = await GetUserDataSplit(userId);
      console.log("Updated user data:", updatedData);
    } else {
      console.log("User is not authenticated.");
    }
  };

  const HandleSaveClickPushPullLegs = async () => { // handles saving of the users choice of split when picked!
    if (userId) {
      const data = {
        split: "push pull legs",
        updatedAt: Timestamp.now(),
      };

      await SaveUserDataSplit(userId, data); // this will update firestore when the user clicks!
      const updatedData = await GetUserDataSplit(userId);
      console.log("Updated user data:", updatedData);
    } else {
      console.log("User is not authenticated.");
    }
  };

  function handleShowTrainingGoal(breakpoint) {
    // this will handle opening the Training Goals Section!
    setFullscreen(breakpoint);
    setShowTrainingGoal(true);
  }
  return (
    <div>
      <h1>Choose Your Split</h1>
      <ul>
        <Button onClick={() => {handleShowTrainingGoal(fullscreen); HandleSaveClickPushPull();}}>
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
        <Button onClick={() => {handleShowTrainingGoal(fullscreen); HandleSaveClickUpperLower();}}>
          <div>
            <p>Recomended: Upper Lower</p>
            <p>Time: 4 Day</p>
          </div>
        </Button>
        <Button onClick={() => {handleShowTrainingGoal(fullscreen); HandleSaveClickPushPullLegs();}}>
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
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        // this gender selection is now running smooth!!
        if (user) {
          console.log("User is authenticated:", user.uid);
          setUserId(user.uid);

          // Fetch additional user data if needed
          GetUserDataSplit(user.uid)
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

  const HandleSaveClickPushPullLegs = async () => { // handles saving of the users choice of split when picked!
    if (userId) {
      const data = {
        split: "Push Pull Legs",
        updatedAt: Timestamp.now(),
      };

      await SaveUserDataSplit(userId, data); // this will update firestore when the user clicks!
      const updatedData = await GetUserDataSplit(userId);
      console.log("Updated user data:", updatedData);
    } else {
      console.log("User is not authenticated.");
    }
  };

  const HandleSaveClickPushPullArms = async () => { // handles saving of the users choice of split when picked!
    if (userId) {
      const data = {
        split: "Push Pull + Arms",
        updatedAt: Timestamp.now(),
      };

      await SaveUserDataSplit(userId, data); // this will update firestore when the user clicks!
      const updatedData = await GetUserDataSplit(userId);
      console.log("Updated user data:", updatedData);
    } else {
      console.log("User is not authenticated.");
    }
  };

  const HandleSaveClickUpperLowerArms = async () => { // handles saving of the users choice of split when picked!
    if (userId) {
      const data = {
        split: "Upper Lower + Arms",
        updatedAt: Timestamp.now(),
      };

      await SaveUserDataSplit(userId, data); // this will update firestore when the user clicks!
      const updatedData = await GetUserDataSplit(userId);
      console.log("Updated user data:", updatedData);
    } else {
      console.log("User is not authenticated.");
    }
  };

  function handleShowTrainingGoal(breakpoint) {
    // this will handle opening the Training Goals Section!
    setFullscreen(breakpoint);
    setShowTrainingGoal(true);
  }
  return (
    <div>
      <h1>Choose Your Split</h1>
      <ul>
        <Button onClick={() => {handleShowTrainingGoal(fullscreen); HandleSaveClickPushPullLegs();}}>
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
        <Button onClick={() => {handleShowTrainingGoal(fullscreen); HandleSaveClickPushPullArms();}}>
          <div>
            <p>Recomended: Push Pull + Arms</p>
            <p>Time: 5 Day</p>
          </div>
        </Button>
        <Button onClick={() => {handleShowTrainingGoal(fullscreen); HandleSaveClickUpperLowerArms();}}>
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
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        // this gender selection is now running smooth!!
        if (user) {
          console.log("User is authenticated:", user.uid);
          setUserId(user.uid);

          // Fetch additional user data if needed
          GetUserDataSplit(user.uid)
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

  const HandleSaveClickPushPullLegs = async () => { // handles saving of the users choice of split when picked!
    if (userId) {
      const data = {
        split: "Push Pull Legs",
        updatedAt: Timestamp.now(),
      };

      await SaveUserDataSplit(userId, data); // this will update firestore when the user clicks!
      const updatedData = await GetUserDataSplit(userId);
      console.log("Updated user data:", updatedData);
    } else {
      console.log("User is not authenticated.");
    }
  };

  const HandleSaveClickPushPullArms = async () => { // handles saving of the users choice of split when picked!
    if (userId) {
      const data = {
        split: "Push Pull + Arms",
        updatedAt: Timestamp.now(),
      };

      await SaveUserDataSplit(userId, data); // this will update firestore when the user clicks!
      const updatedData = await GetUserDataSplit(userId);
      console.log("Updated user data:", updatedData);
    } else {
      console.log("User is not authenticated.");
    }
  };

  const HandleSaveClickUpperLowerArms = async () => { // handles saving of the users choice of split when picked!
    if (userId) {
      const data = {
        split: "Upper Lower + Arms",
        updatedAt: Timestamp.now(),
      };

      await SaveUserDataSplit(userId, data); // this will update firestore when the user clicks!
      const updatedData = await GetUserDataSplit(userId);
      console.log("Updated user data:", updatedData);
    } else {
      console.log("User is not authenticated.");
    }
  };

  const HandleSaveClickFullBody = async () => { // handles saving of the users choice of split when picked!
    if (userId) {
      const data = {
        split: "Full Body",
        updatedAt: Timestamp.now(),
      };

      await SaveUserDataSplit(userId, data); // this will update firestore when the user clicks!
      const updatedData = await GetUserDataSplit(userId);
      console.log("Updated user data:", updatedData);
    } else {
      console.log("User is not authenticated.");
    }
  };

  function handleShowTrainingGoal(breakpoint) {
    // this will handle opening the Training Goals Section!
    setFullscreen(breakpoint);
    setShowTrainingGoal(true);
  }
  return (
    <div>
      <h1>Choose Your Split</h1>
      <ul>
        <Button onClick={() => {handleShowTrainingGoal(fullscreen); HandleSaveClickPushPullLegs();}}>
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
        <Button onClick={() => {handleShowTrainingGoal(fullscreen); HandleSaveClickPushPullArms();}}>
          <div>
            <p>Recomended: Push Pull + Arms</p>
            <p>Time: 5 Day</p>
          </div>
        </Button>
        <Button onClick={() => {handleShowTrainingGoal(fullscreen); HandleSaveClickUpperLowerArms();}}>
          <div>
            <p>Recomended: Upper Lower + Arms</p>
            <p>Time: 5 Day</p>
          </div>
        </Button>
        <Button onClick={() => {handleShowTrainingGoal(fullscreen); HandleSaveClickFullBody();}}>
          <div>
            <p>Recomended: Full Body </p>
            <p>Time: 4 Day</p>
          </div>
        </Button>
      </ul>
    </div>
  );
}



