import React, {useContext} from "react";
import {Link} from "react-router-dom";

///Css
import styles from "../../css/ShopCart.module.css";

////Components
import Cart from "./Cart";

///Context
import {CartContext} from "../../context/CartContextProvider";

const ShopCart = () => {
    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={styles.container_flex}>
            <div className={styles.container_cartShop}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
            </div>

            {
                state.itemsCounter > 0 &&
                <div className={styles.total_pay}>
                    <p><span>Total Items : </span>{state.itemsCounter}</p>
                    <p><span>Total Payments : </span> {state.total}$</p>

                    <div className={styles.button_ch}>
                        <button className={styles.checkOut}
                                onClick={() => dispatch({type: "CHECKOUT"})}>CheckOut
                        </button>
                        <button className={styles.clear}
                                onClick={() => dispatch({type: "CLEAR"})}>Clear
                        </button>
                    </div>
                </div>
            }

            {
                state.checkOut &&
                <div className={styles.checkShop}>
                    <h1>Checked out successfully</h1>
                    <Link className={styles.a_fontWeight} to="/shopping/products">Buy More</Link>
                </div>
            }

            {
                !state.checkOut && state.itemsCounter === 0 &&
                <div className={styles.checkShop}>
                    <h1>Want to Buy?</h1>
                    <Link className={styles.a_fontWeight} to="/products">Go to shop</Link>
                </div>
            }
        </div>
    )
}

export default ShopCart;