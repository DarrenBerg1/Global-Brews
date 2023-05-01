import App from './App'
import MapPage from './pages/MapPage'
import UserPage from './pages/UserPage'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import CheckoutPage from './pages/CheckoutPage'
import ProductPage from './pages/ProductPage'
import RegisterPage from './pages/RegisterPage'
import { createHashRouter } from 'react-router-dom'


const router = createHashRouter([{

    path:'/',
    element: <App/>,
    // errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/map',
        element: <MapPage />,
        
      },
      {
        path: '/user',
        element: <UserPage />
      },
      { 
        path: '/products',
        element: <ProductPage />
      },
      {
        path: '/checkout',
        element: <CheckoutPage />
      },
      {
        path: '/register',
        element: <RegisterPage/>
      }
     ]

}])

export default router;
