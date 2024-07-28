import React from "react";
import SplitList from "../WorkoutMaker/SplitList.json";
import { Button } from "react-bootstrap";

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
  // This is next in development!! Needs Modals to be onclick added to the buttons to go to next selection
  return (
    <div>
      <h1>Choose Your Split</h1>
      <ul>
        <Button>
          {beginnerSplitItem ? ( // this creates a sudo function that will help change the item to an error code if not fetching the data correctly
            <div>
              <p>Recomended: {beginnerSplitItem.name}</p>
              <p>Time: {beginnerSplitItem.time}</p>
            </div>
          ) : (
            <p>404 Error</p> // this will be a not found error code to track the split data not loading in properly
          )}
        </Button>
        <Button>
          {beginnerSplitItem2 ? (
            <div>
              <p>Recomended: {beginnerSplitItem2.name}</p>
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
  return (
    <div>
      <h1>Choose Your Split</h1>
      <ul>
        <Button>
          {NoviceSplitItem ? ( // this creates a sudo function that will help change the item to an error code if not fetching the data correctly
            <div>
              <p>Recomended: {NoviceSplitItem.name}</p>
              <p>Time: {NoviceSplitItem.time}</p>
            </div>
          ) : (
            <p>404 Error</p> // this will be a not found error code to track the split data not loading in properly
          )}
        </Button>
        <Button>
          {NoviceSplitItem2 ? (
            <div>
              <p>Recomended: {NoviceSplitItem2.name}</p>
              <p>Time: {NoviceSplitItem2.time}</p>
            </div>
          ) : (
            <p>404 Error</p>
          )}
        </Button>
        <Button>
          {NoviceSplitItem3 ? (
            <div>
              <p>Recomended: {NoviceSplitItem3.name}</p>
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
  return (
    <div>
      <h1>Choose Your Split</h1>
      <ul>
        <Button>
          {IntermediateSplitItem ? ( // this creates a sudo function that will help change the item to an error code if not fetching the data correctly
            <div>
              <p>Recomended: {IntermediateSplitItem.name}</p>
              <p>Time: {IntermediateSplitItem.time}</p>
            </div>
          ) : (
            <p>404 Error</p> // this will be a not found error code to track the split data not loading in properly
          )}
        </Button>
        <Button>
          {IntermediateSplitItem2 ? (
            <div>
              <p>Recomended: {IntermediateSplitItem2.name}</p>
              <p>Time: {IntermediateSplitItem2.time}</p>
            </div>
          ) : (
            <p>404 Error</p>
          )}
        </Button>
        <Button>
          {IntermediateSplitItem3 ? (
            <div>
              <p>Recomended: {IntermediateSplitItem3.name}</p>
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
  return (
    <div>
      <h1>Choose Your Split</h1>
      <ul>
        <Button>
          {AdvancedSplitItem ? ( // this creates a sudo function that will help change the item to an error code if not fetching the data correctly
            <div>
              <p>Recomended: {AdvancedSplitItem.name}</p>
              <p>Time: {AdvancedSplitItem.time}</p>
            </div>
          ) : (
            <p>404 Error</p> // this will be a not found error code to track the split data not loading in properly
          )}
        </Button>
        <Button>
          {AdvancedSplitItem2 ? (
            <div>
              <p>Recomended: {AdvancedSplitItem2.name}</p>
              <p>Time: {AdvancedSplitItem2.time}</p>
            </div>
          ) : (
            <p>404 Error</p>
          )}
        </Button>
        <Button>
          {AdvancedSplitItem3 ? (
            <div>
              <p>Recomended: {AdvancedSplitItem3.name}</p>
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
  return (
    <div>
      <h1>Choose Your Split</h1>
      <ul>
        <Button>
          {ExpertSplitItem ? ( // this creates a sudo function that will help change the item to an error code if not fetching the data correctly
            <div>
              <p>Recomended: {ExpertSplitItem.name}</p>
              <p>Time: {ExpertSplitItem.time}</p>
            </div>
          ) : (
            <p>404 Error</p> // this will be a not found error code to track the split data not loading in properly
          )}
        </Button>
        <Button>
          {ExpertSplitItem2 ? (
            <div>
              <p>Recomended: {ExpertSplitItem2.name}</p>
              <p>Time: {ExpertSplitItem2.time}</p>
            </div>
          ) : (
            <p>404 Error</p>
          )}
        </Button>
        <Button>
          {ExpertSplitItem3 ? (
            <div>
              <p>Recomended: {ExpertSplitItem3.name}</p>
              <p>Time: {ExpertSplitItem3.time}</p>
            </div>
          ) : (
            <p>404 Error</p>
          )}
        </Button>
        <Button>
          {ExpertSplitItem4 ? (
            <div>
              <p>Recomended: {ExpertSplitItem4.name}</p>
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
