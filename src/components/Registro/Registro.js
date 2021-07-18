import React from 'react';
import './estilo.css';

function Registro() {
    return (
        <div>
            <section class="form-register">
                <h4>Formulario de Registro</h4>
                
                <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre"/>
                <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Apellido"/>
                <input class="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo"/>
                <input class="controls" type="password" name="correo" id="correo" placeholder="Ingrese su Contraseña"/>
                <input class="botons" type="submit" value="Registrar"/>
                <p><a href="...">¿Ya tengo Cuenta?</a></p>
            </section>
        </div>
    )
}

export default Registro