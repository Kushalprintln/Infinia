import React from "react";
import styles from './Navbarone.module.css';
import logo from '../Images/INFINIA LOGO.png'
export default function Navbar(){
    return (
        <div className={styles.navbar}>
            <div className={styles.right}>
                <img src={logo} alt="" width={'100%'}/>
            </div>
            <div className={styles.left}>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Brands</li>
                    <li>Products</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}