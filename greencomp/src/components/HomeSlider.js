import React from 'react';
import SliderImg1 from "../assets/images/banner1.jpg";
import SliderImg1Mob from "../assets/images/banner1-mobile.jpg";
import SliderImg2 from "../assets/images/banner2.jpg";
import SliderImg2Mob from "../assets/images/banner2-mobile.jpg";
import SliderImg3 from "../assets/images/banner3.jpg";
import SliderImg3Mob from "../assets/images/banner3-mobile.jpg";

const HomeSlider = () => {
  return (
   
    <section className="slider_section">
    <div id="main_slider" className="carousel slide banner-main" data-ride="carousel">

       <div className="carousel-inner">
          <div className="carousel-item active">
             <picture>
               <source media="(max-width: 650px)" srcset={SliderImg1Mob} />
               <source media="(max-width: 465px)" srcset={SliderImg1Mob} />
               <img className="first-slide"  src={SliderImg1} alt="First slide" />
            </picture>
             <div className="container">
                <div className="carousel-caption relative">
                   <h1>Laptop <br /> <strong className="black_bold">Desktop </strong><br />
                      <strong className="yellow_bold">Network</strong></h1>
                   <p>&nbsp;</p>
                   
                </div>
             </div>
          </div>
          <div className="carousel-item">
          <picture>
               <source media="(max-width: 650px)" srcset={SliderImg2Mob} />
               <source media="(max-width: 465px)" srcset={SliderImg2Mob} />
               <img className="second-slide" src={SliderImg2} alt="Second slide" />
            </picture>
            
             <div className="container">
                <div className="carousel-caption relative">
                </div>
             </div>
          </div>
          <div className="carousel-item">
          <picture>
               <source media="(max-width: 650px)" srcset={SliderImg3Mob} />
               <source media="(max-width: 465px)" srcset={SliderImg3Mob} />
               <img className="third-slide"  src={SliderImg3} alt="Third slide" />
            </picture>
            
             <div className="container">
                <div className="carousel-caption relative">
                   <br />
                </div>
             </div>
          </div>

       </div>
       <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
       <i className='fa fa-angle-right'></i>
       </a>
       <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
       <i className='fa fa-angle-left'></i>
       </a>
       
    </div>

 </section>

  )
}

export default HomeSlider;
