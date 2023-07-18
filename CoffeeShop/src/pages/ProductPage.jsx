// import { useContext } from 'react';
import { productsArray, getProductData } from '../components/Inventory';
import {Row, Col} from 'react-bootstrap'; 
// import  CartContext  from '../components/ShoppingCartContext'
import ProductCard from '../components/ProductCard';

export default function ProductPage(){
 
return (
  <>
  
  <div className='product-container'>
    <div className='products-text'>
  <h1>Welcome to our premium coffee bean collection! </h1>
  <p>Our carefully selected top-tier coffee beans are sourced from the world's most renowned coffee-growing regions, ensuring the perfect balance of flavor, aroma, and body. Adding these beans to your cart is like adding fuel to your coffee-loving soul - with every click, you're one step closer to the perfect cup of joe! Our selection includes a variety of blends and single-origin beans, each with its unique flavor profile. Whether you prefer a light, medium, or dark roast, our coffee beans are freshly roasted to perfection, providing you with a rich and flavorful coffee experience. So, what are you waiting for? Get ready to add some beans to your cart and brew up a storm! </p>
  </div>
    <div className='product-page'>
    <Row>
    {productsArray.map((product, index) => (
    <Col key={index}>
      <ProductCard product={product}/>
    </Col>
    ))}
  </Row>
  </div>
  </div>
  </>
)

}