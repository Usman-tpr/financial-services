import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

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
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold">{t("footer.brand_name")}</h3>
          <p>{t("footer.address")}</p>
          <p className="flex items-center">
            <AiOutlinePhone className="mr-2 text-xl" />
            {t("footer.phone")}
          </p>
          <p className="flex items-center">
            <AiOutlineMail className="mr-2 text-xl" />
            {t("footer.email")}
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">{t("footer.quick_links")}</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-yellow-500">{t("footer.about_us")}</a>
            </li>
            <li>
              <a href="/services" className="hover:text-yellow-500">{t("footer.services")}</a>
            </li>
            <li>
              <a href="/sectors" className="hover:text-yellow-500">{t("footer.sectors")}</a>
            </li>
            <li>
              <a href="/clients" className="hover:text-yellow-500">{t("footer.clients")}</a>
            </li>
            <li>
              <a href="/peoples" className="hover:text-yellow-500">{t("footer.peoples")}</a>
            </li>
            <li>
              <a href="/careers" className="hover:text-yellow-500">{t("footer.careers")}</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-500">{t("footer.contact_us")}</a>
            </li>
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">{t("footer.follow_us")}</h3>
          <div className="flex space-x-4">
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

          {/* Newsletter Subscription */}
          <div>
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
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center pt-4 mt-8 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} {t("footer.brand_name")}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
