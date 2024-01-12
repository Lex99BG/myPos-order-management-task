import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import './testimonials.css';
import testimonial1 from '../../assets/tmonial1.webp';
import testimonial2 from '../../assets/tmonial2.webp';
import testimonial3 from '../../assets/tmonial3.webp';
import testimonial4 from '../../assets/tmonial4.jpg';

interface Testimonial {
  image: string;
  name: string;
  title: string;
  text: string;
}

const testimonialsData: Testimonial[] = [
  {
    image: testimonial1,
    name: "Sarah Davis",
    title: "Web Developer",
    text: "As a passionate motorcycle rider, finding the right bike was crucial for me. I stumbled upon this dealership and was blown away by their dedication to quality. The motorcycle I purchased exceeded my expectations. It was evident they put immense effort into ensuring it was in top-notch condition. I've had the smoothest rides ever since, and I highly recommend this dealership for any rider seeking excellence.",
  },
  {
    image: testimonial2,
    name: "Lisa Cudrow",
    title: "Graphic Designer",
    text: "I recently bought a car from this dealership, and I couldn't be happier. The attention to detail and the rigorous inspection process they mentioned truly showed in the vehicle I received. It felt like driving a brand-new car off the lot. The peace of mind I have knowing they stand by their products is priceless. If you're looking for a reliable vehicle and exceptional service, this dealership is the place to go.",
  },
  {
    image: testimonial4,
    name: "Emily Rodriguez",
    title: "Small Business Owner",
    text: "My search for a reliable truck and trailer combo led me to this dealership. I was impressed by their commitment to quality assurance. The thoroughness of their inspections and the guarantee they provide gave me the confidence to make the purchase. The truck and trailer have been performing flawlessly, exactly as promised. I'm grateful for their dedication to ensuring customers drive away with the best products possible.",
  },
  {
    image: testimonial3,
    name: "David Anderson",
    title: "Construction Contractor",
    text: "I needed a trailer for my business and stumbled upon this dealership. Their attention to detail and commitment to quality blew me away. The trailer I purchased was not only in pristine condition but also underwent a meticulous inspection that reassured me of its reliability. It's been a game-changer for my business, and I have this dealership to thank for providing a top-notch product. If you're in the market for a dependable trailer, look no further than this dealership.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <MDBContainer fluid className="py-5 gradient-custom">
      <div className="container">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="12">
          <div className="text-center mb-4 pb-2">
            <MDBIcon fas icon="quote-left" size="3x" className="text-white" />
          </div>
          <MDBCard>
            <MDBCardBody className="px-4 py-5">
              <MDBCarousel showIndicators showControls dark>
                {testimonialsData.map((testimonial, index) => (
                  <MDBCarouselItem key={index}>
                    <MDBRow className="d-flex justify-content-center">
                      <MDBCol lg="10" xl="8">
                        <MDBRow>
                          <MDBCol lg="4" className="d-flex justify-content-center">
                            <img
                              src={testimonial.image}
                              className="rounded-circle shadow-1 mb-4 mb-lg-0"
                              alt={testimonial.name}
                              width="150"
                              height="150"
                            />
                          </MDBCol>
                          <MDBCol md="9" lg="7" xl="8" className="text-center text-lg-start mx-auto mx-lg-0">
                            <h4 className="mb-4">{testimonial.name} - {testimonial.title}</h4>
                            <p className="mb-0 pb-3">{testimonial.text}</p>
                          </MDBCol>
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCarouselItem>
                ))}
              </MDBCarousel>
            </MDBCardBody>
          </MDBCard>
          <div className="text-center mt-4 pt-2">
            <MDBIcon fas icon="quote-right" size="3x" className="text-white" />
          </div>
        </MDBCol>
      </MDBRow>
      </div>
    </MDBContainer>
  );
};

export default Testimonials;
