import React, {useContext} from "react";

////Context
import {CartContext} from "../../context/CartContextProvider";

import styles from "../../css/ShopCart.module.css"
///Function
import {shorten} from "../../helper/functions";
////
import trashIcon from "../../icons/trash.svg";

const Cart = (props) => {

    const {dispatch} = useContext(CartContext);

    const {image, title, price, quantity} = props.data

    return (
        <div className={styles.container_cart}>
            <img className={styles.img_product} src={image} alt="product"/>
            <div className={styles.title_price}>
                <h3 className={styles.t_shorten}>{shorten(title)}</h3>
                <p className={styles.p_price}>{price} $</p>
            </div>
            <div className={styles.quantity}>
                <span>{quantity}</span>
            </div>
            <div className={styles.button_trash}>
                {
                    quantity > 1 ?
                        <button
                            className={styles.DECREASE}
                            onClick={() => dispatch({type: "DECREASE", payload: props.data})}> -
                        </button> :
                        <button
                            className={styles.REMOVE}
                            onClick={() => dispatch({type: "REMOVE-ITEM", payload: props.data})}>
                            <img
                                className={styles.color_white} src={trashIcon} alt="trash"
                            />
                        </button>
                }

                <button
                    className={styles.INCREASE}
                    onClick={() => dispatch({type: "INCREASE", payload: props.data})}> +
                </button>
            </div>
        </div>
    )
}

export default Cart;