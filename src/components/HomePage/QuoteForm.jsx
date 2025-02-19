import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { Slide } from "react-reveal";
import { Link } from "react-router-dom";

const services = [
  "Taxation Services",
  "Advisory Services",
  "Financial Consulting",
  "Legal Compliance",
  "Investment Consulting"
];

const QuoteForm = ({ showForm, setShowForm }) => {
  const [formData, setFormData] = useState({
    email: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Your request has been submitted!");
    setShowForm(false); // Hide form after submission
  };

  return (
    <>
      {/* Fullscreen Overlay (Background Dim) */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShowForm(false)}
        >
          {/* Quote Form Container */}
          <Slide top duration={500}>
            <div
              className="bg-white shadow-lg p-6 rounded-md w-[50%] border relative"
              onClick={(e) => e.stopPropagation()} // Prevent background click from closing form
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">Request a Quote</h2>
                <CgClose
                  className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer"
                  onClick={() => setShowForm(false)}
                />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                {/* Email Field */}
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-prime"
                />

                {/* Services Dropdown */}
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-prime"
                >
                  <option value="">Select a Service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>

                {/* Message Field */}
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-prime"
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-prime text-white py-2 rounded-md hover:bg-opacity-90"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </Slide>
        </div>
      )}
    </>
  );
};

export default QuoteForm;
