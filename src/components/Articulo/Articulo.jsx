import React from "react";
import { useDataContext } from "../../Context/ContextData";
import "bulma/css/bulma.css"
import "../Articulo/articulo.css"
import { Link} from "react-router-dom";


const Articulo = () => {
const articulos = useDataContext()

  return (

    <>
    <article className="cardFlex container">
      {articulos.map((articulo) => {
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
};

export default Articulo;
