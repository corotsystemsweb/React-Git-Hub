import React from 'react';
import Laptop from "../assets/images/p1.png";
import Monitor from "../assets/images/p2.png";
import CPU from "../assets/images/p3.png";
import Printer from "../assets/images/p4.png";
import Keyboard from "../assets/images/p5.png";
import Mouse from "../assets/images/p6.png";
import Headphone from "../assets/images/p7.png";
import Modem from "../assets/images/p8.png";

const OurProducts = () => {
  return (
    <>
       <div className="product">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="title">
                     <h2>our <strong className="black">products</strong></h2>
                     <span>We are able to provide quality parts and accessories at a fair price. We're building toward a leading source of both common and hard-to-find parts & accessories for the Laptop, Desktop, Server & Printers.</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="product-bg">
         <div className="product-bg-white">
         <div className="container">
            <div className="row">
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="product-box">
                     <i><img src={Laptop} alt="Laptop" /></i>
                     <h3>Laptop</h3>
                     <span>&#8377; 25000</span>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="product-box">
                     <i><img src={Monitor} alt="Monitor" /></i>
                     <h3>Monitor</h3>
                     <span>&#8377; 25000</span>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="product-box">
                     <i><img src={CPU} alt="CPU" /></i>
                     <h3>CPU</h3>
                     <span>&#8377; 25000</span>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="product-box">
                     <i><img src={Printer} alt="Printer" /></i>
                     <h3>Printer</h3>
                     <span>&#8377; 25000</span>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="product-box">
                     <i><img src={Keyboard} alt="Keyboard" /></i>
                     <h3>Keyboard</h3>
                     <span>&#8377; 25000</span>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="product-box">
                     <i><img src={Mouse} alt="Mouse" /></i>
                     <h3>Mouse</h3>
                     <span>&#8377; 25000</span>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="product-box">
                     <i><img src={Headphone} alt="Headphone" /></i>
                     <h3>Headphone</h3>
                     <span>&#8377; 25000</span>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="product-box">
                     <i><img src={Modem} alt="Modem" /></i>
                     <h3>Modem</h3>
                     <span>&#8377; 25000</span>
                  </div>
               </div>
               <div className="col-md-12">
                  <a className="read-more" href="/contact-us/">Contact us for more info</a>
               </div>
               </div>
            </div>
         </div>
      
      </div>
    </>
  )
}

export default OurProducts;
