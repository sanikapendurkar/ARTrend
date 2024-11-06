import React from 'react';
import './HeaderFooter';
import '../Home.css';
import jewellery from '../jewellery.jpg';
import boots from '../boots.jpg';
import headwear from '../headwear.jpg';

const Home = () => {
return (
  <div className="main-content">
      {/* Main Content */}
        <div className="product-layout">
          <div className="product-image">
            <img src={jewellery} alt="Jewellery" />
          </div>
          <div className="product-text background-one">
            <div className="product-title">
              <div>Top it off</div>
              <div>In Style</div>
            </div>
          </div>
        </div>
        <div className="product-layout">
          <div className="product-text background-two">
            <div className="product-title">See the <br /> World<br />Your Way</div>
          </div>
          <div className="product-image">
            <img src={boots} alt="Footwear" />
          </div>
        </div>
        <div className="product-layout">
          <div className="product-image">
            <img src={headwear} alt="Headwear" />
          </div>
          <div className="product-text background-one">
            <div className="product-title">Carry Your Style</div>
          </div>
        </div>
      </div>
  );
};

export default Home;
