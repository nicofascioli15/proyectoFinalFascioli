import React, { useState, useEffect } from 'react'
import { useDataContext } from "../../Context/ContextData";
import { Link, useParams } from 'react-router-dom'
import { useCarritoContext } from '../../Context/CarritoContext';



const DetalleProducto = () => {
  const {agregarAlCarrito} = useCarritoContext()
  const articulos = useDataContext()
  const [productoFiltrado, setProductoFiltrado] = useState([])
  const [cantidad, setCantidad] = useState (1)
  const {productoId} = useParams()


  useEffect(() => {
  const Filtrado = async () => {
    const data = await articulos;
    const filtradoData = data.filter( (producto) => producto.id == productoId)
    setProductoFiltrado(filtradoData)
};
Filtrado()
}, []);

const sumarCantidad =  () => {
  setCantidad(cantidad +1)
  

}

const restarCantidad =  () => {
  if(cantidad > 1){
  setCantidad(cantidad -1)
}
}


const agregar = () =>{
  agregarAlCarrito(...productoFiltrado, cantidad)
}

  return (

   <div>
    {productoFiltrado.map ((articulo) =>{
      return (
        
        <article key={articulo.id} className='container'>
          <h2>{articulo.titulo}</h2>
          <figure>
            <img src={articulo.imagen} alt={articulo.titulo}/>
          </figure>
          <p>Stock {articulo.stock}</p>
          <p><b>$ {articulo.valor}</b></p>

          <p>Agregar Contador para agregar al carrito y bajar del stock</p>
          <p>boton agregar al carrito</p>
          <Link to="/productos">Volver a Productos </Link>
          <button onClick={sumarCantidad}>+</button>
          <p>{cantidad}</p>
          <button onClick={restarCantidad}>-</button>
          <Link onClick={agregar}  className="btn btn-dark">Agregar al Carrito</Link>
        </article>

      )
    })}
  
  
   </div>
  )
}

export default DetalleProducto