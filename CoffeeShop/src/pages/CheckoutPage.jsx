import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {Form, Card} from 'react-bootstrap'
// import { CartContext } from "../components/ShoppingCartContext";
// import { useContext } from "react";
// import  getProductData from '../components/ShoppingCartContext'

export default function checkoutPage (){



  return (
    <>
    <div className="checkout-container">
      <div className="checkout-size">
        <Card>
        <Card.Body>
        <h3>Checkout:</h3>
      {/* <Form > 
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="address" placeholder="Enter Street" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="city" placeholder="Enter city" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="state" placeholder="Enter State" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="zipcode" placeholder="Enter zipcode" />
        </Form.Group> */}
        <div className="paypal">
        <PayPalScriptProvider options={{ "client-id": "Ac1msv37xJBEUz-6N8HVPrSQqDTwmaUIKeUiDm84mHJzM5e08ZtawjRfLBScpDIk_6r5J13X7jx5YNjr" }}>
            <PayPalButtons style={{ layout: "vertical" }} createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                  value: '120.00',
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                        window.location.reload();
                    });                   
                }} />              
        </PayPalScriptProvider>
        </div>
      {/* </Form> */}
      </Card.Body>
      </Card>
      </div>
      </div>
      </>
  
  )
  
}

// onSubmit={(e) => 
//   [e.preventDefault(), 
//   signUp(name, email, password),
//   setEmail(''), setName(''), 
//   setPassword('') 
//    ]}

// value={address} 
//     onChange={(e) => setName(e.target.value)}

// value={city} 
// onChange={(e) => setEmail(e.target.value)}