import React from "react";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

export const Footer = () => {
  return <section className="footer">
      <div>
        <ul>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <FacebookIcon />
          </li>
          <li>
            <WhatsAppIcon />
          </li>
        </ul>
      </div>
      <div>
        <p>Copyright - Plantae 2021</p>
      </div>
    </section>
};
