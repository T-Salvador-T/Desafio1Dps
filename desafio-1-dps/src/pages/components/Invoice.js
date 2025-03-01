import styles from '../styles/Invoice.module.css';

export default function Invoice({ cart }) {
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className={styles.invoice}>
      <h2>Factura</h2>
      {cart.length === 0 ? (
        <p>No hay productos en la compra.</p>
      ) : (
        <>
          <ul>
            {cart.map((product, index) => (
              <li key={index} className={styles.invoiceItem}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
                <div>
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.total}>
            <h3>Total: ${total}</h3>
          </div>
        </>
      )}
    </div>
  );
}
