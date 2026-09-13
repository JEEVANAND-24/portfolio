import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Terminal from './pages/Terminal';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="app-shell">
        <Header />
        <div className="app-body">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/"            element={<Dashboard />} />
              <Route path="/about"       element={<About />} />
              <Route path="/portfolio"   element={<Portfolio />} />
              <Route path="/resume"      element={<Resume />} />
              <Route path="/skills"      element={<Skills />} />
              <Route path="/contact"     element={<Contact />} />
              <Route path="/terminal"    element={<Terminal />} />
              <Route path="*"           element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  </ThemeProvider>
);
}
