import React from 'react';
import { AuthProvider } from './Components/Firebase/AuthContext';
import Home from './Components/Home/Home'
import Signup from './Components/SignUp/Signup';
import WorkoutMaker from './Components/WorkoutMaker/Workoutmaker';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProtectedRoute from './Components/Firebase/ProtectedRoute';
import RedirectIfAuthenticated from './Components/Firebase/RedirectIfAuthenticated';
function App() { // change the routes to match the URL of the github deployment (start with /ProjectTrainEasy) //
  return (
    <Router>
      <AuthProvider>
      <Routes>
      <Route element={<RedirectIfAuthenticated />}>
            <Route path="/ProjectTrainEasy/SignUp" element={<Signup />} />
          </Route>
          <Route  element={<ProtectedRoute />}>
      <Route path='/Creator' element={<WorkoutMaker />}/>
      <Route path='/Home' element={<Home />}/>
      </Route>
      <Route path="*" element={<Navigate to="/ProjectTrainEasy/SignUp" />} />
      </Routes>
      </AuthProvider>
    </Router>

  
  );
}

export default App;
