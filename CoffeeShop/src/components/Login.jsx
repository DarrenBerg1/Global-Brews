import { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import { logIn } from "../Utilities"
import { UserContext } from "../App"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'


export default function LogIn(){

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const {user} = useContext(UserContext)
const {setUser} = useContext(UserContext)
console.log(email)
const isLoggedIn = !!user;
const handleLogout = () => {
  setUser(null);
};

return (
  <div className="signup-container">
    <Card>
    <Card.Body>
    {isLoggedIn ? (
            <div>
              <h3>Welcome, {user.name}</h3>
              {/* <Button variant="light" onClick={handleLogout}>
                Log Out
              </Button> */}
            </div>
          ) : (
            <h3>Sign In</h3>
          )}
  <Form onSubmit={(e) => [
      e.preventDefault(), 
      logIn(email, password, setUser), 
      setEmail(''), 
      setPassword('')
      ]}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
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
     Sign In
    </Button>
    <Link to={'/register'} >
     <Button variant="light" >Sign Up</Button>
    </Link>
  </Form>
  </Card.Body>
  </Card>
  </div>
);

}