import React from 'react';
import { Heart, Brain, Stethoscope,Users, Baby, Bone, Activity, Eye, Pill } from 'lucide-react';

function Services() {
  const services = [
    {
      title: "General Checkups",
      description: "Comprehensive health assessments to evaluate your overall health status.",
      icon: <Stethoscope className="w-8 h-8" />
    },
   
       {
  title: "Obstetrics & Gynecology",
  description: "Comprehensive care for women's reproductive health, pregnancy, and childbirth.",
  icon: <Users className="w-8 h-8" />
},
    {
      title: "Pediatrics",
      description: "Dedicated care for infants, children, and adolescents.",
      icon: <Baby className="w-8 h-8" />
    },

   
    {
      title: "Emergency Services",
      description: "24/7 emergency care for critical and urgent medical conditions.",
      icon: <Activity className="w-8 h-8" />
    },
   
    {
      title: "Pharmacy",
      description: "24/7 pharmacy services with a wide range of medications and health products.",
      icon: <Pill className="w-8 h-8" />
    }
  ];

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 mb-8">
          At Anirudh Hospital, we offer a comprehensive range of medical services to meet all your healthcare needs. Our experienced team of medical professionals is dedicated to providing high-quality care using the latest advancements in medical technology.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-blue-50 p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Specialist Consultations</h3>
        <p className="text-gray-600 mb-4">
          Our hospital provides consultations with specialists in various medical fields. Our doctors are highly qualified and experienced professionals who are dedicated to providing the best possible care to our patients.
        </p>
        <p className="text-gray-600">
          To schedule a consultation with one of our specialists, please visit our Contact page or call our reception desk.
        </p>
      </section>

      <section className="bg-blue-600 text-white p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Need Emergency Care?</h3>
        <p className="text-xl mb-6">Our emergency department is open 24/7</p>
        <p className="text-lg font-semibold">Emergency Hotline: 8886333121</p>
      </section>
    </div>
  );
}

export default Services;