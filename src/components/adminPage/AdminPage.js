import React, {useState} from "react";

///Component
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";

///Css
import styles from "../../css/AdminPage.module.css";

const AdminPage = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    return (
        <div className={styles.grid_container}>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle}
                     OpenSidebar={OpenSidebar}
            />
            <Home/>
        </div>
    )
}

export default AdminPage;