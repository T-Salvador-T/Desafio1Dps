//import styles from '../styles/ProductList.module.css';
import styles from "@/styles/ProductList.module.css"
import React from 'react';

export default function ProductList({ products, addToCart }) {
  return (
    <div className={styles.productList}>
      {products.map(product => (
        <div key={product.id} className={styles.productItem}>
          <img src={product.image} alt={product.name} className={styles.productImage} />
          <h3 className={styles.productName}>{product.name}</h3>
          <p className={styles.productPrice}>${product.price}</p>
          <button 
            className={styles.addButton} 
            onClick={() => addToCart(product)}
          >
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
}

