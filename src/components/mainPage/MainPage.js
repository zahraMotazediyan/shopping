import React from "react";
////Component
import Footer from "../mainPage/Footer";

////Css
import styles from "../../css/MainPage.module.css";

///Icon
import photo from "../../icons/rendering.avif";
import photos from "../../icons/Depositphotos.jpg";
import stylish from "../../icons/stylish.avif";
import {Link} from "react-router-dom";

const MainPage = () => {
    return (<>
            <div
                id={`carouselExampleInterval`}
                className={`carousel slide`}
                data-bs-ride="carousel"
            >
                <div className={`carousel-inner d-flex-inline`}>
                    <div
                        className={`carousel-item active justify-content-center`}
                        data-bs-interval="10000"
                    >
                        <Link to="/shopping/products">
                            <img src={photo}
                                 className={`d-flex ${styles.w_51}`} alt="photo"/>
                        </Link>
                    </div>

                    <div className={`carousel-item
                         justify-content-center`}
                         data-bs-interval="2000"
                    >
                        <Link to="/shopping/products">
                            <img src={photos}
                                 className={`d-flex ${styles.w_51}`} alt="image"/>
                        </Link>

                    </div>

                    <div className={`carousel-item
                         justify-content-center`}
                    >
                        <Link to="/shopping/products">
                            <img src={stylish}
                                 className={`d-flex ${styles.w_51}`} alt="stylish"/>
                        </Link>

                    </div>
                </div>

                <button
                    className={`carousel-control-prev`}
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                >
                    <span
                        className={`carousel-control-prev-icon ${styles.bg_color}`}
                        aria-hidden="true"
                    />
                    <span className={`visually-hidden`}>Previous</span>
                </button>
                <button
                    className={`carousel-control-next`}
                    type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next"
                >
                    <span
                        className={`carousel-control-next-icon ${styles.bg_color}`}
                        aria-hidden="true"/>
                    <span className={`visually-hidden`}>Next</span>
                </button>
            </div>
            <Footer/>
        </>)
}

export default MainPage;
