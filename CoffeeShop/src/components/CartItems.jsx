// import Button from 'react-bootstrap/Button';
// import  {CartContext}  from './ShoppingCartContext';
// import { useContext } from "react";
import  getProductData from './ShoppingCartContext'
import CheckoutPage from '../pages/CheckoutPage';

function CartProduct(props) {
    // const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    // console.log((quantity * productData.price).toFixed(2) )

    const   total = (quantity * productData.price).toFixed(2)

    return (
        
        <>
            <CheckoutPage myProp= {total}/>
            {/* <h3>{productData.title}</h3>
            <p>{quantity} total</p> */}
            <p>${ total }</p>
            {/* <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button> */}
            <hr></hr>
        </>
    )
}

export default CartProduct;