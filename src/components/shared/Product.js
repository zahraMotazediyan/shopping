import React, {useContext} from "react";
import {Link} from "react-router-dom";

///Context
import {CartContext} from "../../context/CartContextProvider";

///functions
import {shorten, isInCart, quantityCounter} from "../../helper/functions";

//Icons
import trashCart from "../../icons/trash.svg";

////Css
import styles from "../../css/Product.module.css";

const Product = ({productData}) => {
    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={styles.product_container}>
            <img className={styles.cardImage} src={productData.image} alt="product"
            />
            <h3 className={styles.title}>{shorten(productData.title)}</h3>
            <p className={styles.p_price}>{productData.price} $</p>
            <div className={styles.containerL_B}>
                <Link className={styles.details}
                      to={`/shopping/products/${productData.id}`}>Details
                </Link>
                <div className={styles.container_quantity}>

                    {
                        quantityCounter(state, productData.id) > 1 &&
                        <button
                            className={styles.button_}
                            onClick={() => dispatch({type: "DECREASE", payload: productData})}>-
                        </button>
                    }

                    {
                        quantityCounter(state, productData.id) === 1 &&
                        <button
                            className={styles.button_}
                            onClick={() => dispatch({type: "REMOVE-ITEM", payload: productData})}>
                            <img src={trashCart}
                                 alt="trashCart"
                            />
                        </button>
                    }

                    {
                        quantityCounter(state, productData.id) > 0 && <span className={styles.counter}>
                            {quantityCounter(state, productData.id)}
                        </span>
                    }

                    {
                        isInCart(state, productData.id) ?
                            <button
                                className={styles.button_}
                                onClick={() => dispatch({type: "INCREASE", payload: productData})}>+
                            </button> :
                            <button
                                className={styles.AddToCart}
                                onClick={() => dispatch({type: "ADD-ITEM", payload: productData})}>Add to Cart
                            </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Product;