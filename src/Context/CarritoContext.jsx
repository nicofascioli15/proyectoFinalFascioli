import React, { useState, useContext } from 'react'

const CarritoContext = React.createContext([])
export const useCarritoContext = () => useContext(CarritoContext)



const CartProvider = ({children}) => {

  const [cart, setCart] = useState([])

  const agregarAlCarrito = (item, cantidad) => {
    if (buscarProductoEnCarrito(item.id)) {
      setCart(cart.map( producto =>{
        return producto.id === item.id ? {...producto, cantidad: producto.cantidad + cantidad } : producto
      }))
    }else {
      setCart ([...cart, {...item, cantidad}])
    }

    
  }

  const limpiarCarrito = () => setCart([])

  const buscarProductoEnCarrito = (id) =>  cart.find(producto => producto.id === id ) ? true : false 

  const borrarProducto = (id) => setCart(cart.filter (producto => producto.id !== id))


  const cantidadProductosCarrito = cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0)

  const importeTotalCarrito = cart.reduce ((acumulador, producto) => acumulador + producto.cantidad * producto.valor, 0)



  return (
    <CarritoContext.Provider value={{
      cart,
      limpiarCarrito,
      buscarProductoEnCarrito,
      borrarProducto,
      agregarAlCarrito,
      cantidadProductosCarrito,
      importeTotalCarrito
    }}>
      {children}
    </CarritoContext.Provider>
  )
}

export default CartProvider