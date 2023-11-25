import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

////Css
import styles from "../../css/SignUp.module.css";

///Functions
import {notify} from "../../functions/notify";
import {validate} from "../../functions/Validat";

const Login = () => {

    const [data, setData] = useState({
        fullName: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const changeHandler = event => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const focusHandler = (event) => {
        setTouched({...touched, [event.target.touched]: true})
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("You Login successfully", "success")
        } else {
            notify("Invalid data", "error")
            setTouched({
                    fullName: true,
                    password: true
                }
            )
        }
    }

    useEffect(() => {
        setErrors(validate(data))
    }, [data, touched])

    return (
        <div className={styles.cart_container}>
            <form className={styles.form} onSubmit={submitHandler}>
                <div>
                    <h2>Login</h2>
                </div>
                <div className={styles.f_name}>
                    <label>Full Name</label>
                    <input
                        className={(errors.fullName && touched.fullName) ? styles.inputRed : styles.inputBlue}
                        type="text"
                        name="fullName"
                        onChange={changeHandler}
                        onFocus={focusHandler}/>
                    {errors.fullName && touched.fullName && <span>{errors.fullName}</span>}
                </div>
                <div className={styles.f_name}>
                    <label>Password</label>
                    <input
                        className={(errors.password && touched.password) ? styles.inputRed : styles.inputBlue}
                        type="password"
                        onChange={changeHandler}
                        onFocus={focusHandler}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.lo_sub}>
                    <Link to="/shopping/signUp">Sign Up</Link>
                    <button className={`${styles.submit} btn btn-primary`} type={styles.submit}>Login
                    </button>
                </div>
                <ToastContainer/>
            </form>
        </div>
    )
}

export default Login;