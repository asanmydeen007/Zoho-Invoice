import React from 'react'
import styles from "./centrebanner.module.css";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Headshake from "react-reveal/HeadShake";

function CentreBanner() {
  return (
    <div className={styles.centrebanner}>
      <div className={styles.inside_centrebanner}>
        <div className={styles.inside_centrebanner_header}>
          <h1>Create the perfect brand impression and get paid faster</h1>
        </div>
        <div className={styles.leftbanner}>
           
          <img className={styles.leftbanner_img}src="https://www.zoho.com/in/invoice/home/features/send-payments-reminder.svg" alt=""/>
          <img className={styles.flip_card_top}src="https://www.zoho.com/in/invoice/home/svg/flip-card.svg" alt=""/>
          <Headshake top delay={400}><div className={styles.blue_box}><Fade top delay={1500}><img className={styles.blue_box_icons} src="https://www.zoho.com/in/invoice/home/svg/mail.svg" alt=""/></Fade><Fade top delay={1000}><img className={styles.blue_box_icons} src="https://www.zoho.com/in/invoice/home/svg/portal.svg" alt=""/></Fade><Fade top delay={500}><img className={styles.blue_box_icons} src="https://www.zoho.com/in/invoice/home/svg/mobile.svg" alt=""/></Fade></div></Headshake><div className={styles.progressbar}><ul><li></li><li></li><li></li></ul></div>
        </div>
 
<div className={styles.rightbanner}>
  <div className={styles.a_header_main}><a className={styles.a_header}>CREATE </a> <span className={styles.span_header}>Professional Invoices</span></div>
  <div className={styles.a_header_main}><a className={styles.a_header}>SEND </a> <span className={styles.span_header}>Invoices Effectively</span></div>
  <div className={styles.a_header_main}><a className={styles.a_header}>RECEIVE </a> <span className={styles.span_header}>Payments on Time</span></div>
<div className={styles.rightbanner_content_para}><p>A simple payment process helps you get paid on time. Provide multiple payment options that your customers can choose from to make their payments securely.</p></div><div className={styles.rightbanner_content_list}><ul><li>Enable multiple localized payment gateways</li><li>Accept credit & debit cards, UPI, Net Banking, cash, or cheques</li><li>Collect recurring payments automatically</li></ul></div>
</div>
      <div className={styles.ballcontainer}><img className={styles.ball} src="https://www.zoho.com/in/invoice/home/svg/decor-ball.svg" alt=""/></div>
      </div>
      <div className={styles.centrebanner_downicons}><h1>hello</h1></div>
    </div>
  )
}

export default CentreBanner
