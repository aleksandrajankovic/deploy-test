import React from "react";
import "./Slider.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src="./logomb.png" alt="logo" />
        </div>
        <div className="btnLng">
         
            <a href="#">Registruj se</a>
            <a href="#">Prijava</a>
       
        </div>
      </header>
    </>
  );
};

export default Header;