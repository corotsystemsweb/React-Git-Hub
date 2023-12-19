import React from 'react';
import AboutImg from "../assets/images/about.png";
import PageTopBanner from '../components/PageTopBanner';

const Rent = () => {
  return (
    <>
    <PageTopBanner pageTitle={"Rent a Computer"} />
   <div class="about">
   <div class="container">
      <div class="row">
         <dir class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div class="about_box">
               <figure><img src={ AboutImg } alt="About Green Computers" /></figure>
            </div>
         </dir>
          <dir class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div class="about_box">
               <h3>Bangalore's No. 1 Computer Rentals & Service Providers</h3>
               <h2>Get The best price to Re a PC</h2>
               <p>We have PCs on monthly rent from Rs. 1000/- onward.<br /><br />

               We have laptops on rent from Rs.1200/- per month.<br /><br />

               The specifications define the rent that you pay. An entry level PC can be rented @ Rs.500/- per month. The specs of this suffices for basic data entry requirements. When you want a PC for rent. email us the specifications of the PC that you need along with the quantity and period of rental. We will get back to you with the exact rent for your specific need.<br /><br />

               Contact us for renting desktops, laptops,  Printers, tablets, smartphones, projectors, monitors etc.<br /><br />

               We rent computers-laptops & desktops, UPS, LCD Projectors, Security camera, monitors, tablets, mobiles etc<br /><br />

               We can rent our equipment for daily, weekly or monthly periods. We can even give you computers to use at our premises on hourly basis. Even workbooks or intel core i7 based desktops with 32gb memory and graphics cards are available for hourly rent.</p><br /><br />
            </div>
         </dir> 
      </div>
   </div>
</div>
</>
  )
}

export default Rent;
