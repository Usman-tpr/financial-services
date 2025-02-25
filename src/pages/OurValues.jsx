import React from "react";
import { useTranslation } from "react-i18next";
import { FaCheckCircle } from "react-icons/fa";
import Header from "../components/Header";
import { Slide } from "react-reveal";

const OurValues = () => {
    const { t } = useTranslation();

    const values = [
        {
            title: t("values.integrity.title"),
            description: t("values.integrity.description"),
        },
        {
            title: t("values.excellence.title"),
            description: t("values.excellence.description"),
        },
        {
            title: t("values.confidentiality.title"),
            description: t("values.confidentiality.description"),
        },
        {
            title: t("values.clientCentric.title"),
            description: t("values.clientCentric.description"),
        },
    ];

    return (
        <>
            <Header header={t("valuesPage.title")} description={t("valuesPage.description")} />
            <div className="bg-gray-100 py-12 px-4">

                {/* Values Section */}
                <section className="container mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                            {t("valuesPage.subtitle")}
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-around items-center">
                            <ul className="space-y-4">
                                {values.map((value, index) => (
                                    <Slide top key={index}>
                                        <li className="flex items-center space-x-4">
                                            <FaCheckCircle className="text-green-500 text-2xl" />
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-800">{value.title}</h3>
                                                <p className="text-lg text-gray-700">{value.description}</p>
                                            </div>
                                        </li>
                                    </Slide>
                                ))}
                            </ul>
                            <Slide bottom>
                                <div>
                                    <img src="https://cdn.pixabay.com/photo/2014/03/24/17/15/mortgage-295211_640.png" alt="Values Illustration" />
                                </div>
                            </Slide>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default OurValues;