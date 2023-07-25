import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from "../../components/Navbar/NavBar"
import Footer from "../../components/Footer/Footer"
const Layout = () => {
  return (
    <>
    <header>
      <NavBar/>
    </header>
    <main>
        <Outlet/>
    </main>

    <footer>
        <Footer/>
    </footer>
    </>
  )
}

export default Layout