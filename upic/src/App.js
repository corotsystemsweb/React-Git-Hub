import Header from './components/Header';
import './assets/scss/App.scss';
import Default from './views/Default';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './views/AboutUs';
import Course from './views/Course';
import PhotoGallery from './views/PhotoGallery';
import Contact from './views/Contact';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Default /> } />
        <Route path="/index/" element={ <Default /> } />
        <Route path="/about-us/" element={  <AboutUs /> } />
        <Route path="/course/" element={ <Course /> } />
        <Route path="/photo-gallery/" element={ <PhotoGallery /> } />
        <Route path="/contact-us/" element={  <Contact /> } />
      </Routes>
      <Footer />
    </BrowserRouter> 
    </div>
  );
}

export default App;
