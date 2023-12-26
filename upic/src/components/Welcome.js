import React from 'react';

const Welcome = () => {
    return (
        <section className='pt-5 pb-3'>
            <div className='container'>
                <div className='row mt-5 mb-5'>
                    <div className='col-md-12 text-center'>
                        <p>
                            <span className='span-head'>Welcome To</span>
                            <h2 className='page-head'>Uday Pratap Inter College</h2>
                            <p>Welcome to Uday Pratap Inter College, a beacon of knowledge and excellence in education.
                                Nestled in the heart of our vibrant community, we take pride in nurturing young minds and fostering a holistic learning
                                environment. At Uday Pratap, we believe in the transformative power of education, inspiring students to explore their
                                potential and become confident, compassionate individuals. Our dedicated faculty members are committed to providing
                                quality education that goes beyond textbooks, encouraging critical thinking and creativity. With state-of-the-art
                                facilities and a rich academic curriculum, we strive to create a learning experience that prepares students for the
                                challenges of the future. Join us on a journey of discovery, where each day brings new opportunities for growth and
                                learning. Uday Pratap Inter College: Where education meets aspiration, and dreams take flight. Welcome to our educational family!</p>
                        </p>
                    </div>
                    {/* features Section */}
                    <div class="container">
                        <div class="row align-items-start feature-section">
                            <div class="col">
                            <h3>Objective</h3>
                            <p>Uday Pratap Inter College's comprehensive Objective Features section, showcasing our commitment to fostering excellence.</p>
                            </div>
                            <div class="col">
                            <h3>Admission</h3>
                            <p>Our admission process ensures a seamless transition for students into a nurturing and academically enriching environment.</p>
                            </div>
                            <div class="col">
                            <h3>Courses</h3>
                            <p>We are offering courses that empower students with knowledge, skills, and a holistic education for a bright future.</p>
                            </div>
                            <div class="col">
                            <h3>Faculty</h3>
                            <p>Our passionate educators foster a nurturing environment to inspire and guide students toward academic success.
                            </p>
                            </div>
                        </div></div>
                </div>
            </div>
        </section>
    )
}

export default Welcome;
