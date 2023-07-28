import React from 'react'
import { useCarritoContext } from '../../Context/CarritoContext'
import "../Carrito/carrito.css"

const Carrito = () => {
  const {cart, borrarProducto, setCart} = useCarritoContext()

  return (
    <div>
   {cart.map((producto)=>{
        return (
          
          
<table className="table container" key={producto.id}>
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Imagen</th>
      <th scope="col">Articulo</th>
      <th scope="col">Talle</th>
      <th scope="col">Importe</th>
      <th scope="col">Cantidad</th>
      <th scope="col"> Total </th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{producto.id}</td>
      <td><img className='imagenCarrito' src={producto.imagen} alt={producto.titulo} /></td>
      <td><h6>{producto.titulo}</h6></td>
      <td><p>{producto.talle}</p></td>
      <td><p>$ {producto.valor}</p></td>
      <td><p>{producto.cantidad}</p></td>
      <td>......</td>
      <td><button onClick={() => borrarProducto(producto.id)}>X</button></td>
    </tr>
   
  </tbody>
            
    
          </table>

        )
      })}
      
    </div>
  )
}

export default Carrito