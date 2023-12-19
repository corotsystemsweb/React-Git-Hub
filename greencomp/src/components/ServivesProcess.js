import React from 'react';
import FastService from "../assets/icon/service1.png";
import SecurePayment from "../assets/icon/service2.png";
import ExpetTeam from "../assets/icon/service3.png";
import AffordableService from "../assets/icon/service4.png";
import Warrenty from "../assets/icon/service5.png";
import CustomerFirst from "../assets/icon/service6.png";

const ServivesProcess = () => {
  return (
    <>
      <div className="service">
         <div className="container">
            <div className="row">
               <div className="col-md-8 offset-md-2">
                  <div className="title">
                     <h2>Service <strong className="black">Process</strong></h2>
                     <span>Easy and effective way to get your device repair</span>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="service-box">
                     <i><img src={FastService} alt="Fast service" /></i>
                     <h3>Fast service</h3>
                     <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="service-box">
                     <i><img src={SecurePayment} alt="Secure payments" /></i>
                     <h3>Secure payments</h3>
                     <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="service-box">
                     <i><img src={ExpetTeam} alt="Expet Team" /></i>
                     <h3>Expert team</h3>
                     <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="service-box">
                     <i><img src={AffordableService} alt="Affordable Service" /></i>
                     <h3>Affordable services</h3>
                     <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="service-box">
                     <i><img src={Warrenty} alt="warranty" /></i>
                     <h3>90 Days warranty</h3>
                     <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="service-box">
                     <i><img src={CustomerFirst} alt="Customer First" /></i>
                     <h3>Customer First</h3>
                     <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default ServivesProcess;
