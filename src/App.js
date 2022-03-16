import './App.css';

import Navbar from './navbar';
import Parteners from './partners';
import Timeline from './timeline';
import Footer from './footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Timeline/>
     <Parteners/>
     <Footer/>
    </div>
  );
}

export default App;
