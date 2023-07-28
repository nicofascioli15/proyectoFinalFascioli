import { BrowserRouter,Routes,Route } from "react-router-dom"
import ContextData from "./Context/ContextData"
import Layout from "./pages/Layout/Layout"
import Home from "./pages/Home/Home"
import ListadoProductos from "./pages/Productos/ListadoProductos"
import CategoriaProductos from "./pages/CategoriaProductos/CategoriaProductos"
import DetalleProducto from "./pages/DetalleProducto/DetalleProducto"
import Contacto from "./pages/Contacto/Contacto"
import Carrito from "./pages/Carrito/Carrito"
import Error from "./pages/Error/Error"

import "./app.css"
import "./components/Navbar/navBar.css"



function App() {


 
  return (
    <>
    <ContextData>
      <BrowserRouter>
		<Routes>
			<Route path="/" element={<Layout/> }>
			<Route index  element={<Home/>} />
      <Route path="Productos"  element={<ListadoProductos/>} />
      <Route path="Productos/:categoria"  element={<CategoriaProductos/>} />
      <Route path="Productos/:categoria/:productoId"  element={<DetalleProducto/>} />
      <Route path="/Contacto"  element={<Contacto/>} />
      <Route path="/Carrito"  element={<Carrito/>} />
      <Route path="*"  element={<Error/>} />
			</Route>
		</Routes>
      </BrowserRouter>
    </ContextData>
    </>
  )
}

export default App
