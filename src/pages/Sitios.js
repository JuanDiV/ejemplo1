import React from "react";
import {Link} from "react-router-dom";
//import CarrouselInicio from "../components/carrousel/CarrouselInicio";

const Inicio = () => {
return (
     
<div >
<div class="container">
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Zonas Arqueológicas
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">

      <div class="row">
  <div class="col-sm-6">
    <div class="card">
    <img src ="/img/zonas/Palenque.jpg" class="card-img-top" alt="..."width="3%" height="10%"/>
      <div class="card-body">
        <h5 class="card-title">Zona Arqueológica de Palenque</h5>
        <Link href="#" class="btn btn-primary">Ir</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <img src ="/img/zonas/Bonampak-1.jpg" class="card-img-top" alt="..."width="3%" height="10%"/>
      <div class="card-body">
        <h5 class="card-title">Zona Arqueológica Bonampak</h5>
        <Link href="#" class="btn btn-primary">Ir</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <img src ="/img/zonas/Lagartero.jpg" class="card-img-top" alt="..."width="3%" height="10%"/>
      <div class="card-body">
        <h5 class="card-title">Zona Arqueológica el Lagartero</h5>
        <Link href="#" class="btn btn-primary">Ir</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <img src ="/img/zonas/Yaxchilan.jpg" class="card-img-top" alt="..."width="3%" height="10%"/>
      <div class="card-body">
        <h5 class="card-title">Zona Arqueológica de Yaxchilán</h5>
        <Link href="#" class="btn btn-primary">Ir</Link>
      </div>
    </div>
  </div>

</div>



      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Centros Turísticos
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">

      <div class="row">
  <div class="col-sm-6">
    <div class="card">
    <img src ="/img/centros/Metzabok.jpg" class="card-img-top" alt="..."width="3%" height="10%"/>
      <div class="card-body">
        <h5 class="card-title">Centro Turístico Metzabok</h5>
        <Link href="#" class="btn btn-primary">Ir</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <img src ="/img/centros/Cotorras.jpg" class="card-img-top" alt="..."width="3%" height="10%"/>
      <div class="card-body">
        <h5 class="card-title">Centro Turístico Sima de las Cotorras</h5>
        <Link href="#" class="btn btn-primary">Ir</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <img src ="img/centros/misol.jpg" class="card-img-top" alt="..."width="3%" height="10%"/>
      <div class="card-body">
        <h5 class="card-title">Centro Turístico Misol Há</h5>
        <Link href="#" class="btn btn-primary">Ir</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <img src ="/img/centros/Agua.jpg" class="card-img-top" alt="..."width="3%" height="10%"/>
      <div class="card-body">
        <h5 class="card-title">Centro Turístico Cascadas Agua Azul</h5>
        <Link href="#" class="btn btn-primary">Ir</Link>
      </div>
    </div>
  </div>
</div>

    </div>
      </div>
  </div>
  

  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Bellezas Naturales
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" >    
      
      
      <div class="row">
  <div class="col-sm-6">
    <div class="card">
    <img src ="/img/bellezas/Welib.gif" class="card-img-top" alt="..."width="1%" height="1%"/>
      <div class="card-body">
        <h5 class="card-title">Cascadas Welib Há</h5>
        <Link href="#" class="btn btn-primary">Ir</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <img src ="/img/bellezas/Monteb.jpg" class="card-img-top" alt="..."width="3%" height="10%"/>
      <div class="card-body">
        <h5 class="card-title">Lagunas de Montebello</h5>
        <Link href="#" class="btn btn-primary">Ir</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <img src ="/img/bellezas/cañon.jpg" class="card-img-top" alt="..."width="3%" height="10%"/>
      <div class="card-body">
        <h5 class="card-title">Parque Nacional Cañón del Sumidero</h5>
        <Link href="#" class="btn btn-primary">Ir</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <img src ="img/bellezas/chiflon.jpg" class="card-img-top" alt="..."width="3%" height="10%"/>
      <div class="card-body">
        <h5 class="card-title">Cascadas El Chiflón</h5>
        <Link href="#" class="btn btn-primary">Ir</Link>
      </div>
    </div>
  </div>
</div>
      
      
          </div>
    </div>
  </div>
  
</div>
</div>
</div>

      )
      
}
export default Inicio;