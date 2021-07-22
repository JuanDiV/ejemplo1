//import Principal from './Principal';
//import FormDatos from './components/FormDatos';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './Naveg/Navbar';
import Footer from './Naveg/Footer';
import Inicio from './pages/Inicio';
import Sitios from './pages/Sitios';
import Login from './components/Login';
import Registro from './components/Registro/Registro';
import Bonampak from './Ventanas/Bonampak';
import Palenque from './Ventanas/Palenque';
import Yaxchilan from './Ventanas/Yaxchilan';
import Cascadas from './Ventanas/Cascadas';
import Sima from './Ventanas/Sima';
import Metza from './Ventanas/Metza';
import Cañon from './Ventanas/Cañon';
import Montebello from './Ventanas/Montebello';
import Chiflon from './Ventanas/Chiflon';

//import FormDatos from './components/FormDatos';

import { ToastContainer } from 'react-toastify';
//import { Toast } from "react-toastify/dist/components";

function App() {
  return (
    <div className="App"> 
    <Router>
    <Navbar/>
    

    <Switch>
      <Route path="/" exact component={Inicio} />
      <Route path="/Sitios" exact component={Sitios}/>
      <Route path="/Registro" exact component={Registro}/>
      <Route path="/Bonampak" exact component={Bonampak}/>
      <Route path="/Palenque" exact component={Palenque}/>
      <Route path="/Yaxchilan" exact component={Yaxchilan}/>
      <Route path="/Cascadas" exact component={Cascadas}/>
      <Route path="/Sima" exact component={Sima}/>
      <Route path="/Metza" exact component={Metza}/>
      <Route path="/Cañon" exact component={Cañon}/>
      <Route path="/Montebello" exact component={Montebello}/>
      <Route path="/Chiflon" exact component={Chiflon}/>
      <Route path="/Login" exact component={Login}/>
    
    </Switch>
    </Router>
    
    <ToastContainer/>
    <Footer/>
    </div>
      
  );
}

export default App;