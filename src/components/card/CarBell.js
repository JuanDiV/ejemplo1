import React from 'react';
import {Link} from "react-router-dom";

const CarBell = () => {
    return (
        <div>

<div class="container">
         <div class="row">
  <div class="col-sm-6">
    <div class="card">
    <img src ="/img/bellezas/Monteb.jpg" class="card-img-top" alt="..."width="3%" height="10%"/>
      <div class="card-body">
        <h5 class="card-title">Lagunas de Montebello</h5>
        <Link class="nav-link" to="/Montebello">
                  Ir
                </Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <img src ="/img/bellezas/cañon.jpg" class="card-img-top" alt="..."width="3%" height="10%"/>
      <div class="card-body">
        <h5 class="card-title">Parque Nacional Cañón del Sumidero</h5>
        <Link class="nav-link" to="/Cañon">
                  Ir
                </Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <img src ="img/bellezas/chiflon.jpg" class="card-img-top" alt="..."width="3%" height="10%"/>
      <div class="card-body">
        <h5 class="card-title">Cascadas El Chiflón</h5>
        <Link class="nav-link" to="/Chiflon">
                  Ir
                </Link>
      </div>
      </div>
      </div>
      </div>
      </div></div>
    );
}

export default CarBell;