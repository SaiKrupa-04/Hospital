import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import logo from '../images/logo.jpg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-600">
            <img src={logo} className="rounded-[50px] w-[50px] h-[50px] border-2 " />
            <span>Anirudh Hospital</span>
          </Link>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-blue-600 focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><NavLink to="/" className={({isActive}) => 
                isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600 transition-colors"
              }>Home</NavLink></li>
              <li><NavLink to="/about" className={({isActive}) => 
                isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600 transition-colors"
              }>About</NavLink></li>
              <li><NavLink to="/services" className={({isActive}) => 
                isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600 transition-colors"
              }>Services</NavLink></li>
              <li><NavLink to="/doctor" className={({isActive}) => 
                isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600 transition-colors"
              }>Doctor</NavLink></li>
              <li><NavLink to="/location" className={({isActive}) => 
                isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600 transition-colors"
              }>Location</NavLink></li>
              <li><NavLink to="/facilities" className={({isActive}) => 
                isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600 transition-colors"
              }>Facilities</NavLink></li>
              <li><NavLink to="/contact" className={({isActive}) => 
                isActive ? "text-blue-600 font-medium bg-blue-50 px-4 py-2 rounded-md" : "text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors"
              }>Contact</NavLink></li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <ul className="flex flex-col space-y-3">
              <li><NavLink to="/" className={({isActive}) => 
                isActive ? "text-blue-600 font-medium block py-2" : "text-gray-700 block py-2"
              } onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/about" className={({isActive}) => 
                isActive ? "text-blue-600 font-medium block py-2" : "text-gray-700 block py-2"
              } onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
              <li><NavLink to="/services" className={({isActive}) => 
                isActive ? "text-blue-600 font-medium block py-2" : "text-gray-700 block py-2"
              } onClick={() => setIsMenuOpen(false)}>Services</NavLink></li>
              <li><NavLink to="/doctor" className={({isActive}) => 
                isActive ? "text-blue-600 font-medium block py-2" : "text-gray-700 block py-2"
              } onClick={() => setIsMenuOpen(false)}>Doctor</NavLink></li>
              <li><NavLink to="/location" className={({isActive}) => 
                isActive ? "text-blue-600 font-medium block py-2" : "text-gray-700 block py-2"
              } onClick={() => setIsMenuOpen(false)}>Location</NavLink></li>
              <li><NavLink to="/facilities" className={({isActive}) => 
                isActive ? "text-blue-600 font-medium block py-2" : "text-gray-700 block py-2"
              } onClick={() => setIsMenuOpen(false)}>Facilities</NavLink></li>
              <li><NavLink to="/contact" className={({isActive}) => 
                isActive ? "text-blue-600 font-medium block py-2 bg-blue-50 px-3 rounded-md" : "text-gray-700 block py-2 px-3 rounded-md"
              } onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;