import React, { useState, useEffect } from "react";
import ConexionApi from '../services/ConexionAxios';
//import { Toast } from "react-toastify/dist/components";
import { toast } from "react-toastify";



function Login() {
  const variablesInicio = {
    _id: "",
    nombre: "",
    apellidos: " ",
    comentario: "",
  };

  const [values, setValues] = useState(variablesInicio);
  const [persona, setPersonas]= useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const guardarPersonas=async()=>{
    await ConexionApi.post("/persona/crearPersona",{
      nombre: values.nombre,
      apellidos: values.apellidos,
      comentario: values.comentario
    }).then((res)=>{
      toast ("dato guardado correctamente",{
      position: "top-center",
      type: "succes",
      autoClose: 5000
    });

    });
    ListarPersonas();
  };

  const ListarPersonas=async()=>{
    const respuesta= await ConexionApi.get('/persona/listarPersonas');
    setPersonas(respuesta.data);
    console.log(respuesta.data);
  }

  const EliminarPersona=async(id)=>{
   if (window.confirm("¿Esta seguro de borrar los datos")){
   const eliminar= await ConexionApi.delete(`/persona/eliminarPersona/${id}`);
   console.log(eliminar.data);
  
   toast("los datos se han eliminado correctamente", {
   type:"error" ,
   position: "top-center",
   autoClose:3000
  })
   
  } 
    ListarPersonas();
  }

  const ListarOnePersona=async(id)=>{
    const res=await ConexionApi.get(`/persona/listarPersona/${id}`);
    setValues(res.data);
    ListarPersonas();
  }

  const updatePersona=async(id)=>{
 await ConexionApi.put(`/persona/actualizarPersona/${id}`,{
   nombre: values.nombre,
   apellidos: values.apellidos,
   comentario: values.comentario
 }).then((res)=>{
   console.log(res.data);
 });
 ListarPersonas();
  }

  const onClick = (e) => {
    e.preventDefault();
    //let suma=parseInt(values.numero1)+parseInt(values.numero2);
   /* alert(
      "Los datos son:" +
        values.nombre +
        " " +
        values.apellidos +
        " " +
        values.direccion
    );*/

    if(values._id===""){
      guardarPersonas();
    }else{
      updatePersona(values._id);
    }
   
    setValues(variablesInicio);
    
  };

  useEffect(() => {
   ListarPersonas();
  }, [])

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Sección de Comentarios</h2>
          <h5 className="card-subtitle mb-2 text-muted">
            Si desea dejar comentarios sobre la página favor de llenar los recuadros
          </h5>

          <form className="row g-3 needs-validation" onSubmit={onClick}>
            <div className="col-md-4">
              <label for="validationCustom01" class="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                value={values.nombre}
                onChange={onChange}
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4">
              <label for="validationCustom02" class="form-label">
                Apellidos
              </label>
              <input
                type="text"
                class="form-control"
                 name="apellidos"
                value={values.apellidos}
                onChange={onChange}
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4">
              <label for="validationCustom02" class="form-label">
                Comentarios
              </label>
              <input
                type="text"
                class="form-control"
                name="comentario"
                value={values.comentario}
                onChange={onChange}
                required
              />
            </div>         
            
            <div class="col-12">
              <button className="btn btn-primary" type="submit">
                {values._id===""? "Guardar":"Editar"}
              </button>
            
            </div>
          </form>
        </div>
        <hr/>
        <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Nombre</th>
      <th scope="col">Apellidos</th>
      <th scope="col">Comentarios</th>
      <th scope="col">Editar</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  {persona.map((person, index)=>(
    <tbody key={person._id}>
    <tr>
      
      <td>{person.nombre}</td>
      <td>{person.apellidos}</td>
      <td>{person.comentario}</td>
      <td><button type="button" class="btn btn-info" onClick={()=>ListarOnePersona(person._id)}>Editar</button></td>
      <td><button type="button" class="btn btn-danger" onClick={()=>EliminarPersona(person._id)}>Eliminar</button></td>
    </tr>
  </tbody>
  ))}
  
</table>
      </div>
    </div>
  );
}

export default Login;