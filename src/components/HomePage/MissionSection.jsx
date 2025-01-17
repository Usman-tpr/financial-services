import React from "react";
import { useTranslation } from "react-i18next";
import { Slide } from "react-reveal";

const AlHayatSection = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-white py-16 px-6 md:px-12 lg:px-24 relative">
            <div className="max-w-7xl mx-auto">
                {/* Animated Heading - Our Mission */}
                <div className="flex  sm:flex-row flex-col justify-center items-center">
                <div>
                <Slide left duration={2000}>
                        <h2
                            className="text-4xl font-extrabold text-black mb-8 animate-slide-in-left"
                        >
                            {t("alHayat.missionTitle")}
                        </h2>
                        <p className="text-lg text-gray-700 mb-12">
                            {t("alHayat.missionDescription")}
                        </p>

                        {/* Animated Heading - Our Vision */}
                        <h3
                            className="text-3xl font-bold text-black mb-6 animate-slide-in-right"
                        >
                            {t("alHayat.visionTitle")}
                        </h3>
                        <p className="text-lg text-gray-700 mb-12">
                            {t("alHayat.visionDescription")}
                        </p>
                    </Slide>
                </div>

                    <div>
                    <Slide right duration={1000}>
                        <img src="/images/financial.png" alt="" className="w-[100%]   ease-linear duration-[5s]"/>
                    </Slide>
                    </div>
                </div>

                {/* Why AlHayat Section */}
                <h3
                    className="text-3xl font-bold text-black mb-8 text-center"
                >
                    {t("alHayat.whyTitle")}
                </h3>
                <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {t("alHayat.whyPoints", { returnObjects: true }).map(
                        (point, index) => (
                        <Slide left duration={2000}>
                                <li
                                key={index}
                                className="bg-prime text-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex items-start">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 00-1.414-1.414l-6.9 6.9-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7.607-7.607z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-white text-lg">{point}</span>
                                </div>
                            </li>
                        </Slide>
                        )
                    )}
                </ul>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 bg-yellow-300 rounded-full w-20 h-20 opacity-50 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 bg-green-300 rounded-full w-28 h-28 opacity-50 blur-2xl"></div>
        </section>
    );
};

export default AlHayatSection;
