import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Home />
      <Routes>
      
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;


