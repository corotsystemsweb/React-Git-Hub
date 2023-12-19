import React from 'react';
import PhoneCall from "../assets/icon/call.png";

const RequestAFreeQuote = () => {
  return (
    <>
       <div className="container">
            <div className="yellow_bg">
            <div className="row">
               <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                  <div className="yellow-box">
                     <h3>REQUEST A FREE QUOTE<i><img src={PhoneCall} alt="call us" /></i></h3>
                     
                     <p>Get answers for your any computer hardware queries ! <br /> Email : greencomp.in@gmail.com</p>
                  </div>
               </div>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                  <div className="yellow-box">
                     <a href="#">Call Now <br />9886658489
                     </a>
                  </div>
               </div>
            </div>
         </div><br /><br /><br />
         </div>
    </>
  )
}

export default RequestAFreeQuote;
