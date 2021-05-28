import React from "react";
import product_data from "../data/product_data";
import styles from "./main.module.css";

const MainContent = () => {
  console.log(product_data);

  const listItems = product_data.map((item) => (
    <div className={styles.card} key={item.id}>
      <div className={styles.card_img}>
        <img src={item.thumb} />
      </div>
      <div className={styles.card_header}>
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className={styles.price}>
          {item.price}
          <span>{item.currency}</span>
        </p>
        <div className={styles.btn}>Add to Cart</div>
      </div>
    </div>
  ));
  return (
    <div className={styles.main_content}>
      <h3>Headphones</h3>
      {listItems}
    </div>
  );
};

export default MainContent;
