import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {producto} ) => {

  return (
    <Link className='producto' to={`/item/${producto.id}`}>
        <img className='Item-imagen' src={producto.imagen} alt={producto.categoria}/>
        <div>
            <h3>{producto.titulo}</h3>
            <p>Precio: S/ {producto.precio}</p>
            <p>Stock: {producto.stock}</p>
        </div>
    </Link>
  )
}

export default Item