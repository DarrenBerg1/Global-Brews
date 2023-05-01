import { Nav, Modal, Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from './ShoppingCartContext';
import CartItems from '../components/CartItems'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


function FillExample() {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  // console.log(cart.id)
  // console.log(cart.quantity)
  return (
    <>
    <Nav fill variant="tabs" className='navbar'>
      <Nav.Item>
        <Nav.Link href="/" style={{color: 'black'}}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/products" style={{color: 'black'}}>Products</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/map" style={{color: 'black'}}>Additional Information</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/user" style={{color: 'black'}}>Brew Crew</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      {/* as={Link} to="/" */}
        <Nav.Link style={{color: 'black'}} onClick={handleShow}>Shopping Cart ({productsCount} items)</Nav.Link>
      </Nav.Item>
    </Nav>
    <Modal show={show} onHide={handleClose} >
      <Modal.Header closeButton>
        <Modal.Title>Your perfect brew awaits you.</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {productsCount > 0 ?
                        <>
                            {/* <p>Items in your cart:</p>
                            
                            {cart.items.map((currentProduct, index) => (
                              
                                <CartItems key={index} id={currentProduct.id} quantity={currentProduct.quantity} ></CartItems>
                              
                            ))} */}
                         
                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                            <Link to={'/checkout'}>
                            <Button variant="success" onClick={handleClose}>Checkout</Button>
                            </Link>
                        </>
                    :
                        <h6>"Our coffee cartographers scoured the world for the perfect beans, but alas, it seems your shopping cart is as empty as a caffeine-free Monday morning. Time to refill, friend!"</h6>
                    }        
      </Modal.Body>
    </Modal>
    </>
  );
}

export default FillExample;