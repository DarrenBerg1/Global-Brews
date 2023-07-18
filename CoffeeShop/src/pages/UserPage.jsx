import { useEffect, useState, createContext } from 'react'
import { currUser, logOut,delete_user } from '../Utilities'
import {getToken} from '../components/CsrfToken'
import Button from 'react-bootstrap/Button'
import Login from '../components/Login'



export const UserContext = createContext(null)

export default function LogOut(){
  const [user, setUser] = useState(null)

  useEffect(() => {

    const getCurrUser = async() => {
      setUser(await currUser())
    };
    getCurrUser()
  }, []);

  useEffect(() => {
    
    getToken()

  }, [user]);


  return (
    <>
     
    <div className='userpage-container'>
      <Login />
      
    <Button variant="dark" type="submit" onClick={() => logOut(setUser)} className='logout-btn'>
     SIGN OUT
    </Button>
    <Button variant='dark' type='submit' onClick={() => delete_user(setUser)} className='logout-btn'>
      DELETE ACCOUNT
    </Button>
    </div>
    </>
  )


}