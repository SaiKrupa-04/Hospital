import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    date: '',
    time: '',
    department: 'General Checkup',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, info: { error: false, msg: null } });

    try {
      const response = await fetch("https://hospital-2fm9.onrender.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          submitted: true,
          submitting: false,
          info: {
            error: false,
            msg: 'Appointment confirmed! We will send you an SMS confirmation.',
          },
        });
        setFormData({
          name: "",
          number: "",
          date: "",
          time: "",
          department: "General Checkup",
          message: ''
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Unknown error');
      }
    } catch (err) {
      console.error(err);
      setStatus({
        submitted: false,
        submitting: false,
        info: {
          error: true,
          msg: 'Error booking appointment. Please try again later.',
        },
      });
    }
  };

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          Book an appointment or reach out to us with any questions you may have.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Book an Appointment</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="number" className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-gray-700 font-medium mb-2">Preferred Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="department" className="block text-gray-700 font-medium mb-2">Department</label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="General Checkup">General Checkup</option>
                <option value="Obstetrics">Obstetrics</option>
                <option value="Gynecology">Gynecology</option>
                <option value="Pediatrics">Pediatrics</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Additional Information</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors w-full disabled:bg-blue-400"
              disabled={status.submitting}
            >
              {status.submitting ?
                'Booking...' :
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Book Appointment
                </>
              }
            </button>

            {status.info.msg && (
              <div className={`p-4 rounded-md ${status.info.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                {status.info.msg}
              </div>
            )}
          </form>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600 flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Address</h4>
                <p className="text-gray-600">
                  Door No. 1-4-130/A,<br />
                  Behind Avanthi Hotel,<br />
                  Bayamathota,<br />
                  Mahabubnagar,<br />
                  Telangana State
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600 flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Phone</h4>
                <p className="text-gray-600">Reception: 8886333121</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600 flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Email</h4>
                <p className="text-gray-600">tmreddy04@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600 flex-shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Hours</h4>
                <p className="text-gray-600">Outpatient Department: Mon-Sat, 8:00 AM - 8:00 PM</p>
                <p className="text-gray-600">Emergency Services: 24/7</p>
                <p className="text-gray-600">Pharmacy: 24/7</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">Emergency?</h4>
            <p className="text-gray-700 mb-4">If you're experiencing a medical emergency, please call our emergency hotline or visit our emergency department immediately.</p>
            <p className="text-xl font-bold text-blue-700">8886333121</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
