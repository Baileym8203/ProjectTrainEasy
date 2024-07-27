import React from 'react';
import Home from './Components/Home/Home'
import Signup from './Components/SignUp/Signup';
import WorkoutMaker from './Components/WorkoutMaker/Workoutmaker';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() { // change the routes to match the URL of the github deployment (start with /ProjectTrainEasy) //
  return (
    <Router>
      <Routes>
      <Route path='/ProjectTrainEasy' element={<Signup />}/>
      <Route path='/Creator' element={<WorkoutMaker />}/>
      <Route path='/Home' element={<Home />}/>
      </Routes>
    </Router>

  
  );
}

export default App;
