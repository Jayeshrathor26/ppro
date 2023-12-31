import React from 'react' 


function Carousel() {
  return (
   <>
   
   <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 " src= "https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_1280.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2012/06/25/15/34/berlin-wall-50727_1280.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381_1280.jpg" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
   
   </>
  )
}

export default Carousel
