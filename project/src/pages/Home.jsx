import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Clock, Phone, Calendar } from 'lucide-react';

function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-blue-50 rounded-xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">Welcome to Anirudh Hospital</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">Your Health is Our Priority</p>
          <p className="text-gray-600 mb-8">
            We are committed to providing exceptional healthcare services with compassion and personalized care.
            With state-of-the-art facilities and experienced medical professionals, we ensure the highest quality
            of medical care for all our patients.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Book Appointment
            </Link>
            <Link to="/services" className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Stethoscope size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
            <p className="text-gray-600">Highly qualified and experienced medical professionals dedicated to your care.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
            <p className="text-gray-600">Round-the-clock emergency services to address all your medical needs.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Phone size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Teleconsultation</h3>
            <p className="text-gray-600">Virtual consultations for your convenience when you can't visit in person.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Calendar size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
            <p className="text-gray-600">Simple appointment booking process through our online system.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Medical Assistance?</h2>
        <p className="text-xl mb-6">Our team of healthcare professionals is ready to help you</p>
        <Link to="/contact" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
          Book an Appointment Today
        </Link>
      </section>
    </div>
  );
}

export default Home;