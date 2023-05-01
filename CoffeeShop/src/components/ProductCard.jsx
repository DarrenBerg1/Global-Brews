import {Button, Card, Form, Col, Row} from 'react-bootstrap/';
import { useContext } from 'react';
import { CartContext } from './ShoppingCartContext';
// import { Link } from 'react-router-dom';

export default function ProductCard(props) {
  const product = props.product;
  // console.log(Array.isArray(product))
  // console.log(typeof product.price)
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  // console.log(cart.items);
  return (
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} height={280} width={280}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          ${product.price}
        </Card.Text>
        { productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button variant='success' sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                <Button variant='danger' sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="light" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
                    </>
                    :
                    <Button variant="light" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
                }
      </Card.Body>
    </Card>
  )
}
