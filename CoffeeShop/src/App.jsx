import { useEffect, useState, createContext } from 'react';
import { currUser, logOut } from './Utilities';
import { Outlet } from 'react-router-dom';
import {getToken} from "./components/CsrfToken";
import Header from "./components/Header";
import  CartProvider  from './components/ShoppingCartContext'
import './App.css';
import './index.css';

export const UserContext = createContext(null)

function App() {

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
  
    <CartProvider>
    <UserContext.Provider value={{user, setUser}}>
    <Header />
    <Outlet />
    </UserContext.Provider>
    </CartProvider>
  </> 
 
  
  )
}

export default App
