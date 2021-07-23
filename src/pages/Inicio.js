import React from "react";
import CarrouselInicio from "../components/carrousel/CarrouselInicio";
//import Sidebar from "../components/sidebar/Sidebar";
//import Menu from '../components/menu/Menu';
//import FormDatos from '../components/FormDatos';

const Inicio = () => {
    return (
      <div >
        
      <CarrouselInicio/>  
      
      
      <div class="container">
      <div class="card">
       
       <br></br>
       <h1>
         TuristApp
       </h1>
  <div class="card-body">
   <p align="left">TuristApp es una plataforma web que va enfocada a que usuarios de distintas lugares del país y de todo el mundo
      puedan conocer diversos destinos turísticos en la Zona de Palenque, Chiapas y alrededores. Además de conocer información referente a ello. Con esto
      se pretende dar a conocer más a las zonas que son de gran relevancia para el turismo y la economía de estas zonas.
      Así como también generar más publicidad a dichas sitios para que las personas que deseen conocer o saber algo de estos puedan tener una forma factible 
      de hacerlo. En esta página encontrara información refente a:</p>
  </div>
</div>
<div class="card-group">
  <div class="card">
    <img src="/img/1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Arqueología</h5>
      <p class="card-text">Los sitios arqueológicos tienen un sin fin de historias que contar y un paisaje digno de disfrutar. Ya sean 
      en el desierto, en la montaña o en la selva, todos éstos lugares ofrecen tradiciones, leyendas y en ocasiones enigmas por decifrar.</p>
      
    </div>
  </div>
  <div class="card">
    <img src="/img/2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Sitios Turísticos</h5>
      <p class="card-text"> En el estado de Chiapas podemos encontrar con localidades las cuales dentro de su radio de influencia geográfico
      cuentan con diversos atractivos turísticos, infraestructura y facilidades que permiten la llegada y estadía de visitantes.</p>
      
    </div>
  </div>
  <div class="card">
    <img src="img/3.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Naturaleza</h5>
      <p class="card-text">El estado cuenta con lugares emblemáticos. Por lo cual nunca deben de pasar desapercibido las distintas bellezas naturales
      que Chiapas puede ofrecer; Lagos, cascadas y parques son solo algunos ejemplos de lo que la naturaleza nos regala para disfrutar de su paisaje.</p>
     
    </div>
  </div>
</div>

  
</div>
</div>

      )
      
}
export default Inicio;




