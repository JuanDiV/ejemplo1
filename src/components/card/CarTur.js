import React from 'react';
import {Link} from "react-router-dom";

const CarTur = () => {
    return (
        <div>
         
         <div class="container">

  <div class="col-sm-6">
    <div class="card">
    <img src ="/img/centros/Cotorras.jpg" class="card-img-top" alt="..."width="1%" height="1%"/>
      <div class="card-body">
        <h5 class="card-title">Centro Turístico Sima de las cotorras </h5>
        <Link class="nav-link" to="/Sima">
                  Ir
                </Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <img src ="/img/centros/Metzabok.jpg" class="card-img-top" alt="..."width="3%" height="1%"/>
      <div class="card-body">
        <h5 class="card-title">Centro Turístico Metzabok</h5>
        <Link class="nav-link" to="/Metza">
                  Ir
                </Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <img src ="img/centros/Agua.jpg" class="card-img-top" alt="..."width="3%" height="1%"/>
      <div class="card-body">
        <h5 class="card-title">Centro Turístico Cascadas de Agua Azul</h5>
        <Link class="nav-link" to="/Cascadas">
                  Ir
                </Link>
      </div>
      </div>
      </div>
      </div>
      </div>
      
    );
}

export default CarTur;
