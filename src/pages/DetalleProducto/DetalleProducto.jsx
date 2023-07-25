import React, { useState, useEffect } from 'react'
import { useDataContext } from "../../Context/ContextData";
import { useParams } from 'react-router-dom'

const DetalleProducto = () => {

  const articulos = useDataContext()
  const [productoFiltrado, setProductoFiltrado] = useState([])
  
  const {productoId} = useParams()

  
  useEffect(() => {
  const productoFiltrado = async () => {
    const data = await articulos;
    const filtradoData = data.filter( (producto) => producto.id == productoId)
    setProductoFiltrado(filtradoData)


};
productoFiltrado()
}, [articulos]);



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

        </article>
      
      )
    })}
  

   </div>
  )
}

export default DetalleProducto