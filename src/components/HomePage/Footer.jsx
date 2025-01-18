import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // handle subscription logic
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-2 px-4">
      <div className="container flex space-x-20">
        {/* Company Info */}

        <div className="space-y-6 w-[50%]">
          <h3 className="text-3xl font-bold">{t("footer.about_title")}</h3>
          <h3 className="text-md font-medium"><span className="text-xl">{t("footer.brand_name")}</span>{t("footer.about_desc")}</h3>
          {/* <p>{t("footer.address")}</p>
          <p className="flex items-center">
            <AiOutlinePhone className="mr-2 text-xl" />
            {t("footer.phone")}
          </p>
          <p className="flex items-center">
            <AiOutlineMail className="mr-2 text-xl" />
            {t("footer.email")}
          </p> */}
        </div>

        {/* About Us */}
        <div className="space-y-4 sm:mt-14">
          <h3 className="text-xl font-bold bg-white rounded text-prime px-4 w-32 ">{t("footer.about_us")}</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-yellow-500">{t("footer.about_menu1")}</a>
            </li>
            <li>
              <a href="/services" className="hover:text-yellow-500">{t("footer.about_menu2")}</a>
            </li>
            <li>
              <a href="/sectors" className="hover:text-yellow-500">{t("footer.about_menu3")}</a>
            </li>
            <li>
              <a href="/clients" className="hover:text-yellow-500">{t("footer.about_menu4")}</a>
            </li>
        
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4 sm:mt-14">
          <h3 className="text-xl font-bold bg-white rounded text-prime px-4 w-36 ">{t("footer.services")}</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-yellow-500">{t("footer.services_menu1")}</a>
            </li>
            <li>
              <a href="/services" className="hover:text-yellow-500">{t("footer.services_menu2")}</a>
            </li>
            <li>
              <a href="/sectors" className="hover:text-yellow-500">{t("footer.services_menu3")}</a>
            </li>
          </ul>
        </div>


        {/* Quick Links */}
        <div className="space-y-4 sm:mt-14">
          <h3 className="text-xl font-bold bg-white text-prime rounded px-4 w-36">{t("footer.quick_links")}</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-yellow-500">{t("footer.quick_menu1")}</a>
            </li>
            <li>
              <a href="/services" className="hover:text-yellow-500">{t("footer.quick_menu2")}</a>
            </li>
            <li>
              <a href="/sectors" className="hover:text-yellow-500">{t("footer.quick_menu3")}</a>
            </li>
            <li>
              <a href="/clients" className="hover:text-yellow-500">{t("footer.quick_menu4")}</a>
            </li>
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div className="space-y-6 sm:mt-14">
          <h3 className="text-xl font-bold text-prime rounded px-4 bg-white w-36">{t("footer.contact_us")}</h3>
          <ul className="space-y-2">
            <div className="flex items-center font-medium">
              <FaEnvelope className="mr-2 text-xl" />
              <span>  {t("footer.email")}</span>
            </div>

            <div className="flex items-center  font-medium">
              <FaPhoneAlt className="mr-2 text-xl" />
              <span>{t("footer.phone")}</span>
            </div>
            <div className="flex items-start font-medium">
              <ImLocation2 className="mr-2 text-5xl" />
              <span>{t("footer.address")}</span>
            </div>
          </ul>
          {/* <div className="flex space-x-4">
            <a
              href="https://facebook.com/alhayat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-600"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/alhayat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/company/alhayat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-700"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/alhayat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-pink-500"
            >
              <FaInstagram />
            </a>
          </div> */}

          {/* Newsletter Subscription */}
          {/* <div>
            <h3 className="text-xl font-semibold mb-3">{t("footer.newsletter")}</h3>
            <div className="flex items-center">
              <input
                type="email"
                className="w-full p-2 rounded-l-lg focus:outline-none"
                placeholder={t("footer.newsletter_placeholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={handleSubscribe}
                className="bg-yellow-500 text-black px-6 py-2 rounded-r-lg hover:bg-yellow-600 transition"
              >
                {t("footer.subscribe_button")}
              </button>
            </div>
          </div> */}
        </div>
      </div>
        
        <div>
          <div className="flex space-x-10 mt-10">
            <h1 className="font-bold text-lg ">{t("footer.follow")} : </h1>
            <a
              href="https://facebook.com/alhayat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-600"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/alhayat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/company/alhayat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-700"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/alhayat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-pink-500"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      {/* Bottom Section */}
      <div className="text-center pt-4 mt-8 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} {t("footer.rights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
