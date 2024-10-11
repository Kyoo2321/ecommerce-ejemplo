import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext";

const ItemDetail = ( {item} ) => {

  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
      cantidad < item.stock && setCantidad(cantidad + 1)
  }

  return (
    <div className="container">
        <div className="producto-detalle">
            <img className='producto-imagen' src={item.imagen} alt={item.categoria} />
            <div>
                <h3 className="titulo">{item.categoria}</h3>
                <p className="material">{item.material}</p>
                <p className="precio">Precio: S/ {item.precio}</p>
                <p className="stock">Stock: {item.stock}</p>
                <ItemCount 
                cantidad={cantidad} 
                handleSumar={handleSumar} 
                handleRestar={handleRestar} 
                handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
              />
            </div>
        </div>
    </div>
  )
}

export default ItemDetail