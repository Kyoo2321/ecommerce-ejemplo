import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container">
        <h1 className="main-title">Carrito</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <br />
                    <h3>{prod.titulo}</h3>
                    <p>Precio unit: S/ {prod.precio}.00</p>
                    <p>Precio total: S/ {prod.precio * prod.cantidad}.00</p>
                    <p>Cant: {prod.cantidad}</p>
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <h2>Precio total: S/ {precioTotal()}.00</h2>
                <button onClick={handleVaciar}>Vaciar</button>
                <Link to="/checkout">Finalizar compra</Link>
            </> :
            <h2>El carrito está vacío :</h2>
        }
        
    </div>
  )
}

export default Carrito