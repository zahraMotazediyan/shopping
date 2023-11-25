import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";

///Contexts
import ContextProductsProvider from "./context/ContextProductsProvider";
import CartContextProvider from "./context/CartContextProvider";

///Components
import Navbar from "./components/navbar/Navbar";
import SignUp from "./components/shared/SignUp";
import Login from "./components/shared/Login";
import ProductDetails from "./components/shared/ProductDetails";
import AboutUs from "./components/shared/AboutUs";
import Store from "./components/shared/Store";
import ShopCart from "./components/shared/ShopCart";
import AdminPage from "./components/adminPage/AdminPage";
import MainPage from "./components/mainPage/MainPage";


function App() {
    return (
        <div>
            <ContextProductsProvider>
                <CartContextProvider>
                    <Navbar/>
                    <Routes>
                        <Route path="/shopping/" element={<MainPage/>}/>
                        <Route path="/shopping/signup" element={<SignUp/>}/>
                        <Route path="/shopping/login" element={<Login/>}/>
                        <Route path="/shopping/products/:id" element={<ProductDetails/>}/>
                        <Route path="/shopping/aboutUs" element={<AboutUs/>}/>
                        <Route path="/shopping/products" element={<Store/>}/>
                        <Route path="/shopping/cart" element={<ShopCart/>}/>
                        <Route path="/shopping/*" element={<Navigate to="/shopping/mainPage"/>}/>
                        <Route path="/shopping/adminPage" element={<AdminPage/>}/>
                    </Routes>
                </CartContextProvider>
            </ContextProductsProvider>
        </div>
    );
}

export default App;
