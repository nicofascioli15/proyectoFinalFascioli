import React from 'react'

const Carrousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
<div className="carousel-inner">
  <div className="carousel-item active">
    <img src="https://www.soccerbible.com/media/111926/pred-3-min.jpg" className="d-block w-100" alt="..."/>
  </div>
  <div className="carousel-item">
    <img src="https://media.a24.com/p/39b8bce2aa1e17e7315955af26d92e55/adjuntos/296/imagenes/009/169/0009169092/1200x675/smart/messi_intermiami2jpg.jpg" className="d-block w-100" alt="..."/>
  </div>
  <div className="carousel-item">
    <img src="https://s3-us-west-1.amazonaws.com/urbanpitch/wp-content/uploads/2017/10/11101620/A34I4707.jpg" className="d-block w-100" alt="..."/>
  </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>
  )
}

export default Carrousel