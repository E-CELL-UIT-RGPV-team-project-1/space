import './App.css';

import Navbar from './navbar';
import Header from './header';
import Parteners from './partners';
import Timeline from './timeline';
import Footer from './footer';

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
    <Navbar/>
      <Routes>
        <Route path="/" element={< Timeline />} />
        <Route path="/Register" element={<Footer />}>
        </Route>
      </Routes>
    </BrowserRouter>

    // <Router>
    //   <div className="App">
    //     <Navbar />
    //     <Routes>
    //       <Route path="/Register">
    //       <Parteners />
    //       </Route>
    //       <Route path="/">
    //       element={
            
    //         <Timeline/>
    //         }
    //       </Route>
    //     </Routes>
    //     <Footer />
    //   </div>
    // </Router>
  );
}

export default App;
