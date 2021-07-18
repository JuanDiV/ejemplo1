import React from 'react';
import {Link} from "react-router-dom";

const CarZon = () => {
    return (
        <div>

         <div class="container">
         <div class="row">
  <div class="col-sm-6">
    <div class="card">
    <img src ="/img/zonas/Palenque.jpg" class="card-img-top" alt="..."width="1%" height="1%"/>
      <div class="card-body">
        <h5 class="card-title">Zona Arqueológica Palenque</h5>
        <Link class="nav-link" to="/Palenque">
                  Ir
                </Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <img src ="/img/zonas/Yaxchilan.jpg" class="card-img-top" alt="..."width="3%" height="10%"/>
      <div class="card-body">
        <h5 class="card-title">Zona Arqueológica Yaxchilán</h5>
        <Link class="nav-link" to="/Yaxchilan">
                  Ir
                </Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <img src ="/img/zonas/Bonampak-1.jpg" class="card-img-top" alt="..."width="3%" height="10%"/>
      <div class="card-body">
        <h5 class="card-title">Zona Arqueológica Bonampak</h5>
        <Link class="nav-link" to="/Bonampak">
                  Ir
                </Link>
      </div>
    </div>
  </div>
  
      </div>
      </div>
      </div>
    );
}

export default CarZon;
