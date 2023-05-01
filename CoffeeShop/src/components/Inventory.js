const productsArray =[    
  {        
    "id": 1,
    'image': 'https://cdn.shopify.com/s/files/1/0043/8714/3773/products/GCT_-_1JBM_New_bag_700x.jpg?v=1549425150',
    "name": "Jamaican Blue Mountain", 
    "price": 30.00    
    },
    { 
    "id": 2,
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLfvmf68ZT4-ug-APUWguUTn384dS3tXGi5A&usqp=CAU',
    "name": "Hawaiian Kona",
    "price": 25.00
    },
    { 
    "id": 3,
    'image': 'https://cdn.shopify.com/s/files/1/1849/4929/products/DSC05119_grande.jpg?v=1493823712',
    "name": "Ethiopian Yirgacheffe",
    "price": 20.00
    },
    {
    "id": 4,
    'image': 'https://m.media-amazon.com/images/I/51t54fUkGGL.jpg',
    "name": "Colombian Supremo",
    "price": 18.00
    },
    { 
    "id": 5,
    'image': 'https://static.wixstatic.com/media/2f4e1b_f3ad6aa07bd64b1eaccac549186729ea~mv2.jpg/v1/fill/w_900,h_900,al_c,q_85/2f4e1b_f3ad6aa07bd64b1eaccac549186729ea~mv2.jpg',
    "name": "Panama Geisha",
    "price": 40.00
    },
    { 
    "id": 6,
    'image': 'https://bestqualitycoffee.s3.us-east-2.amazonaws.com/wp-content/uploads/2016/09/24013420/cafe-britt-costa-rican-tarrazu-montecielo-blend-mediumroast-coffee-12oz.jpg',
    "name": "Costa Rican Tarrazu",
    "price": 16.00
    },
    {
    "id": 7,
    'image': 'https://cdn.shopify.com/s/files/1/0622/9665/4065/products/Guatemala_Antigua-bag.jpg?v=1654280694',
    "name": "Guatemalan Antigua",
    "price": 18.00
    },
    {
    "id": 8,
    'image': 'https://cdn.shopify.com/s/files/1/1200/8318/products/Capture_600x.PNG?v=1564395461',
    "name": "Tanzanian Peaberry",
    "price": 22.00
    },
    {
    "id": 9,
    'image': 'https://cdn.shopify.com/s/files/1/0622/9665/4065/products/Kenya_AA-bag.jpg?v=1654199019',
    "name": "Kenyan AA",
    "price": 24.00
    },
    {
    "id": 10,
    'image': 'https://www.kroger.com/product/images/large/front/0001111001518',
    "name": "Sumatra Mandheling",
    "price": 19.00
    },
    {
    "id": 10,
    'image': 'https://dazbog.com/wp-content/uploads/2016/09/0000188_brazil-santos-3.jpeg',
    "name": "Brazilian Santos",
    "price": 16.00
    },
    {
    "id": 10,
    'image': 'https://assets.sainsburys-groceries.co.uk/gol/6909628/1/640x640.jpg',
    "name": "Ethiopian Sidamo",
    "price": 25.00
    }
]

function getProductData(id) {
  let productData = productsArray.find(product => product.id === id);

  if (productData == undefined){
    console.log('Product data does not exist for this ID')
    return undefined;
  }

  return productData;
}


export { productsArray, getProductData };