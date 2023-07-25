import React from 'react'
import { useDataContext } from "../../Context/ContextData";
import { useParams } from 'react-router-dom'

const DetalleProducto = () => {
  const articulos = useDataContext()
  
  const {productoId} = useParams()

  console.log (productoId)

      const productoFiltrado = articulos.filter( (producto) => producto.id == productoId)

      console.log (productoFiltrado)

  return (

   <div>

  

   </div>
  )
}

export default DetalleProducto