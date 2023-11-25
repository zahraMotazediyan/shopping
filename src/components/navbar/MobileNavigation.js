import React, {useState, useContext} from "react";

///Context
import {CartContext} from "../../context/CartContextProvider";
///Component
import NavLinks from "./NavLinks";

///Css
import styles from "../../css/Navbar.module.css";

///Icon
import {CgMenuRound} from "react-icons/cg";
import {CgCloseO} from "react-icons/cg";
import {Link} from "react-router-dom";
import smart from "../../icons/shop.svg";


const MobileNavigation = () => {

    const {state} = useContext(CartContext);

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <CgMenuRound className={styles.hamburger}
                                       size="40px" color="white"
                                       onClick={() => setOpen(!open)}
    />
    const closerIcon = <CgCloseO className={styles.hamburger}
                                 size="40px" color="white"
                                 onClick={() => setOpen(!open)}
    />

    const closeMobileMenu = () => setOpen(false);
    return (
        <nav className={styles.mobileNavigation}>
            {open ? closerIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
            <div className={styles.shopCart}>
                <Link to="/shopping/cart">
                    <img src={smart} alt="smart" sizes="10px" color="white"/>
                    <span>{state.itemsCounter}</span>
                </Link>
            </div>
        </nav>
    )
}

export default MobileNavigation;