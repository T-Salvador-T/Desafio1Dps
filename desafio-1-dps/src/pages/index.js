import { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import styles from "@/styles/Home.module.css";

const products = [
  { id: 1, name: 'Teclado', price: 100, image: 'https://hiraoka.com.pe/media/mageplaza/blog/post/c/o/como_elegir_un_teclado.jpg' },
  { id: 2, name: 'Monitor', price: 500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIGNK4_oRlH6tLiujzOBM2qBxM7ILeHNBPTg&s' },
  { id: 3, name: 'Laptop Gamer', price: 1200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX1TucJMmsGHeGk-DjmtWCybB8us4G-4D5gg&s' },
  { id: 4, name: 'Mouse Gamer', price: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uJP9P8CJHC0hoD9UXUz-OuwiFU5zUDMMwg&s' },
  { id: 5, name: 'Auriculares', price: 90, image: 'https://img.freepik.com/fotos-premium/coloca-par-auriculares-sobre-fondo-morado_674594-21215.jpg' },
  { id: 6, name: 'Silla Gamer', price: 300, image: 'https://i.blogs.es/caefa0/my-project-1---2023-08-23t085703.599/500_333.webp' },
  { id: 7, name: 'Tarjeta Gráfica', price: 750, image: 'https://www.lacuracaonline.com/media/wysiwyg/Blog/CuerpoArticulo/shutterstock_1977335933.jpg' },
  { id: 8, name: 'Disco SSD 1TB', price: 150, image: 'https://shopink.com.ve/wp-content/uploads/2022/12/AD1TBS20S3S.png' },
  { id: 9, name: 'Procesador Intel', price: 600, image: 'https://www.canal-ar.com.ar/noticias/images/c_intel_190324_r.jpg' },
  { id: 10, name: 'Placa Base ASUS ', price: 400, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CSWcVGVBb6s4HCGFYBNL8vpw9pcQzxnQAw&s' },
  { id: 11, name: 'Fuente de Poder', price: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJbhCxYH4u7EsdDRkt6KfKo2h72iiKWysqQ&s' },
  { id: 12, name: 'Ventiladores', price: 270, image: 'https://ocelot.com.mx/wp-content/uploads/2023/03/sw_fondo_oscuro_ogpf01_4.png' },
  { id: 13, name: 'RAM 32GB', price: 180, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31lBBfMUchX6QxIWWWbzdrI9tcntRPVrMng&s' },
  { id: 14, name: 'Bocina Bluetooth', price: 90, image: 'https://i.ytimg.com/vi/7mBtG2OJl8E/maxresdefault.jpg' },
  { id: 15, name: 'Impresora', price: 350, image: 'https://www.officedepot.com.sv/medias/34804.jpg-300ftw?context=bWFzdGVyfHJvb3R8MzI5NjV8aW1hZ2UvanBlZ3xhR0k1TDJnME55OHhNREkyTnpFNE1qUTJOVEExTkM4ek5EZ3dOQzVxY0dkZk16QXdablIzfDFmZmE2ODQxZTlkOWI4ZjVlNzc0NTM5YTdmZmU1NGE4NzUyN2RjN2U0NmZlZTIxNzI3ODNkZmY1MDk2ZDA0YjM' },
  { id: 16, name: 'Cámara 4K', price: 120, image: 'https://tech.com.sv/wp-content/uploads/2020/08/Logitech-BRIO-4K-Ultra-HD-webcam-1-1.jpg' },
  { id: 17, name: 'Microfono', price: 90, image: 'https://http2.mlstatic.com/D_NQ_NP_771110-MLU71392725062_082023-O.webp' },
  { id: 18, name: 'Tablet Android', price: 250, image: 'https://media.wired.com/photos/673fc17b37facb64c2030834/191:100/w_2580,c_limit/Samsung%20Galaxy%20Tab%20S10+%20Plus%20Abstract%20Background%20SOURCE%20Amazon.jpg' },
  { id: 19, name: 'Playstation 5', price: 700, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6spiT2MmqqTPFTpP3e39iQlc6tUX3LSjdQ&s' },
  { id: 20, name: 'Smartwatch Deportivo', price: 150, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdFmTMy_q0x_oSAkzH-oUghibwPNiU6wUsqQ&s' }
];

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    if (window.confirm('¿eliminar este producto?')) {
      setCart(cart.filter((_, i) => i !== index));
    }
  };

  const clearCart = () => {
    if (window.confirm('¿Estas seguro que deseas vaciar todo el carrito?')) {
      setCart([]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.cab}>
        <h1 className={styles.center}>Tienda Tecnologíca</h1>
      </div>
      <h2 className={styles.center}>Productos</h2>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
      <h2 className={styles.center}>Salvador José García Ruiz <br></br>GR230183 </h2>
      
    </div>
  );
}
