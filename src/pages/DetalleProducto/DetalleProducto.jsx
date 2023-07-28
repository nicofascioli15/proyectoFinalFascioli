import React, { useState, useEffect } from 'react'
import { useDataContext } from "../../Context/ContextData";
import { Link, useParams } from 'react-router-dom'
import { useCarritoContext } from '../../Context/CarritoContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'





const DetalleProducto = () => {

  const {agregarAlCarrito} = useCarritoContext()
  const articulos = useDataContext()
  const [productoFiltrado, setProductoFiltrado] = useState([])
  const [cantidad, setCantidad] = useState (1)
  const {productoId} = useParams()
  const Alerta = withReactContent(Swal)


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
  const [{stock}] = productoFiltrado 
  if (cantidad <= stock ){
  agregarAlCarrito(...productoFiltrado, cantidad)

  toast.success("Producto Agregado 😃", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });


  toast()
} else {  


 Alerta.fire({
    title: <p>NO TENEMOS TANTO STOCK</p>,
    didOpen: () => {
      Alerta.error()
    },


})

}}

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
          <ToastContainer />
        </article>

      )
    })}
  
  
   </div>
  )
}

export default DetalleProducto