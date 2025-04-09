import React from "react";

const Footer = () => (
  <div className="footer">
    <div className="container flex jb ac py-2">
      <a href="/" style={{lineHeight:1}}>
        <img src="images/sk1.svg" width={58} alt="SK" />
      </a>
      <div className="flex gap-1">
        <a href="mailto:sangramm7@gmail.com" target="_blank" title="Email">
          <i className="ri-mail-fill"></i>
        </a>
        <a href="https://wa.me/918908221784" target="_blank" title="Whatsapp">
          <i className="ri-whatsapp-fill"></i>
        </a>
        <a href="https://instagram.com/dev_saan" target="_blank" title="Instagram">
          <i className="ri-instagram-fill"></i>
        </a>
      </div>
      <p>
        💗 Created by{" "} Saan
      </p>
    </div>
  </div>
);

export default Footer;
