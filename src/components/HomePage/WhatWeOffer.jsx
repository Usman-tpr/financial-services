import React from "react";
import { useTranslation } from "react-i18next";
import { Slide } from "react-reveal";

const WhatWeOffer = () => {
    const { t } = useTranslation();

    // The data is coming from the JSON file (localization)
    const services = t("what_we_offer.services", { returnObjects: true });

    return (
        <section className="py-16 px-32 bg-white">
            <div className="container mx-auto text-center">
                {/* Title */}
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">{t("what_we_offer.title")}</h2>

                {/* Service List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                   <Slide right duration={2000}>
                         <div
                            key={index}
                            className="bg-white border-2 border-prime p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
                        >
                            {/* Icon (You can replace these SVGs with the relevant icons for each service) */}
                            <div className="flex justify-center mb-4">
                                <img src={service.icon} alt="" className="w-14 text-white"/>
                            </div>
                            {/* Service Name */}
                            <h3 className="text-xl font-semibold text-prime  mb-2">{service.name}</h3>
                            {/* Service Description */}
                            <p className="text-gray-900">{service.description}</p>
                        </div>
                   </Slide>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;
