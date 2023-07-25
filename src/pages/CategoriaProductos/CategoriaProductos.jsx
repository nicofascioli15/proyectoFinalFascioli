import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDataContext } from "../../Context/ContextData";



const CategoriaProductos = () => {

    const articulos = useDataContext()
    const [categoriaFiltrada, setCategoriaFiltrada] = useState([])
    
    const {categoria} = useParams()
  
    
    useEffect(() => {
    const productoFiltrado = async () => {
      const data = await articulos;
      const FiltradoCategoria = data.filter( (producto) => producto.categoria == categoria)
      setCategoriaFiltrada(FiltradoCategoria)

  };
  if (categoria != categoriaFiltrada){
    productoFiltrado()
  }
  },[categoria]);

  

  return (

    <>
    <article className="cardFlex container">
      {categoriaFiltrada.map((articulo) => {
        return (
      
          <div key={articulo.id} className="card column is-3">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={articulo.imagen} alt={articulo.titulo} />
              </figure>
            </div>
            <div className="card-content">
            <h3>{articulo.titulo}</h3>
            <p>Talle {articulo.talle}</p>
            <h5>$ {articulo.valor}</h5>
            <p>Stock <b>{articulo.stock}</b> unidades</p>
            </div>
            <Link to={`/Productos/${articulo.categoria}/${articulo.id}`} className="btn btn-dark"> Detalles</Link>
          </div>
          
        );
        
      })}
      </article> 
    </>
  );
}

export default CategoriaProductos