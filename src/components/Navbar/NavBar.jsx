import React from "react";
import "../Navbar/navBar.css";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useCarritoContext } from '../../Context/CarritoContext'


const NavBar = () => {

  const {cantidadProductosCarrito} = useCarritoContext()


  return (
    <nav >
      <Link to="/"> <img src="https://ams3.digitaloceanspaces.com/graffica/2022/12/adidas_318-565831.webp" alt="Logo" /></Link>
      <ul className="navBar">
        <li><Link to="/"> Home </Link></li>
        <div className=" navbar-expand-lg">
          <div className="container-fluid">
            <div className="navbar-nav">
              <div className="nav-item dropdown">
                <div className=" dropdown-toggle" data-bs-toggle="dropdown"><Link className="productosDrop">Productos</Link></div>
                <div className="dropdown-menu dropdown-menu-dark">
                <li><Link to="/Productos" className="dropdown-item">Todos</Link></li>
                <li><Link to="/Productos/camisetas" className="dropdown-item">Camisetas</Link></li>
                <li><Link to="/Productos/zapatos" className="dropdown-item">Zapatos</Link></li>
                </div>
              </div>
            </div>

          </div>
        </div>




        <li><Link to="/Contacto"> Contacto </Link></li>
        <li><Link to="/Carrito"><span className="carrito"><BsFillCartFill /> {cantidadProductosCarrito}</span></Link> </li>
      </ul>
    </nav>
  );
};

export default NavBar;
