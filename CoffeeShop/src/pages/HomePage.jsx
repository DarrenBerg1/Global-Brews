import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
  


export default function HomePage(){

return (
  <>
  <div className='home-container'>
  {/* <div className="homePage">
    <img className="home-image" src="https://5.imimg.com/data5/SELLER/Default/2022/5/PH/UO/IE/106733722/irish-coffee-bean-500x500-500x500.jpg" alt="coffee bean photo"/>
   
  </div> */}
  <div className="home-text">
  <p>Welcome to our ecommerce coffee shop! We offer the world's top 5 coffee beans, carefully selected from different parts of the globe to bring you the best coffee experience possible. Our selection includes the bright and fruity Ethiopian Yirgacheffe, the full-bodied and chocolatey Colombian Supremo, the complex and earthy Sumatran Mandheling, the sweet and nutty Brazilian Santos, and the smooth and floral Costa Rican Tarrazu. Our beans are freshly roasted to perfection and delivered straight to your door, so you can enjoy the best coffee from around the world without leaving your home.</p>
  </div>
  <div className='home-product'>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://5.imimg.com/data5/SELLER/Default/2022/5/PH/UO/IE/106733722/irish-coffee-bean-500x500-500x500.jpg" height={280} width={280}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
        With a variety of blends and single-origin beans freshly roasted to perfection, our product page is your gateway to a world of coffee bliss – click now to explore!
        </Card.Text>
        <Link to={'/products'}>
        <Button variant="light" className='btn'>Life's too short for bad coffee, check out our products!</Button>
        </Link>
      </Card.Body>
    </Card>
  </div>
  </div>
  </>
)

}