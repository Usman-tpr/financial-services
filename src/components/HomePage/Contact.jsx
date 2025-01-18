import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../Header";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Slide } from "react-reveal";

const Contact = () => {
  const { t } = useTranslation();
  const data = t("contact", {
    returnObjects: true
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Header header={data.title} description="We would love to hear from you. Get in touch with us today!" />
      <div className="p-8 flex justify-between items-center">
        {/* Address Section */}
        <div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-prime">{data.address.title}</h2>
            <div className="flex items-start mt-4">
              <FaMapMarkerAlt className="text-blue-500 text-2xl mr-2" />
              <p className="text-prime">{data.address.content}</p>
            </div>
          </div>

          {/* Email Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-prime">{data.email.title}</h2>
            <div className="flex items-start mt-4">
              <FaEnvelope className="text-blue-500 text-2xl mr-2" />
              <p className="text-prime">{data.email.content}</p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-prime">{data.phone.title}</h2>
            <div className="mt-4">
              {data.phone.numbers.map((number, index) => (
                <div key={index} className="flex items-start mt-2">
                  <FaPhoneAlt className="text-blue-500 text-2xl mr-2" />
                  <p className="text-prime">{number}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-[50%]">
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-white">Contact Form</h2>
            <form onSubmit={handleSubmit} className=" bg-prime p-4 mt-4 rounded-md">
              <Slide top duration={2000} className="mb-4">
                <label className="block text-white mt-4 font-bold"><span className="text-xl text-red-800">*</span>{data.contactForm.name}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-2 rounded-md"
                  placeholder="Enter your name"
                  required
                />
              </Slide>

              <Slide top duration={2000} className="mb-4">
                <label className="block text-white mt-4 font-bold"><span className="text-xl text-red-800">*</span>{data.contactForm.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-2 rounded-md"
                  placeholder="Enter your email"
                  required
                />
              </Slide>

              <Slide top duration={2000} className="mb-4">
                <label className="block text-white mt-4 font-bold"><span className="text-xl text-red-800">*</span>{data.contactForm.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-2 rounded-md"
                  placeholder="Your message"
                  required
                ></textarea>
              </Slide>

              <button
                type="submit"
                className="px-6 py-2 bg-yellow-500  mt-4 font-bold text-xl text-prime rounded "
              >
                {data.contactForm.button}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
