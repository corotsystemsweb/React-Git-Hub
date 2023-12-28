import React, { useEffect } from 'react';
import PageTopBanner from '../components/PageTopBanner';
import Gallery1 from '../assets/images/gallery-1.jpg';
import Gallery2 from '../assets/images/gallery-2.jpg';
import Gallery3 from '../assets/images/gallery-3.jpg';
import Gallery4 from '../assets/images/gallery-4.jpg';
import Gallery5 from '../assets/images/gallery-5.jpg';
import Gallery6 from '../assets/images/gallery-6.jpg';
import Gallery7 from '../assets/images/gallery-7.jpg';
import Gallery8 from '../assets/images/gallery-8.jpg';
import Gallery9 from '../assets/images/gallery-9.jpg';
import Gallery10 from '../assets/images/gallery-10.jpg';
import Gallery11 from '../assets/images/gallery-11.jpg';
import Gallery13 from '../assets/images/gallery-13.jpg';
import Gallery14 from '../assets/images/gallery-14.jpg';
import Gallery15 from '../assets/images/gallery-15.jpg';
import Gallery16 from '../assets/images/gallery-16.jpg';
import Gallery17 from '../assets/images/gallery-17.jpg';
import Gallery18 from '../assets/images/gallery-18.jpg';
import Gallery19 from '../assets/images/gallery-19.jpg';
import Gallery20 from '../assets/images/gallery-20.jpg';
const PhotoGallery = () => {
   useEffect(() =>{
      document.title = "Photos of Uday Pratap Inter College"
   },[])
   return (
      <>
         <PageTopBanner pageTitle={"Photo Gallery"} />
         <section className='mt5 mb-5'>
            <div className='container pb-3'>
               <div className="row">
                  <div className="col-md-12 text-center">
                     <h2 className='page-head'>Photo Gallery</h2>
                     <p>Welcome to the Course Page of Uday Pratap Inter College, where academic excellence meets holistic education.
                        Explore our diverse range of courses designed to nurture intellectual curiosity,
                        foster critical thinking, and empower students with the knowledge and skills necessary for a dynamic future.
                     </p>
                  </div>

               </div>
            </div>
            <div class="container">
               <div class="row">
                  <div class="column">
                     <img src={Gallery1} alt='Gallary Images' />
                     <img src={Gallery2} alt='Gallary Images' />
                     <img src={Gallery3} alt='Gallary Images' />
                     <img src={Gallery4} alt='Gallary Images' />
                     <img src={Gallery5} alt='Gallary Images' />
                  </div>
                  <div class="column">
                     <img src={Gallery6} alt='Gallary Images' />
                     <img src={Gallery7} alt='Gallary Images' />
                     <img src={Gallery8} alt='Gallary Images' />
                     <img src={Gallery9} alt='Gallary Images' />
                     <img src={Gallery10} alt='Gallary Images' />
                  </div>
                  <div class="column">
                     <img src={Gallery11} alt='Gallary Images' />
                     <img src={Gallery13} alt='Gallary Images' />
                     <img src={Gallery14} alt='Gallary Images' />
                     <img src={Gallery15} alt='Gallary Images' />
                     <img src={Gallery20} alt='Gallary Images' />
                  </div>
                  <div class="column">
                     <img src={Gallery16} alt='Gallary Images' />
                     <img src={Gallery17} alt='Gallary Images' />
                     <img src={Gallery18} alt='Gallary Images' />
                     <img src={Gallery19} alt='Gallary Images' />
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default PhotoGallery;
