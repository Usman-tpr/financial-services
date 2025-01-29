import React from "react";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Importing icons
import CenterLine from "../../common/CenterLine";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-black ">{t("contact_section.title")}</h2>
        <CenterLine />

        {/* Description */}
        <p className="text-lg text-gray-700 mb-8">{t("contact_section.description")}</p>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Phone */}
          <div className="flex items-center text-xl text-prime font-medium">
            <FaPhoneAlt className="mr-2 text-xl" />
            <span>{t("contact_section.phone_label")}:{t("privacyPolicyPage.phone")}</span>
          </div>

          {/* Email */}
          <div className="flex items-center text-xl text-prime font-medium">
            <FaEnvelope className="mr-2 text-xl" />
            <span>{t("contact_section.email_label")}: {t("privacyPolicyPage.email")}</span>
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

      <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-12">
        {/* <h2 className="text-center text-4xl font-bold my-8 text-mstheme">
          {t("contactPage-map-title")}
        </h2> */}
        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Shahre Now – Kabul, Afghanistan"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.812324009622!2d69.12888999999999!3d34.489444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16eb10e6c0001%3A0x54a8e0e60bcfd6e!2sShahre%20Now%2C%20Kabul%2C%20Afghanistan!5e0!3m2!1sen!2s!4v1721567216406!5m2!1sen!2s"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
