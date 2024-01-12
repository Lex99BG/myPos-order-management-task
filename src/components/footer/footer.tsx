
import './footer.css';
import logo from '../../assets/car.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
   <div className="container">
     <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    
     <ul className="nav col-md-4 justify-content-start">
      <li className="nav-item">
        <Link to="/" className="nav-link px-2 text-body-secondary">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link px-2 text-body-secondary">About</Link>
      </li>
      <li className="nav-item">
        <Link to="/products" className="nav-link px-2 text-body-secondary">Products</Link>
      </li>
    </ul>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
    <img src={logo} alt="Logo Car" className='img-fluid logo_img' />Auto<span>Nest</span>
    </a>

    

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3">
        <Link to="https://www.facebook.com/alper.kerim.3" className="text-body-secondary">
          <FontAwesomeIcon icon={faSquareFacebook} />
        </Link>
      </li>
      <li className="ms-3">
        <Link to="https://www.instagram.com/iamalperkyoseolu/" className="text-body-secondary">
          <FontAwesomeIcon icon={faSquareInstagram} />
        </Link>  
      </li>
      <li className="ms-3">
        <Link to="https://www.linkedin.com/in/alper-kyoseolu-7a510b215/" className="text-body-secondary">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link> 
      </li>
      <li className="ms-3">
        <Link to="tel:0886747088" className="text-body-secondary">
          <FontAwesomeIcon icon={faPhoneVolume} />
        </Link> 
      </li>
    </ul>
  </footer>
   </div>
  );
};
export default Footer;