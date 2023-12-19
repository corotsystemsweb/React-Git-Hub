
import Header from './components/Header';
import './assets/scss/App.scss';
import Default from './views/Default';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './views/Services';
import Contact from './views/Contact';
import AboutUs from './views/AboutUs';
import Rent from './views/Rent';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Default /> } />
        <Route path="/index/" element={ <Default /> } />
        <Route path="/services/" element={ <Services /> } />
        <Route path="/contact-us/" element={ <Contact /> } />
        <Route path="/about-us/" element={  <AboutUs /> } />
        <Route path="/rent-a-computer/" element={  <Rent /> } />
      </Routes>
      <Footer />
    
    </BrowserRouter> 
    </div>
  );
}

export default App;
