import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SymptomChecker from './pages/SymptomChecker';
import DoctorBooking from './pages/DoctorBooking';
import HomePage from './pages/HomePage';
import Medications from './pages/Medications';
import AboutUs from './pages/AboutUs';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen">
        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                  <Heart className="w-8 h-8 text-blue-600" />
                  <span className="text-xl font-bold text-gray-900">MediSense</span>
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <div className="flex items-center md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>

              {/* Desktop menu */}
              <div className="hidden md:flex md:items-center md:space-x-8">
                <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</Link>
                <Link to="/symptom-checker" className="text-gray-600 hover:text-blue-600 font-medium">Symptom Checker</Link>
                <Link to="/consultation" className="text-gray-600 hover:text-blue-600 font-medium">AI Chat/Book Doctor</Link>
                <Link to="/medications" className="text-gray-600 hover:text-blue-600 font-medium">Order Medications</Link>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium">About Us</Link>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute w-full bg-white shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">Home</Link>
                <Link to="/symptom-checker" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">Symptom Checker</Link>
                <Link to="/consultation" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">AI Chat/Book Doctor</Link>
                <Link to="/medications" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">Order Medications</Link>
                <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">About Us</Link>
                <button className="w-full text-left px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:shadow-lg transition-all duration-300 font-medium">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/symptom-checker" element={<SymptomChecker />} />
          <Route path="/consultation" element={<DoctorBooking />} />
          <Route path="/medications" element={<Medications />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-2">
                <Link to="/" className="flex items-center space-x-2">
                  <Heart className="w-8 h-8 text-white" />
                  <span className="text-xl font-bold text-white">MediSense</span>
                </Link>
                <p className="mt-6 text-gray-400 text-lg">
                  Your trusted healthcare companion. Access medical guidance anytime, anywhere.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">Home</Link></li>
                  <li><Link to="/symptom-checker" className="text-gray-400 hover:text-white transition-colors duration-200">Symptom Checker</Link></li>
                  <li><Link to="/consultation" className="text-gray-400 hover:text-white transition-colors duration-200">AI Chat/Book Doctor</Link></li>
                  <li><Link to="/medications" className="text-gray-400 hover:text-white transition-colors duration-200">Order Medications</Link></li>
                  <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
                <ul className="space-y-4">
                  <li className="text-gray-400 flex items-center">
                    <span className="mr-2">📧</span>
                    contact@medisense.com
                  </li>
                  <li className="text-gray-400 flex items-center">
                    <span className="mr-2">📱</span>
                    +1 (555) 123-4567
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm text-center">
                © 2024 MediSense. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;