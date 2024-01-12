import Card from 'react-bootstrap/Card';
import motorcycle from '../../assets/motorcycle.png';
import car from '../../assets/car.png';
import truck from '../../assets/truck.png';
import trailer from '../../assets/trailer.png';
import './servicecards.css';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

const serviceData = [
  {
    image: motorcycle,
    title: 'Selecting the right Motorcycle',
    description: "Our guide assists in finding a motorcycle that resonates with your style and spirit of adventure. Let's ride together!",
    link: '/motorcycles',
  },
  {
    image: car,
    title: 'Discovering Your Ideal Automobile',
    description: 'Choosing the perfect car is a personal journey. Our guide helps you find a vehicle that matches your style and spirit of adventure.',
    link: '/cars',
  },
  {
    image: truck,
    title: 'Unveiling Your Perfect Truck',
    description: 'Choosing the perfect truck is a personal journey. Our guide helps find one that matches your style and adventure.',
    link: '/trucks',
  },
  {
    image: trailer,
    title: 'Unlocking Your Ideal Trailer',
    description: 'Selecting a work-ready trailer is personal. Our guide assists in finding a trailer that matches your style and adventure.',
    link: '/trailers',
  },
];

function ServiceCard() {
  return (
    <div className="container">
      <Row lg={4} md={2} xs={1} className='gx-2 gy-2'>
        {serviceData.map((service, index) => (
          <Col key={index}>
            <Card className='shadow' style={{ border: '1px solid #dee2e6', borderRadius: '5px' }}>
              <Card.Img className='service-card-img' variant="top" src={service.image} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Card.Footer style={{ background: '#fff' }}>
                  <Link className="btn btn-md btn-outline-danger w-100" to={service.link}>Shop Now</Link>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ServiceCard;
