import React, { useState } from "react";

const HeaderScript = () => {
  const [isNavVisible, setNavVisibility] = useState(false);

  const openNav = () => {
    setNavVisibility(true);
  };

  const closeNav = () => {
    setNavVisibility(false);
  };

  return (
    <div>
      <button className="abrir-menu" id="abrir" onClick={openNav}>
        <i className="bi bi-list"></i>
      </button>
      <nav className={`nav ${isNavVisible ? "visible" : ""}`} id="nav">
        <button className="cerrar-menu" id="cerrar" onClick={closeNav}>
          <i className="bi bi-x"></i>
        </button>
      </nav>
    </div>
  );
};

export default HeaderScript;
