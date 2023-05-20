import React from "react";
import { Link } from "react-router-dom";
import { IoMailSharp } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className="footer ">
      <br></br>
      
      <h5 className="text-center">All Right Reserved &copy;Velan Autos</h5>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
     
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2vh' }}>

</div>
    </div>
  );
};

export default Footer;
