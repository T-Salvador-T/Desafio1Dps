import { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import styles from "@/styles/Home.module.css";

const products = [
  { id: 1, name: 'Laptop Gamer', price: 1200, image: '/images/laptop.jpg' },
  { id: 2, name: 'Mouse Inalámbrico', price: 50, image: '/images/mouse.jpg' },
  { id: 3, name: 'Teclado Mecánico', price: 100, image: 'https://hiraoka.com.pe/media/mageplaza/blog/post/c/o/como_elegir_un_teclado.jpg' },
  { id: 4, name: 'Monitor 4K', price: 500, image: '/images/monitor.jpg' }
];

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    if (window.confirm('¿Seguro que deseas eliminar este producto?')) {
      setCart(cart.filter((_, i) => i !== index));
    }
  };

  const clearCart = () => {
    if (window.confirm('¿Seguro que deseas vaciar el carrito?')) {
      setCart([]);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.center}>Tienda Tecnología</h1>
      <h2 className={styles.center}>Productos</h2>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
    </div>
  );
}
