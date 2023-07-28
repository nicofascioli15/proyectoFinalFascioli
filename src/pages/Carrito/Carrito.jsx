import React from 'react'
import { useCarritoContext } from '../../Context/CarritoContext'

const Carrito = () => {
  const {cart, borrarProducto, setCart} = useCarritoContext()

  
  return (
    <div>
      {cart.map((producto)=>{
        return (
          <article key={producto.id}>
            <h3>{producto.titulo}</h3>
            <img src={producto.imagen} alt={producto.titulo} />
            <p>valor unitario $ {producto.valor}</p>
            <p>{producto.cantidad} {producto.categoria} Agregados</p>
            <button onClick={() => borrarProducto(producto.id)}>Borrar producto</button>
          </article>
        )
      })}
      
    </div>
  )
}

export default Carrito