import React from 'react'
import {Link, useLocation} from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname ==='/';
  return (
    <>
    <footer 
    className={
      isHomePage ?  "homePage_footer otherPage_footer": "otherPage_footer"
    }
  >  
      <div className="conatainer">
        <h4>RENTIFY </h4>
        <p>Thank you for choosing Rentify as your trusted partner in your rental journey.</p>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>

          <li>
            <Link to={'/terms and conditions'}>Terms and Conditions</Link>
          </li>

          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
    </>
  )
}

export default Footer