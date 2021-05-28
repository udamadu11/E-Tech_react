import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <nav>
      <div className={styles.logo}>E-Tech</div>
      <ul>
        <li>Home</li>
        <li>Our Products</li>
        <li>About Us</li>
        <li>Contact us</li>
      </ul>
      <div className={styles.search}>
        <i className="fa fa-search" />
        <i className="fa fa-shopping-basket"></i>
      </div>
    </nav>
  );
}
