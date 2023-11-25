import React from "react";
import {
    BsFillBellFill,
    BsFillEnvelopeFill, BsPersonCircle,
    BsSearch, BsJustify
}
    from "react-icons/bs";

///Css
import styles from "../../css/AdminPage.module.css";

const Header = ({OpenSidebar}) => {
    return (
        <header className={styles.header}>
            <div className={styles.menu_icon}>
                <BsJustify className={styles.icon} onClick={OpenSidebar}/>
            </div>
            <div className={styles.header_left}>
                <BsSearch className={styles.icon}/>
            </div>
            <div className={styles.header_right}>
                <BsFillBellFill className={styles.icon}/>
                <BsFillEnvelopeFill className={styles.icon}/>
                <BsPersonCircle className={styles.icon}/>
            </div>
        </header>
    )
}
export default Header;