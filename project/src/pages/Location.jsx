import React from 'react';
import { MapPin, Clock, Bus, Car, Phone } from 'lucide-react';

function Location() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Location</h2>
        <p className="text-lg text-gray-600 mb-8">
          We are located in the heart of the city, easily accessible by various modes of transportation.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] flex items-center justify-center p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.5170903044127!2d78.00358787515064!3d16.75093018403172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca28a8fbaa3817%3A0x3f97928e83e82408!2sAnirudh%20Hospital!5e0!3m2!1sen!2sin!4v1748813191228!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Anirudh Hospital Location"
            ></iframe>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <MapPin className="w-5 h-5 text-blue-600 mr-2" />
              Address
            </h3>
            <p className="text-gray-600">
              Door No. 1-4-130/A,<br />
              Behind Avanthi Hotel,<br />
              Bayamathota,<br />
              Mahabubnagar,<br />
              Telangana State
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Phone className="w-5 h-5 text-blue-600 mr-2" />
              Contact
            </h3>
            <p className="text-gray-600 mb-2">Phone:  8886333121</p>
            <p className="text-gray-600">Email: tmreddy04@gmail.com</p>
          </div>

        
        </div>
      </div>

     
    </div>
  );
}

export default Location;