import React from 'react'
import{RiFacebookCircleFill, RiInstagramFill,RiPinterestLine } from 'react-icons/ri';
import{Link} from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section id='contact'>
        <h1>CONTACT US</h1>
        <p>Your journey to finding the perfect rental home starts here, and we're eager to assist you every step of the way. </p>
        <p>At Rentify, we're here to help you find your perfect home. Whether you have questions about a property listing, need assistance with the rental process, or want to learn more about how we can help you, feel free to get in touch. </p>
        
         <div className="container">
            <img src='/about.jpg' alt='about'/>
            <div className="content">
                <h3>Let's Connect</h3>
                <div>
                    <p>Phone</p>
                    <span>+91 6285130987</span>
                </div>

                <div>
                    <p>Email</p>
                    <span>info@rentify.com</span>
                </div>

                <div>
                    <p>Address</p>
                    <span>123 Mapple Street,Himachal 177001, India</span>
                  
                </div>
                <ul>
                    <Link to={'/'} target='_blank'><RiFacebookCircleFill/></Link>
                    <Link to={'/'} target='_blank'> < RiInstagramFill /></Link>
                    <Link to={'/'} target='_blank'><RiPinterestLine /></Link>
                </ul>
            </div>
         </div>





      </section>
    
    </>
  )
}

export default Contact