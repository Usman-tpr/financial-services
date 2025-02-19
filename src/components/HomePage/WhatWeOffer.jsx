import React from "react";
import { useTranslation } from "react-i18next";
import { Slide } from "react-reveal";
import CenterLine from "../../common/CenterLine";
import { Link } from "react-router-dom";
import { FaUpRightFromSquare } from "react-icons/fa6";

const WhatWeOffer = () => {
    const { t } = useTranslation();

    // The data is coming from the JSON file (localization)
    const services = t("what_we_offer.services", { returnObjects: true });

    return (
        <>
            <div className=' text-white bg-black/50 bg-[url("https://cdn.pixabay.com/photo/2019/10/18/19/51/financial-4560047_640.jpg")] bg-cover '>
                <section className="py-10 px-20 bg-white bg-opacity-45">
                    <div className="container mx-auto text-center">
                        {/* Title */}
                        <h2 className="text-3xl font-semibold text-gray-800 ">{t("what_we_offer.title")}</h2>
                        <CenterLine />
                        <h2 className="text-xl font-semibold text-gray-800 ">{t("what_we_offer.desc")}</h2>

                        {/* Service List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mt-5">
                            {services.map((service, index) => (
                                <Slide bottom duration={`${index + 1}000`}>
                                    <div
                                        key={index}
                                        className="bg-white border-2 border-prime p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
                                    >
                                        {/* Icon (You can replace these SVGs with the relevant icons for each service) */}
                                        <div className="flex justify-center mb-4">
                                            <img src={service.icon} alt="" className="w-14 text-white" />
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
            </div>

            <Slide >
                <div className='flex items-center justify-center mt-10'>
                    <Link to='/about' className='hover:bg-prime hover:text-white duration-700  text-prime underline underline-offset-4 rounded text-xl font-bold  px-10 py-2 flex  items-center mb-10 '>{t("readMore")}  <FaUpRightFromSquare className='pl-2 mt-1 text-2xl' /></Link>
                </div>
            </Slide>
        </>
    );
};

export default WhatWeOffer;
