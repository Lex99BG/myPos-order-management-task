import Carousel from 'react-bootstrap/Carousel';
import CarouselImageOne from '../../assets/headerbg1.jpg';
import CarouselImageTwo from '../../assets/headerbg2.jpg';
import CarouselImageThree from '../../assets/headerbg3.jpg';
import CarouselImageFour from '../../assets/headerbg4.jpg';
import './headerslider.css';
function HeaderSlider() {
     
  return (
    <Carousel indicators={true} >
      <Carousel.Item>
        <img
            className="img-fluid header_image"
            src={CarouselImageOne}  
            alt="First slide"
            style={{ objectPosition: 'top' }}
          />
        <Carousel.Caption>
        <h1>Discover Our Car Selection</h1>
        <p>Get behind the wheel of quality cars suited to your lifestyle. From sleek sedans to spacious SUVs, find the ideal vehicle that meets your needs.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            className="img-fluid header_image"  
            src={CarouselImageTwo}  
            alt="First slide"
            style={{ objectPosition: '50% 30%' }}
          />
        <Carousel.Caption>
        <h1>Welcome to Our Motorcycle Collection</h1>
        <p>Explore our diverse range of motorcycles designed for performance, style, and adventure. Find your perfect ride among our selection of top-notch bikes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            className="img-fluid header_image"  
            src={CarouselImageThree}  
            alt="First slide"  
          />
        <Carousel.Caption>
        <h1>Explore Our Truck Inventory</h1>
        <p>Find the power, reliability, and capability you need in our collection of trucks. Whether for work or play, discover trucks built for every task.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            className="img-fluid header_image"  
            src={CarouselImageFour}  
            alt="First slide"
            style={{ objectPosition: '30% 66%' }} 
          />
        <Carousel.Caption>
        <h1>Check Out Our Trailer Lineup</h1>
        <p>From heavy-duty haulers to versatile trailers, explore our range designed to handle diverse loads. Find the perfect trailer for your transportation needs.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeaderSlider;