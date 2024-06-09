import React from "react";
import Logo from "../../images/Logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__content">
        <div className="Footer__logo">
          {" "}
          <img src={Logo} />
        </div>
        <div className="Footer__links"></div>
        <div className="Footer__contact">
          <p>
            Feel free to contact me:{" "}
            <a href="mailto:daniel.visentini.dev@gmail.com">
              daniel.visentini.dev@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="Footer__copyright">
        <p>
          @ 2024 Daniel Visentini. All rights reserved. Design and logic by
          Daniel Visentini.
        </p>
      </div>
    </div>
  );
};

export default Footer;
