import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Causes from "./Components/Causes";
import Documentacion from "./Components/Documentacion";
import Strategys from "./Components/Strategys";
import Links from "./Components/Links";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/descargas" element={<Links />} />
          <Route
            path="/"
            element={
              <div>
                  <Navbar/>
                  <Home/>
                  <About/>
                  <Causes/>
                  <Strategys/>
                  <Documentacion/>
                  <Footer/> 
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

