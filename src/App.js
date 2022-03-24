 import './App.css';
import Navbar from './nav-footer/navbar';
import Header from './home/header';
import Footer from './nav-footer/footer';
import Organiser from './organiser/Organiser';
import Instruction from './Components/Instructions';
import Nav_two from './Components/Header';
import Button_top from "./nav-footer/butten_to_top";


import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";



function App() {
  return (

    <BrowserRouter>
    <Nav_two/>
      <Routes>
        <Route path="/" element={< Header />} />
        <Route path="/Register" element={< Instruction/>}/>
        <Route path="/Organiser" element={<Organiser/>}/>
      </Routes>
      <Footer/>
      <Button_top/>
    </BrowserRouter>
    
  );
}

export default App;
