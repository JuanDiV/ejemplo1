/*import React from 'react'

function CarrouselInicio() {
  return (
    <div>
      
    </div>
  )
}

export default CarrouselInicio */



import React from "react";


const CarrouselInicio = () => {
return (
    
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/img/p1.png" className="d-block mx-auto" alt="..." width="80%" height="95%"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Zona Arqueológica de Palenque</h5>
              <p class="text-white bg-dark"> Es una de las ciudades arqueológicas más interesantes de México, conocerla es descubrir el 
                alma del mundo Maya; es entender mitos, rituales, creencias, y admirar la arquitectura majestuosa
                de nuestros antepasados.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/img/Bonam.jpg" className="d-block mx-auto" alt="..." width="80%" height="95%" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Zona Arqueológica de Bonampak</h5>
              <p class="text-white bg-dark">
                Ubicada en el corazón de la Selva Lacandona, cuyo apogeo ocurrió durante el gobierno de Jaguar-Ojo Anunado,
                que ascendió al trono de bonampak en 743 d.c. Del conjunto de ruinas, solamente la Gran Plaza y la Acrópolis 
                están exploradas.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/img/lag.jpg" className="d-block mx-auto" alt="..." width="80%" height="95%" />
            <div class="carousel-caption d-none d-md-block">
              <h5><strong>Zona Arqueológica el Lagartero</strong></h5>
              <p class="text-white bg-dark"> 
                Esta ubicada a 68 km de Comitán de Domínguez, en la colonia Cristobal Colón. Es una zona arqueológica
               de gran relevancia histórica por su desarrollo como centro cívico, religioso y cultural dentro del área Maya en una 
               cuenca superior del Río Grijalva.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default CarrouselInicio;