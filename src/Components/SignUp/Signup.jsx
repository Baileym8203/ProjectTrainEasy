import React, {useState} from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from "../Firebase/firebase-config";
import { useNavigate } from "react-router-dom";



function Signup() {
  
  const [email, setEmail] = useState(''); // all the state change variables that track to ensurew a password being created and email
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const auth = getAuth(app);
  const navigate = useNavigate(); // this function allows the user to navigate to the workoutmaker function of the application


 
    const handleSignUp = (e) => { // This will send the user to the route /creator entering the workoutmaker function as well as sign up The user to TrainEz
      e.preventDefault();
      setError(null);
      setMessage(null);
      

      const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // this will make sure the user is typing an actual email rather than random characters
        return re.test(String(email).toLowerCase());
      };
    
      if (email === '' || password === '') {
        setError('Both email and password are required'); // ensures the user is typing in a email as well as password to create their user
        return;
      }

      if (!validateEmail(email)) {
        setError('Invalid email format'); // if the email typed doesn't match the specifications laid out in ValidateEmail function when clicking sign up it will return Invalid email format
        return;
      }

      try { // will try to run the email and password the user created if an error occures catch will give an error
        createUserWithEmailAndPassword(auth, email, password);
        setMessage('User created successfully!');
        navigate('/Creator');
      } catch (error) {
        setError(error.message);
      }
    };

  return (
    <Container fluid className="d-flex flex-column align-items-center">
      <Row className="mt-3">
      <Form onSubmit={handleSignUp}>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control  type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      </Form.Group>
    </Form>
          </Row>
      <Button type="submit" onClick={handleSignUp} className="mt-3">Sign Up</Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </Container>
  );
}

export default Signup;
