import React from 'react';
import Home from './Components/Home/Home'
import Signup from './Components/SignUp/Signup';
import WorkoutMaker from './Components/WorkoutMaker/Workoutmaker';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Signup />}/>
      <Route path='/Creator' element={<WorkoutMaker />}/>
      <Route path='/Home' element={<Home />}/>
      </Routes>
    </Router>

  
  );
}

export default App;
