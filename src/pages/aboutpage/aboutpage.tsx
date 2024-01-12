// about-page.tsx
import React from "react";
import "./aboutpage.css";
const AboutPage: React.FC = () => {
  return (
    <div className="container">
        <div className="row py-4 my-3">
          <div className="col-md-12 text-center">
            <h2 className="text-danger">Our Mission</h2>
            <p> At Auto<span className="text-danger">Nest</span>, our mission is to provide exceptional vehicles and unparalleled customer service. We aim to exceed expectations by offering meticulously inspected motorcycles, cars, trucks, and trailers that guarantee reliability and satisfaction for every customer. We're committed to ensuring that your driving experience is nothing short of exceptional.</p>
          </div>
        </div>
<hr />
        
        <div className="row my-3 py-4 align-items-center">
          <div className="col-md-6">
            <div className="image-wrapper-about">
              <div className="image-box-about"></div>
              <div className="image-box-about"></div>
              <div className="image-box-about"></div>
            </div>
          </div>

          <div className="col-md-6">
          <h2 className="text-danger">Our Story</h2>
            <p>Established in 2015, Auto<span className="text-danger">Nest</span> was born from a passion to revolutionize the vehicle-buying experience. Our journey began with a commitment to delivering quality vehicles, a commitment that has propelled us into a renowned dealership recognized for unwavering dedication to excellence. Over the years, we've stayed true to our promise, meticulously inspecting and repairing every vehicle, ensuring our customers drive away with utmost confidence.</p>
            <p>Auto<span className="text-danger">Nest</span> has evolved into a symbol of trust and reliability in the automotive industry. Every vehicle passing through our dealership meets and exceeds our stringent standards. Grounded in our founding principles of dedication and a relentless pursuit of excellence, our story is one of continual evolution, ensuring every AutoNest experience surpasses expectations.</p>
          </div>
        </div>
        <hr />
        <div className="row my-3 py-4 align-items-center">

      <div className="col-md-6">
        <h2 className="text-danger">Our Services</h2>
        <p>Thorough Vehicle Inspections: We meticulously inspect each motorcycle, car, truck, and trailer to ensure they meet our stringent quality standards before they reach our showroom.</p>
        <p>Repair and Maintenance: Our expert team performs necessary repairs and maintenance to ensure that each vehicle is in prime condition, providing a warranty guarantee for added peace of mind.</p>
        <p>Customer-Centric Approach: We prioritize your satisfaction by offering personalized assistance and guidance throughout the purchasing process, aiming to match you with the perfect vehicle.</p>
      </div>
<div className="col-md-6">
  <div className="image-wrapper-about">
    <div className="image-box-about-services"></div>
    <div className="image-box-about-services"></div>
    <div className="image-box-about-services"></div>
  </div>
</div>

</div>

<div className="row">
  <div className="col-md-12">
  <iframe className="googlemap shadow" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.332521363185!2d27.93288091512747!3d43.2234874791384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4543ef7683cfb%3A0xbb9c00bf3e90d5d1!2z0KLQtdGF0L3QuNGH0LXRgdC60Lgg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiAtINCS0LDRgNC90LA!5e0!3m2!1sbg!2sbg!4v1654961027809!5m2!1sbg!2sbg" width="600" height="450" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
	
  </div>
</div>


    </div>
  );
};

export default AboutPage;
