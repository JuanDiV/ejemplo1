import React from "react";
import CarrouselInicio from "../components/carrousel/CarrouselInicio";
//import Menu from '../components/menu/Menu';
//import FormDatos from '../components/FormDatos';

const Inicio = () => {
    return (
      <div >
        
      <CarrouselInicio/>  
      <div class="container">
      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <h3>¿Qué es TuristApp?</h3>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        
      <div class="container"> TuristApp es una plataforma web que va enfocada a que usuarios de distintas lugares del país y de todo el mundo
      puedan conocer diversos destinos turísticos en la Zona de Palenque, Chiapas y alrededores. Además de conocer información referente a ello. Con esto
      se pretende dar a conocer más a las zonas que son de gran relevancia para el turismo y la economía de estas zonas.
      Así como también generar más publicidad a dichas sitios para que las personas que deseen conocer o saber algo de estos puedan tener una forma factible 
      de hacerlo</div>
    </div>
    </div>
  </div>
  
  </div>
  
</div>
</div>

      )
      
}
export default Inicio;