import { useEffect, useState, createContext } from 'react'
import { currUser, logOut } from '../Utilities'
import {getToken} from '../components/CsrfToken'
import Signup from '../components/Signup'


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
    <Signup setUser={setUser}/>
    
    </div>
    </>
  )


}