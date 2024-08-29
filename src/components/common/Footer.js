import React from "react";
import '../../styles/Footer.css'
import { Link } from "react-router-dom";
import footerData from "../../pages/Inicio/Data/footerData.js";

const Footer = () => {
  return (
    <footer>
      {footerData.map(footerda => (
       <div className="row">  

        <div className="col">
            <img src={footerda.logoSrc} alt="logo" className="logo_footer"/>
            <p id="description_text">{footerda.description}</p>        
        </div>

        <div className="col">
            <h2>Ubicación <div class="underline"><span></span></div></h2>
            <p>{footerda.address}</p>
            <p className="email-id">{footerda.email}</p>
            <h4>{footerda.phoneNumber}</h4>
        </div>

        <div className="col">
            <h2>Enlaces <div className="underline"><span></span></div></h2>
            <ul>
              {footerda.links.map((link, index) => (
               <li key={index}>
                  <Link to={link.url}>{link.text}</Link>
               </li>
               ))} 
            </ul>
        </div>
        
        <div className="col">
            <h2>Suscribirse<div className="underline"><span></span></div></h2>
            <form action="email"className="form-suscripcion">
                <input type="email" className="frmtxt_email" placeholder="Enter your email id" required/>
                <button type="submit" className="btnf">Enviar</button>
            </form>
            <div className="social-icons">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>
        </div>
    </div>
    ))}
    <hr/>
    <p className="copyright">Copyright 2023 - All Right Reserved</p>
    </footer>
  );
};

export default Footer;