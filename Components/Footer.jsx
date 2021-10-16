import React from "react";
import FooterStyle from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={FooterStyle.footer}>
      <div className={FooterStyle.footerLinks}>
        <p>
          Zoho Home &emsp;<span className={FooterStyle.span}>│</span>
        </p>
        <p>
          Contact&emsp;<span className={FooterStyle.span}>│</span>
        </p>
        <p>
          Security&emsp;<span className={FooterStyle.span}>│</span>
        </p>
        <p>
          IPR Complaints&emsp;<span className={FooterStyle.span}>│</span>
        </p>
        <p>
          Anti-spam Policy&emsp;<span className={FooterStyle.span}>│</span>
        </p>
        <p>
          Terms of Service&emsp;<span className={FooterStyle.span}>│</span>
        </p>
        <p>
          Privacy Policy&emsp;<span className={FooterStyle.span}>│</span>
        </p>
        <p>
          Cookie Policy&emsp;<span className={FooterStyle.span}>│</span>
        </p>
        <p>
          GDPR Complaince&emsp;<span className={FooterStyle.span}>│</span>
        </p>
        <p>
          Abuse Policy&emsp;<span className={FooterStyle.span}>│</span>
        </p>
      </div>
      <h6 className={FooterStyle.h6}>
        &copy; 2021 ,Zoho Corporation Pvt.Ltd.All Rights Reserved.
      </h6>
    </footer>
  );
};

export default Footer;
