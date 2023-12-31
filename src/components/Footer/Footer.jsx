import React from 'react'
import "../Footer/footer.css"
import { FaFacebook,FaTwitter,FaYoutube, FaLinkedin} from 'react-icons/fa'



const Footer = () => {

  const handleSubmit=()=> {
    
  }

  return (
    <div className='footer'>

      <div className='container footerContainer'>

      
    <div className='redesSociales'>

    <h5>Seguinos</h5>

    <section>
      <a href="facebook.com"className='itemRedes' ><FaFacebook/> </a>
      <a href="facebook.com"className='itemRedes' > <FaTwitter/> </a>
      <a href="facebook.com"className='itemRedes' ><FaYoutube/></a>
      <a href="facebook.com"className='itemRedes' ><FaLinkedin/></a>
    </section>

    </div>

    

    <div className="suscripciones">

    <h5>Suscribite para recibir las mejores ofertas de invierno y verano</h5>
    <form action="">
    <input type="text" placeholder='Indicanos tu mail' />
     <button onClick={handleSubmit} type='submit' className='btn btn-danger'>suscribirme</button>

    </form>

    </div>

    
   
    </div>


    </div>
  )
}

export default Footer