import React from "react";
import {
    BsCart3,
    BsGrid1X2Fill,
    BsFillArchiveFill,
    BsFillGrid3X3GapFill,
    BsPeopleFill,
    BsListCheck,
    BsMenuButtonWideFill,
    BsFillGearFill
} from "react-icons/bs";

///Css
import styles from "../../css/AdminPage.module.css";

const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
    return (
        <aside id={styles["sidebar"]} className={openSidebarToggle ? styles.sidebar_responsive : ""}>
            <div className={styles.sidebar_title}>
                <div className={styles.sidebar_brand}>
                    <BsCart3 className={styles.icon_header}/>SHOP
                </div>
                <span className={styles.close_icon} onClick={OpenSidebar}>X</span>
            </div>

            <ul className={styles.sidebar_list}>
                <li className={styles.sidebar_list_item}>
                    <a href="">
                        <BsGrid1X2Fill className={styles.icon}/>Dashboard
                    </a>
                </li>
                <li className={styles.sidebar_list_item}>
                    <a href="">
                        <BsFillArchiveFill className={styles.icon}/>Products
                    </a>
                </li>
                <li className={styles.sidebar_list_item}>
                    <a href="">
                        <BsFillGrid3X3GapFill className={styles.icon}/>Categories
                    </a>
                </li>
                <li className={styles.sidebar_list_item}>
                    <a href="">
                        <BsPeopleFill className={styles.icon}/>Customers
                    </a>
                </li>
                <li className={styles.sidebar_list_item}>
                    <a href="">
                        <BsListCheck className={styles.icon}/>Inventory
                    </a>
                </li>
                <li className={styles.sidebar_list_item}>
                    <a href="">
                        <BsMenuButtonWideFill className={styles.icon}/>Reports
                    </a>
                </li>
                <li className={styles.sidebar_list_item}>
                    <a href="">
                        <BsFillGearFill className={styles.icon}/>Setting
                    </a>
                </li>
            </ul>
        </aside>)
}

export default Sidebar;