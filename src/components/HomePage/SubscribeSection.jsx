import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Slide } from "react-reveal";

const SubscribeSection = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="bg-prime py-16 px-4">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-white mb-6">
          {t("subscribe_section.title")}
        </h2>

        {/* Subscribe Now Button */}
        <button
          onClick={toggleModal}
          className="bg-yellow-300 text-black px-6 py-3 font-semibold text-xl rounded-lg hover:bg-yellow-500 transition-colors"
        >
          {t("subscribe_section.button_text")}
        </button>
      </div>

      {/* Popup Modal */}
      {isModalOpen && (
     <Slide top duration={1000}>
           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96 max-w-full shadow-lg transform transition-all ease-in-out duration-300 scale-95">
            {/* Modal Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <h3 className="text-2xl font-semibold text-center mb-6">
              {t("subscribe_section.popup_title")}
            </h3>

            <form>
              {/* Name Field */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("subscribe_section.name_label")}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                  placeholder={t("subscribe_section.name_label")}
                />
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("subscribe_section.email_label")}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                  placeholder={t("subscribe_section.email_label")}
                />
              </div>

              {/* Subscribe Button */}
              <button
                type="submit"
                className="w-full bg-yellow-300 text-black py-3 font-semibold text-xl rounded-lg hover:bg-yellow-500 transition-colors"
              >
                {t("subscribe_section.subscribe_button")}
              </button>
            </form>
          </div>
        </div>
     </Slide>
      )}
    </section>
  );
};

export default SubscribeSection;
