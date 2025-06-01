import React from 'react';
import { Heart, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg'; // Adjust the path if needed

function Footer() {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} className="rounded-[50px] w-[50px] h-[50px] border-2 " />
              <h3 className="text-xl font-bold">Anirudh Hospital</h3>
            </div>
            <p className="mb-4">Providing quality healthcare services with compassion and care.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-200 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-200 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-200 transition-colors">Services</Link></li>
              <li><Link to="/doctor" className="hover:text-blue-200 transition-colors">Doctors</Link></li>
              <li><Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-200 transition-colors">General Checkups</li>
              <li className="hover:text-blue-200 transition-colors">Specialist Consultations</li>
              <li className="hover:text-blue-200 transition-colors">Emergency Services</li>
              <li className="hover:text-blue-200 transition-colors">24/7 Pharmacy</li>

            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Door No. 1-4-130/A,Behind Avanthi Hotel, Bayamathota,Mahabubnagar, Telangana State</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>8886333121</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>tmreddy04@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span>24/7 Emergency Services</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-500 mt-8 pt-6 text-center">
          <p>All Rights Reserved © 2025 Anirudh Hospital</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;