import React from 'react';
import PageTopBanner from '../components/PageTopBanner';
import Gallery1 from '../assets/images/'

const PhotoGallery = () => {
   return (
      <>
         <PageTopBanner pageTitle={"Photo Gallery"} />

         <section className='mt-5 mb-5'>
            <div className='container'>
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
                <img src={}></img>
            </div>
            <div class="column">
                
            </div>
           
           
          </div>
            </div>
         </section>


      </>
   )
}

export default PhotoGallery;
