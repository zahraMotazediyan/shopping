import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {motion} from 'framer-motion';

///Css
import styles from "../../css/Navbar.module.css";

////Context
import {CartContext} from "../../context/CartContextProvider";

///Icon
import smart from "../../icons/shop.svg";

const NavLinks = (props) => {

    const {state} = useContext(CartContext);

    const animateForm = {opacity: 0, y: -40};
    const animateTo = {opacity: 1, y: 0}

    return (
        <>
            <ul>
                <motion.li
                    initial={animateForm}
                    animate={animateTo}
                    transition={{delay: 0.05}}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link to="/shopping/">MainPage</Link>
                </motion.li>

                <motion.li
                    initial={animateForm}
                    animate={animateTo}
                    transition={{delay: 0.10}}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link to="/shopping/signUp">SignUp</Link>
                </motion.li>

                <motion.li
                    initial={animateForm}
                    animate={animateTo}
                    transition={{delay: 0.20}}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link to="/shopping/login">Login</Link>
                </motion.li>

                <motion.li
                    initial={animateForm}
                    animate={animateTo}
                    transition={{delay: 0.30}}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link to="/shopping/adminPage">AdminPage</Link>
                </motion.li>

                <motion.li
                    initial={animateForm}
                    animate={animateTo}
                    transition={{delay: 0.40}}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link to="/shopping/products">Product</Link>
                </motion.li>

                <motion.li
                    initial={animateForm}
                    animate={animateTo}
                    transition={{delay: 0.50}}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link to="/shopping/aboutUs">AboutUs</Link>
                </motion.li>

                <motion.li
                    className={styles.relative}
                    initial={animateForm}
                    animate={animateTo}
                    transition={{delay: 0.60}}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link to="/shopping/cart">
                        <img src={smart} alt="smart" sizes="10px" color="white"/>
                        <span>{state.itemsCounter}</span>
                    </Link>
                </motion.li>
            </ul>
        </>
    )
}

export default NavLinks;