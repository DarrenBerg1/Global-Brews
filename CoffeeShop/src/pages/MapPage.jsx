import {GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'


function thisMap(){
  
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: "AIzaSyDlZ2oxXqnVzWunvcWbZ_YlHd_sZeEcZoM",
  });
  
  if (!isLoaded) return <div>Loading...</div>;
  return (<div className="map">
    <h1 className='coffee-title'>From Bean to Cup</h1>
    <p>The history of coffee cultivation and harvesting dates back centuries, and has played an integral role in shaping global trade and economies. Coffee is grown in countries around the world, with different varieties of beans producing unique flavors and aromas. The process of cultivating, harvesting, and processing coffee beans is complex and involves a wide range of factors, such as the climate, altitude, and soil quality of the region. Visiting the locations where coffee is harvested can be a fascinating and rewarding experience, as it allows you to see firsthand the intricate processes involved in producing this beloved beverage. Since not everyone is able to go visit in person, we have added a virtual map below that will allow you to explore coffee plantations and learn about the different regions where coffee is grown. From the lush green coffee plantations of Colombia to the rolling hills of Ethiopia, the virtual map offers a unique way to experience the rich cultural and historical traditions that have shaped the coffee industry. Exploring the unique flavors and characteristics of coffee from different regions is a fun and educational way to deepen your appreciation for this beloved beverage.</p>
    <p>Feel free to drop the "Yellow Person" onto any of the markers on the map to get an insight into how the coffee beans are harvested. Sometimes seeing how something that you use/ drink daily is created gives you more of an appreciation of the item and those that create it. Some recommended ones to view are Etheopia and Kenya. You can also click the square in the top right of the map, to view in fullscreen.</p>
    <h4 className='coffee-title'>About the Coffee</h4>
    <ul className='coffee-list'>
      <li>Jamaican Blue Mountain: Renowned for its mild flavor, lack of bitterness, and rich aroma, it is grown in the Blue Mountains of Jamaica at high elevations and with strict quality control measures.
      </li>
      <li>Hawaiian Kona: Known for its smooth and slightly sweet taste, Kona coffee is grown on the slopes of Mauna Loa volcano in Hawaii and is hand-picked and sun-dried.</li>
      <li>Ethiopian Yirgacheffe: A distinctively floral and fruity coffee with a bright acidity, it is grown in the Yirgacheffe region of Ethiopia, which has unique soil and climate conditions.</li>
      <li>Sumatra Mandheling: A full-bodied coffee with a rich, earthy flavor and low acidity, it is grown in the highlands of Sumatra, Indonesia and is known for its unique processing method, which involves a longer drying time.</li>
      <li>Colombian Supremo: A well-balanced coffee with a medium body, it is grown in the Andean region of Colombia and is known for its consistent quality and versatility.</li>
      <li>Costa Rican Tarrazu: A bright and crisp coffee with a clean taste and hints of fruit and chocolate, it is grown in the Tarrazu region of Costa Rica and is known for its strict regulations on production and processing.</li>
      <li>Kenyan AA: A bright and flavorful coffee with a strong acidity and hints of berry and citrus, it is grown in the high-altitude regions of Kenya and is known for its rigorous grading system.</li>
      <li>Guatemalan Antigua: Grown in the Antigua region of Guatemala, this coffee has a complex flavor profile with notes of chocolate, spice, and citrus, and is grown in volcanic soil at high elevations.</li>
      <li>Panama Geisha: A delicate and floral coffee with a complex flavor profile and high price tag, it is grown in the Boquete region of Panama and is highly sought-after by coffee connoisseurs.</li>
      <li>Tanzanian Peaberry: A smooth and bright coffee with a citrusy flavor and a hint of nuttiness, it is grown in the Mbeya region of Tanzania and is made from a rare type of coffee bean called a peaberry.</li>
      <li>Brazilian Santos: A low-acid coffee with a nutty and mild flavor profile, it is grown in the Cerrado region of Brazil and is known for its consistent quality and versatility.</li>
      <li>Ethiopian Sidamo: A rich and complex coffee with a smooth finish and notes of dark chocolate and berries, it is grown in the Sidamo region of Ethiopia and is processed using a unique wet method that enhances its natural flavors.</li>
    </ul>
    <br/>
    
    <br/>
    <div className='map-container'>
    <GoogleMap 
    zoom={4} 
    center={{lat: 41.8781, lng: -87.6298}}
    mapContainerClassName="map-container"
  >
    {/* "jamaica" */}
    <Marker
    position={{lat: 18, lng: -76.6354}}
    ></Marker>
    <Marker
    // 'Hawaii'
    position={{lat: 19.6448, lng: 203.9962}}
    ></Marker>
    <Marker
    // 'etheopia'
    position={{lat:  6.1070, lng: 38.4047}}
    ></Marker>
    <Marker
    // 'indonesia'
    position={{lat:  0.9652, lng: 99.5028}}
    ></Marker>
    <Marker
    // 'colombia'
    position={{lat:  4.5709, lng: -74.2973}}
    ></Marker>
    <Marker
    //costa rica
    position={{lat:  9.7682, lng: -83.6774}}
    ></Marker>
    <Marker
    // kenya
    position={{lat:  0.0236, lng: 37.9062}}
    ></Marker>
    <Marker
    // guatamala
    position={{lat:  14.5603, lng: -90.7339}}
    ></Marker>
    <Marker
    //panama
    position={{lat:  8.7864, lng: -80.7821}}
    ></Marker>
    <Marker
    // tanzania
    position={{lat:  -6.3690, lng: 34.8888}}
    ></Marker>
  </GoogleMap>
    </div> 
    </div>
  )
}
export default thisMap