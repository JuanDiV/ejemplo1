import React from "react";
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            <h1>
            TuristApp
            </h1>
          </Link>
          <button
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Inicio
                </Link>

              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Sitios">
                  Sitios
                </Link>
              </li>

              
              <li class="nav-item">
                <Link class="nav-link" to="/Login">
                  Login
                </Link>
              </li>
              
  
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>


    </div>
  );
}

export default Navbar;