import React from "react";

////Component
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

///Css
import styles from "../../css/Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Navigation/>
            <MobileNavigation/>
        </div>
    )
}

export default Navbar;