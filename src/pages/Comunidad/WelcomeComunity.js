import React, { useState } from "react";
import "../../styles/Comunidad/welcome_comunity.css";
import IconFacebook from "./icons/MdiFacebookBox.svg";
import IconInstagram from "./icons/PhInstagramLogo.svg";
import Iconlinkedin from "./icons/BiLinkedin.svg";
import IconTwitter from "./icons/BiTwitterX.svg";
import IconPerson from "./icons/SolarPeopleNearbyBroken.svg";
import IconTiktok from "./icons/IcBaselineTiktok.svg";
import IconDiscord from "./icons/BiDiscord.svg";
import { Link } from "react-router-dom";

const WelcomeComunity = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container_welcome">
      <div className="section-welcome">
        <h1>Nuestra Organizacion</h1>

        <p className="parrafo">
          En IEE AES, nuestra pasión es encender la chispa de la curiosidad y la
          innovación en las mentes jóvenes. Estamos comprometidos a inspirar a
          la siguiente generación de exploradores espaciales mediante programas
          educativos interactivos y atractivos. Nuestro programa CanSat
          Explorers está diseñado especialmente para motivar y desafiar a
          estudiantes de tercero, cuarto y quinto de secundaria, guiándolos a
          través del emocionante proceso de diseñar, construir y lanzar su
          propio picosatélite.
        </p>
      </div>
      <div className="section-welcome">
        <h1>Nuestras Redes Sociales</h1>
        <div className="welcome_mediasocial">
          <Link className="link_mediasocial" to="https://www.facebook.com/ieeeaessuni">
            <div className="card_mediasocial">
              <img src={IconFacebook} alt="iconfacebook" />
              <div className="information">
                <p>48 k</p>
                <p>Followers</p>
              </div>
            </div>
          </Link>

          <Link className="link_mediasocial" to="https://www.instagram.com/aess_uni_oficial/">
            <div className="card_mediasocial">
              <img src={IconInstagram} alt="iconfacebook" />
              <div className="information">
                <p>48 k</p>
                <p>Followers</p>
              </div>
            </div>
          </Link>

          <Link className="link_mediasocial" to="https://www.linkedin.com/company/ieee-aess-uni/mycompany/">
            <div className="card_mediasocial">
              <img src={Iconlinkedin} alt="iconfacebook" />
              <div className="information">
                <p>48 k</p>
                <p>Followers</p>
              </div>
            </div>
          </Link>

          <Link className="link_mediasocial" to="https://twitter.com/ieeeaessuni">
            <div className="card_mediasocial">
              <img src={IconTwitter} alt="iconfacebook" />
              <div className="information">
                <p>48 k</p>
                <p>Followers</p>
              </div>
            </div>
          </Link>

          <Link className="link_mediasocial" to="#">
            <div className="card_mediasocial">
              <img src={IconPerson} alt="iconfacebook" />
              <div className="information">
                <p>48 k</p>
                <p>Followers</p>
              </div>
            </div>
          </Link>

          <Link className="link_mediasocial" to="#">
            <div className="card_mediasocial">
              <img src={IconTiktok} alt="iconfacebook" />
              <div className="information">
                <p>48 k</p>
                <p>Followers</p>
              </div>
            </div>
          </Link>

          <Link className="link_mediasocial" to="#">
            <div className="card_mediasocial">
              <img src={IconDiscord} alt="iconfacebook" />
              <div className="information">
                <p>48 k</p>
                <p>Followers</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="section-welcome">
        <h1>Conoce más de IEEE AESS UNI</h1>
        <div className="welcome_links">
          <div className="links_menu">
            <a href="#mision">Mision</a>
          </div>
          <div className="links_menu">
            <a href="#vision">Vision</a>
          </div>
          <div className="links_menu">
            <a href="#Areas">Areas AES UNI</a>
          </div>
          <div className="links_menu">
            <a href="#EquipoDirectivo">Nuestro Equipo Directivo</a>
          </div>
          <div className="links_menu">
            <a href="#EquipoSubdirectivo">Colaboradores</a>
          </div>
          <div
            className="links_menu dropdown"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Link to="">
              Mentores 2024
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="arrow-down"
              >
                <path d="m12 15l-5-5h10z" />
              </svg>
            </Link>
            {isOpen && (
              <div className="dropdown-content">
                <a href="#mentores2023">Mentores 2023</a>
                <a href="#mentores2022">Mentores 2022</a>
                <a href="#mentores2022">Mentores 2021</a>
                <a href="#mentores2022">Mentores 2020</a>
              </div>
            )}
          </div>
          <div className="links_menu">
            <a href="#mision">Nuestro Boletin</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComunity;