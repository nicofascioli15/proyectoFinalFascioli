import React from 'react'
import "../Home/home.css"
import { Link } from 'react-router-dom'
import Carrousel from '../../components/Carrousel/Carrousel'


const Home = () => {
  return (
    <>
    <div className='fondoHome'>

      <h1 className='tituloPrincipal'><b>IMPOSSIBLE IS NOTHING - WELCOME TO ADIDAS</b></h1>
      <div className='contenedorCajaFondo'>
      <section className='mostrarProductos'>
        <h3>NUESTRA COLECCION DE PRODUCTOS 2023</h3>
        <Link to="/Productos" className="btn btn-warning">Productos</Link>
      </section>
      </div>
  
    </div>

    <Carrousel/>
</>


  )}

export default Home