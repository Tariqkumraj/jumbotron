/*
import './App.css';
import { Jumbotron } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
        <Jumbotron>
          <h1>Admin Dashboard</h1>
          </Jumbotron>     


    </div>
  );
}

export default App;
*/

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
  
import React from 'react';
  
  
export default function JumbotronExample() {
  return (
    <>
  
    
    <Jumbotron fluid>
      <Container>
        <h1>Fluid jumbotron !</h1>
        <p>
           This is a modified fluid jumbotron which
           stretches the whole horizontal space.    
        </p>
        <Button variant="success">
         Primary Button
        </Button>
      </Container>
    </Jumbotron>
    
    </>
  );
}