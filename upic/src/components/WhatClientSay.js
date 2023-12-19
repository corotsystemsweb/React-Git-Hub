import React from 'react';
import ClientFirst from "../assets/images/client1.png";
import ClientSecond from "../assets/images/client2.png";
import ClientThird from "../assets/images/client3.png";

const WhatClientSay = () => {
  class Customer{
    constructor(name, date, quote){
      this.name = name;
      this.date =  date;
      this.quote = quote;
    }
    getMsg(){
      return `${this.name}, ${ this.date}, ${ this.quote}`
    }
  }
let customer1 = new Customer("sam", 2020, "I am a nice guy");

console.log(customer1.getMsg());

  return (
    <>
         <div className="Clients_bg_white">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="title">
                        <h3>What Clients Say?</h3>
                     </div>
                  </div>
               </div>
               <div id="client_slider" className="carousel slide banner_Client" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#client_slider" data-slide-to="0" className="active"></li>
          <li data-target="#client_slider" data-slide-to="1"></li>
          <li data-target="#client_slider" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="carousel-caption text-bg">
               <div className="img_bg">
                  <i><img src={ClientSecond} alt="Client Feedback" /><span>Mrs. Pornima, CEO - Miller Group<br /><strong className="date">12/02/2021</strong></span></i>
                  
               </div>
                
                <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.<br />
                You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. </p>
                
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="carousel-caption text-bg">
                <div className="img_bg">
                  <i><img src={ClientFirst} alt="Client Feedback" /><span>Rakesh Kumar<br /><strong className="date">22/15/2021</strong></span></i>
                  
               </div>
                <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.<br />
                You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am </p>
                
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="carousel-caption text-bg">
                 <div className="img_bg">
                  <i><img src={ClientThird} alt="Client Feedback" /><span>Raghuveer Shiva<br /><strong className="date">15/05/2022</strong></span></i>
                  
               </div>
                <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.<br />
                You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am </p>
               
              </div>
            </div>
          </div>
        </div>
        
      </div>

            </div>
         </div>
    </>
  )
}

export default WhatClientSay;
