import React from 'react';
import{RiFacebookCircleFill, RiInstagramFill,RiPinterestLine } from 'react-icons/ri';
import{Link} from "react-router-dom";

const Contact = () => {
  return (
    <>
       <section id='contact_Mini'>
        <div className="super_container">
            <div className="container_1">
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

            <div className="container_2">
                <h3>We'd love to hear from you</h3>
                <form>
                    <div>
                        <input typer="text" placeholder='Your Name'/>
                        <input typer="email" placeholder='Email'/>
                    </div>
                    <textarea rows="4" placeholder='Your Message....'></textarea>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>

       </section>
    
    
    
    </>
  )
}

export default Contact