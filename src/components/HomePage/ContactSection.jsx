import React from "react";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Importing icons

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-black mb-4">{t("contact_section.title")}</h2>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-8">{t("contact_section.description")}</p>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Phone */}
          <div className="flex items-center text-xl text-prime font-medium">
            <FaPhoneAlt className="mr-2 text-xl" />
            <span>{t("contact_section.phone_label")}: +1234567890</span>
          </div>

          {/* Email */}
          <div className="flex items-center text-xl text-prime font-medium">
            <FaEnvelope className="mr-2 text-xl" />
            <span>{t("contact_section.email_label")}: contact@alhayat.com</span>
          </div>

          {/* Facebook */}
          <div className="flex items-center text-xl text-prime font-medium">
            <FaFacebook className="mr-2 text-xl" />
            <a
              href="https://facebook.com/alhayat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              {t("contact_section.facebook_label")}
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center text-xl text-prime font-medium">
            <FaLinkedin className="mr-2 text-xl" />
            <a
              href="https://linkedin.com/company/alhayat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              {t("contact_section.linkedin_label")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
