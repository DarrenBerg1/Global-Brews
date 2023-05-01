import { useState } from "react"
import { signUp } from "../Utilities"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'

export default function SignUp(){
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
  
    return (
      <div className="signup-container">
        <Card>
        <Card.Body>
        <h3>Sign Up</h3>
      <Form onSubmit={(e) => 
       [e.preventDefault(), 
       signUp(name, email, password),
       setEmail(''), setName(''), 
       setPassword('') 
        ]}> 
        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" value={name} 
    onChange={(e) => setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} 
    onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" value={password} 
    onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        
        <Button variant="light" type="submit">
         Sign Up
        </Button>
      </Form>
      </Card.Body>
      </Card>
      </div>
    );
  }
  
 