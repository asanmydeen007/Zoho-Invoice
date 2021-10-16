import React from "react";
import styles from "../Components/sign_in.module.css";
import Link from "next/link"
function sign_in() {
  return (
    <div className={styles.background}>
      <div className={styles.signin_container}>
        <div className={styles.signin_box}>
          <div className={styles.zoho_logo}></div>
          <div className={styles.sign_in_div}>
            <form className={styles.login}>
            <div className={styles.signin_head}>
			    					<span id="headtitle">Sign in</span>
			    					<span id="trytitle"></span>
									<div className={styles.service_name}>to access <span>Invoice</span></div>
									<div className={styles.textbox_div}>
                    <span>
                    <input className={styles.login_id} placeholder="Email address"  type="email" name="LOGIN_ID" className={styles.textbox}  />

                    </span>
                  </div>
                  <button className={styles.btn_blue} ><span>Next</span></button>
								</div>
                <div  className={styles.forget_pass}><a className={styles.forget_pass}>Forgot Password?</a></div>
            </form>
            <div className={styles.line}></div>
            
          </div>
          
        </div>
        <div className={styles.right_container}><img className={styles.right_container_image}src="https://accounts.zoho.com/v2/components/images/passwordless_illustration2x.png"/></div>
        <div className={styles.right_container_head}>Passwordless sign-in</div>
        <div className={styles.right_container_para}>
                Move away from risky passwords and experience one-tap access to your Zoho account. Download and Install OneAuth.
            </div>
           <a className={styles.right_container_learn_more}> Learn More </a>
      </div>
      <div className={styles.signuplink}>Don't have a Zoho account? <a ><Link href='/sign_up'>Sign Up Now</Link></a></div>
    </div>
  );
}

export default sign_in;
