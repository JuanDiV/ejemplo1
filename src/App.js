//import Principal from './Principal';
//import FormDatos from './components/FormDatos';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './Naveg/Navbar';
import Inicio from './pages/Inicio';
import Sitios from './pages/Sitios';
import Login from './components/Login';
//import FormDatos from './components/FormDatos';


function App() {
  return (
    <div className="App"> 
    <Router>
    <Navbar/>
    <Switch>
      <Route path="/" exact component={Inicio} />
      <Route path="/Sitios" exact component={Sitios}/>
      <Route path="/Login" exact component={Login}/>
    
    </Switch>
    </Router>
    
    </div>
      
  );
}

export default App;
