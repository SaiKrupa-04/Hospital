import React from 'react';
import { Award, Users, Heart, ShieldCheck } from 'lucide-react';

// Add import for the image (adjust the path if needed)
import h1 from '../images/h1.webp'; // Make sure the image is in this path

function About() {
  return (
    <div className="space-y-10">
      <section>
        
       
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <p className="text-lg text-gray-700 mb-6">
              Welcome to Anirudh Hospital, where patient care comes first. We have been providing exceptional healthcare services to our community for over 15 years.
            </p>
            
            <p className="text-gray-600 mb-6">
              Our mission is to deliver the highest quality medical care with compassion and respect for all patients. We strive to improve the health and wellbeing of the communities we serve through dedication to excellence, quality, and innovation in healthcare.
            </p>
            
            <p className="text-gray-600">
              At Anirudh Hospital, we combine advanced medical technology with a team of experienced healthcare professionals to ensure that every patient receives personalized care in a comfortable and healing environment.
            </p>
          </div>
        </div>
      </section>
   

<div className="flex flex-col md:flex-row items-center md:items-start mb-8 gap-6 md:gap-10">
  <div className="flex-shrink-0 mb-4 md:mb-0 flex justify-center w-full md:w-auto">
    <img
      src={h1}
      alt="Anirudh Hospital"
      className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-2xl shadow-lg border-4 "
    />
  </div>
  <div className="bg-blue-50 rounded-xl p-4 sm:p-6 shadow flex-1 w-full">
    <h4 className="text-lg sm:text-xl font-bold text-blue-700 mb-2 flex items-center">
      <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      Address
    </h4>
    <address className="not-italic text-gray-700 leading-relaxed text-base sm:text-lg">
      Door No. 1-4-130/A,<br />
      Behind Avanthi Hotel,<br />
      Bayamathota,<br />
      Mahabubnagar,<br />
      Telangana State
    </address>
  </div>
</div>

      {/* Values Section */}
      <section>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Core Values</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
              <Heart size={24} />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Compassion</h4>
              <p className="text-gray-600">We treat each patient with kindness, empathy, and respect, recognizing their individual needs and concerns.</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
              <Award size={24} />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Excellence</h4>
              <p className="text-gray-600">We are committed to achieving the highest standards of quality and safety in healthcare delivery.</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Integrity</h4>
              <p className="text-gray-600">We adhere to the highest ethical standards and are transparent in all our interactions.</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
              <Users size={24} />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Teamwork</h4>
              <p className="text-gray-600">We collaborate effectively across disciplines to provide comprehensive and coordinated care.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;