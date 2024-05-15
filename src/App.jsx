import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import Navigation from './pages/Navigation';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  const isHomePage = window.location.pathname === '/';
  if (isHomePage) {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} /> 
            <Route path="/about" element={<AboutPage />} /> 
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/about" element={<AboutPage />} /> 
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );  
}

export default App;


