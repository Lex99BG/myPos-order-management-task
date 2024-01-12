// landing-page.tsx
import React from "react";
import "./landingpage.css";
import ServiceCard from "../../components/services-cards/servicecards";
import Testimonials from "../../components/testimonials/testimonials";
import ContactBanner from "../../components/contact-banner/contact-banner";

const LandingPage: React.FC = () => {
  return (
    <div>
        <br />
        <ServiceCard/>
        <br />
        <div className="container">
        <div className="row my-3 py-4 align-items-center">
          <div className="col-md-6">
            <div className="image-wrapper">
              <div className="image-box"></div>
              <div className="image-box"></div>
              <div className="image-box"></div>
            </div>
          </div>

          <div className="col-md-6">
          <h2>Our DealerShip</h2>
            <p>
            At our dealership, we strive to exceed expectations and ensure your satisfaction.
            Whether it's a motorcycle, car, truck, or trailer, we're here to fulfill your needs with quality service and a commitment to your driving pleasure.
            Get in touch with us today and let's embark on this journey together towards your ideal ride.
            </p>
            <ul>
              <li>Experience Customized Vehicle Solutions!</li>
              <li>Trust in Our Excellence for Your Perfect Ride!</li>
              <li>Order with Confidence, Drive with Assurance!</li>
            </ul>
            <p>Discover your perfect vehicle with us. We're here to make your driving dreams a reality. Get in touch today and let's find your ideal ride together!</p>
          </div>
        </div>
        <hr />
      </div>
        
      <div className="container">
        <div className="row my-3 py-4 align-items-center">
          <div className="col-md-6">            
          <h2>Our Products</h2>
            <p>
                Welcome to our collection of exceptional vehicles.
                At our dealership, we prioritize excellence in every motorcycle, car, truck, and trailer we offer.
                Our commitment to your satisfaction begins with a meticulous selection process and extends through thorough inspections and repairs.
            </p>
            <ul>
                <li>Experience Unparalleled Quality in Every Vehicle!</li>
                <li>Trust in Our Comprehensive Inspection Procedures!</li>
                <li>Drive Away Confidently with Our Assurance Guarantee!</li>
            </ul>
            <p>
                Discover the perfect motorcycle, car, truck, or trailer with us. We carefully examine each product to ensure it meets our stringent standards, repairing any issues to provide a guarantee of reliability. Your ideal ride awaits – contact us today, and let's match you with the perfect vehicle!
            </p>          
          </div>
          <div className="col-md-6">
            <div className="image-wrapper">
              <div className="image-box-product"></div>
              <div className="image-box-product"></div>
              <div className="image-box-product"></div>
            </div>
          </div>

        </div>
      </div>

      <Testimonials />
      <ContactBanner />
    </div>
  );
};

export default LandingPage;
