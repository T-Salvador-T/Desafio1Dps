import { useState } from 'react';
import styles from "@/styles/Cart.module.css";

export default function Cart({ cart, removeFromCart, clearCart }) {
    const [isPurchased, setIsPurchased] = useState(false); // Estado para manejar la compra
  
    const handlePurchase = () => {
      setIsPurchased(true); // Cambia el estado a comprado
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
                  <button onClick={() => removeFromCart(index)}>Eliminar</button>
                </li>
              ))}
            </ul>
            <button onClick={clearCart} className={styles.clearButton}>Vaciar Carrito</button>
            <button onClick={handlePurchase} className={styles.purchaseButton}>Comprar</button>
          </>
        )}
  
        {/* Mostrar mensaje de compra realizada */}
        {isPurchased && (
          <div className={styles.invoiceSection}>
            <h3>Factura Generada</h3>
            {/* Aquí puedes mostrar los detalles de la factura */}
            <ul>
              {cart.map((product, index) => (
                <li key={index}>
                  {product.name} - ${product.price}
                </li>
              ))}
            </ul>
            <p>Total: ${cart.reduce((total, product) => total + product.price, 0)}</p>
          </div>
        )}
      </div>
    );
  }