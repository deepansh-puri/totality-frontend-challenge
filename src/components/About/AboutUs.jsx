import React from 'react'
import About from '../../subComponents/About';

const AboutUs = () => {
  return (
    <>
         <section id='aboutPage' className='page'>
            <div className="container">
              <img src='/about.jpg' alt='about'/>
                <div className="content">
                    <h3>Your peace of mind, our priority</h3>
                    <p>Welcome to Rentlify, where we make finding your perfect rental property a breeze. </p>
                    <p>Our mission is to connect renters with the best homes available, whether you’re looking for a chic urban apartment, a cozy suburban house, or a serene countryside retreat.We believe that everyone deserves a place they love coming home to, and we’re dedicated to making that a reality. With a diverse selection of properties across various regions, Rentlify is your trusted partner in discovering a home that fits your lifestyle and needs.</p>
                    <p>At Rentlify, we go beyond simply listing properties. We’re committed to creating a seamless and enjoyable experience for both renters and property owners. </p>
                </div>
            </div>
            
          </section>
        <About/>
    </>
  )
}

export default AboutUs