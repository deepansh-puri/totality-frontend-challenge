import React from 'react'

const About = () => {
  return (
    <>
       <section id='aboutUs_Mini'>
         <div className="first_container">
            <div className="content">
                <h1>ABOUT US</h1>
                <p>We'r your trusted partner in finding the perfect rental property. We believe that searching for a home should be a pleasant and stress-free experience, and we're here to make that happen. </p>
                <p>Our mission is to simplify the rental process and empower our users to make informed decisions with ease and confidence.</p>
                <p>Our team of experts is dedicated to providing exceptional customer service, whether you’re a first-time renter or an experienced property owner.</p>
                <p>Our commitment to innovation and excellence drives us to continually improve our platform and services.</p>
            </div>
              <button>Discover a Better Way to Find Your Next Home</button>
         </div>

         <div className="second_container">
            <div className="image_1">
                <img  src="/people.jpg" alt="people" />
            </div>

            <div className="image_2">
                <img src="/people2.jpg" alt="people2"/>
            </div>
         </div>
       </section>
    
    
    </>
  )
}

export default About