import React from "react";

///Component
import NavLinks from "./NavLinks";

///Css
import styles from "../../css/Navbar.module.css";

const Navigation = () => {
    return (<nav className={styles.navigation}>
            <NavLinks/>
        </nav>)
}

export default Navigation;