import React from "react";
///Icon
import smart from "../../icons/bazar.png";

///Css
import styles from "../../css/MainPage.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={smart} alt="i_s"/>
            <div className={styles.smart}>Smart
                <span className={styles.shop}>ShOp</span>
            </div>
            <div className={styles.width_hr}>
                <div className={`d-flex`}>
                    <div className={`${styles.flex_1} ${styles.w_color}`}>
                        <hr/>
                    </div>
                    <div>
                        <p className={styles.p_go}>Go up</p>
                    </div>
                    <div className={`${styles.flex_1} ${styles.w_color}`}>
                        <hr/>
                    </div>
                </div>
                <span className={styles.span_2023}>
                    copyright © 2023. All Right Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;