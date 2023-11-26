import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Causes from "./Components/Causes";
import Documentacion from "./Components/Documentacion";
import Strategys from "./Components/Strategys";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Causes/>
      <Strategys/>
      <Documentacion/>
      <Footer/>
    </div>
  );
}

export default App;
