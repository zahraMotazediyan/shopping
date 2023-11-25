import React, {useContext} from "react";
import {Link, useParams} from "react-router-dom";

//Api
import {ContextProducts} from "../../context/ContextProductsProvider";

///Css
import styles from "../../css/ProductDetails.module.css";

const ProductDetails = () => {

    const products = useContext(ContextProducts)

    let params = useParams();
    let id = params.id;
    let data = products[id - 1];
    let {image, title, price, category, description} = data

    return (
        <div className={styles.container_details}>
            <img className={styles.width_product} src={image} alt="product"/>
            <div className={styles.container_3}>
                <h3 className={styles.title_details}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}>Category: <span>{category}</span></p>
                <div className={styles.price_link}>
                    <span className={styles.price_p}>{price} $</span>
                    <Link className={styles.link_l} to="/shopping/products">Back to shop</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;