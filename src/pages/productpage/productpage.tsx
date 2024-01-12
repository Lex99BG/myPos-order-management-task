// landing-page.tsx
import React from "react";
import "./productpage.css";
import superCar from '../../assets/favpng_bmw-5-series-bmw-3-series-car-bmw-x1.png';
import motorcycle from '../../assets/motorcycle-7185571_1280.png';
import truck from '../../assets/mercedes-truck.png';
import trailer from '../../assets/trailer-product.png';
import { Link } from "react-router-dom";

const ProductPage: React.FC = () => {
  return (
    <div className="container">

        <div className="row align-items-center my-2 py-2">
          <div className="col-md-6">
              <img src={motorcycle} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>Explore the Thrill of Riding</h2>
            <p>Embark on a journey of exhilaration and freedom with our exceptional range of motorcycles. Immerse yourself in the pure joy of riding, where every twist of the throttle opens up new horizons. Our carefully curated collection combines cutting-edge design, advanced technology, and powerful performance.</p>
            <p>Whether you're a seasoned rider or a passionate enthusiast, our motorcycles deliver an unparalleled experience. Discover the perfect blend of style, speed, and precision that defines the essence of two-wheeled adventure.</p>
            <Link to="/motorcycles" className="btn btn-outline-danger">Explore Motorcycles</Link>
          </div>
        <hr className="mt-3"/>
        </div>

        <div className="row align-items-center my-2 py-2">
          <div className="col-md-6">
              <img src={superCar} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>Experience Luxury and Performance</h2>
            <p>Indulge in the epitome of automotive excellence with our exquisite collection of cars. Immerse yourself in the seamless blend of luxury, cutting-edge technology, and unmatched performance. Each model is a masterpiece, meticulously designed to redefine your driving experience.</p>
            <p>From sleek sedans to powerful SUVs, our lineup showcases a harmonious fusion of style and innovation. Explore a world where every detail is crafted for perfection, where comfort meets sophistication, and where the open road becomes your playground.</p>
            <Link to="/cars" className="btn btn-outline-danger">Discover Cars</Link>
          </div>
        <hr className="mt-3"/>
        </div>

        <div className="row align-items-center my-2 py-2">
          <div className="col-md-6">
              <img src={truck} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>Powerful and Reliable Trucks for Every Need</h2>
            <p>Unleash the power of reliability with our robust lineup of trucks. Designed to handle the toughest challenges, our trucks deliver exceptional performance in any terrain. Explore a world of versatility, durability, and power for all your transportation needs.</p>
            <p>Whether you're navigating urban landscapes or conquering off-road terrain, our trucks deliver exceptional performance, durability, and reliability. Each model is engineered to meet the demands of your lifestyle, ensuring a seamless blend of power and versatility.</p>
            <Link to="/trucks" className="btn btn-outline-danger">Discover Trucks</Link>
          </div>
        <hr className="mt-3"/>
        </div>

        <div className="row align-items-center my-2 py-2">
          <div className="col-md-6">
              <img src={trailer} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>Explore Our Versatile Trailer Collection</h2>
            <p>Discover our diverse range of trailers designed to handle a variety of loads with ease. Our trailers are crafted with precision and expertise, ensuring reliability and durability in every journey.</p>
            <p>Whether you're transporting goods, equipment, or recreational gear, our trailers are built to meet your hauling needs. Each model is meticulously designed for maximum efficiency, promising a smooth and secure hauling experience.</p>
            <Link to="/trailers" className="btn btn-outline-danger">Explore Trailers</Link>
          </div>
        <hr className="mt-3"/>
        </div>
    </div>
  );
};

export default ProductPage;
