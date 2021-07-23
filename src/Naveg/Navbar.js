import React from "react";
import {Link} from "react-router-dom";
//import Registro from "../components/Registro/Registro";
import { useAuth0 } from "@auth0/auth0-react";
import Loginn from '../components/Loginn'
import Logout from "../components/Logout"

const Navbar = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

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
                  Comentarios
                </Link>
              </li>

              
            {isAuthenticated ? (
              <>
              <li class="nav-item">
              <Link class="nav-link" to="/">
                Inicio
              </Link>
            </li>
                <li class="nav-item">
                  
                   <Logout></Logout>
                  
                </li>
              </>
            ) : (
              <li class="nav-item">
                
                  <Loginn></Loginn>
                
              </li>
            )}
              
  
  
            </ul>
            
          </div>
        </div>
      </nav>


    </div>
  );
}

export default Navbar;