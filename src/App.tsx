import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import FormColaborador from './components/colaborador/formcolaborador/FormColaborador';
import BuscarCargo from './components/cargos/buscarcargos/BuscarCargo';
import BuscarColaborador from './components/colaborador/buscarcolaborador/BuscarColaborador';
import Sobre from './pages/sobre/sobre';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/cadastrarcolaborador" element={<FormColaborador/>} />
      <Route path="/buscarcolaborador" element={<BuscarColaborador />} /> 
      <Route path="/buscarcargo" element={<BuscarCargo />} /> 
      <Route path="/sobre" element={<Sobre/>} /> 
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;


