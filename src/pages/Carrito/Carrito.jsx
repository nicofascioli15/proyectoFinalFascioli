import React from 'react'
import { useCarritoContext } from '../../Context/CarritoContext'
import "../Carrito/carrito.css"
import { Link } from 'react-router-dom'

const Carrito = () => {
  const { cart, borrarProducto, cantidadProductosCarrito, importeTotalCarrito,limpiarCarrito } = useCarritoContext()

  const borrar = () =>{
    limpiarCarrito()
  }

  if (cantidadProductosCarrito === 0) {
    return (
      <div className='container'>
        <p>tu carrito esta vacio 😔</p>
        <Link to='/productos' className='btn btn-warning'> Productos </Link>
      </div>
    )
  } else {
    return (
      <div className='container'>
        <Link className='seguirComprando'  to ="/productos">◀︎ Seguir Comprando</Link>
        {cart.map((producto) => {
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
                  <th scope="col"> SubTotal </th>
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

                <tr>

                </tr>

              </tbody>
            </table>



          )
        })}
        

        <table className="table container">
                <thead>
                  <tr>
                    <th scope="col">Total Compra</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>$ {importeTotalCarrito}</td>
                  </tr>

                </tbody>


              </table>

              <div className='container btnsCarrito'>
          <Link className='btn btn-success'>Finalizar Compra</Link>
          <Link onClick={borrar} className='btn btn-danger'>Borrar Carrito</Link>
        </div>

      </div>
    )

    

  }
}

export default Carrito