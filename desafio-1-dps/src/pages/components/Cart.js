import { useState } from 'react';
import styles from "@/styles/Cart.module.css";

export default function Cart({ cart, removeFromCart, clearCart }) {
  const [purchasedItems, setPurchasedItems] = useState([]); 

  // Función para comprar un producto específico
  const handlePurchase = (product) => {
    if (!purchasedItems.some(item => item.id === product.id)) {
      setPurchasedItems([...purchasedItems, product]);
    }
  };

  // Función para eliminar del carrito y de la factura
  const handleRemove = (index) => {
    const removedProduct = cart[index];
    setPurchasedItems(purchasedItems.filter(item => item.id !== removedProduct.id));
    removeFromCart(index);
  };

  // Vaciar carrito y también limpiar la factura
  const handleClearCart = () => {
    setPurchasedItems([]);
    clearCart();
  };

  return (
    <div className={styles.cart}>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((product, index) => (
              <li key={index} className={styles.cartItem}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
                <span>{product.name} - ${product.price}</span>
                <div className={styles.flexbt}>
                  <button onClick={() => handlePurchase(product)} className={styles.purchaseButton}>Comprar</button>
                  <button onClick={() => handleRemove(index)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.flexbt}>
            <button onClick={handleClearCart} className={styles.clearButton}>Vaciar Carrito</button>
          </div>
        </>
      )}

      {purchasedItems.length > 0 && (
        <div className={styles.invoiceSection}>
          <h3>Factura Generada</h3>
          <ul>
            {purchasedItems.map((product, index) => (
              <li key={index}>
                {product.name} - ${product.price}
              </li>
            ))}
          </ul>
          <p>Total a pagar: ${purchasedItems.reduce((total, product) => total + product.price, 0)}</p>
        </div>
      )}
    </div>
  );
}
