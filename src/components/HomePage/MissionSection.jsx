import React from "react";
import { useTranslation } from "react-i18next";
import { Slide } from "react-reveal";
import CenterLine from "../../common/CenterLine";

const AlHayatSection = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-white  relative">
            <div className="w-full mx-auto ">
                <div className="bg-prime text-white py-10 px-6 md:px-12 lg:px-24">

                    {/* Animated Heading - Our Mission */}
                    <h2
                        className="text-3xl font-extrabold text-yellow-300 text-center"
                    >
                        <Slide bottom duration={2000}> {t("alHayat.missionTitle")}</Slide>

                    </h2>
                    <div className="h-1 w-[10%] mx-auto my-2 bg-yellow-300 "></div>
                    <div className="flex sm:flex-row text-white flex-col justify-between items-center">
                        <div className=" w-[80%]">
                            <Slide >

                                <p className="text-lg mb-5">
                                    {t("alHayat.missionDescription")}
                                </p>
                                <p className="text-lg mb-12">
                                    {t("alHayat.visionDescription")}
                                </p>
                            </Slide>
                        </div>

                        <div className="w-[20%]">
                            <Slide bottom duration={2000}>
                                <img src="https://cdn.pixabay.com/photo/2020/09/18/18/21/money-5582600_640.png" alt="" className=" object-contain ease-linear duration-[5s]" />
                            </Slide>
                        </div>
                    </div>


                </div>

                {/* Why AlHayat Section */}
                
              <div className="py-16 px-6 md:px-12 lg:px-24">
              <h3
                    className="text-3xl font-bold text-black text-center"
                >
                    {t("alHayat.whyTitle")}
                </h3>
                <CenterLine />
                <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-5">
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
            </div>


            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 bg-yellow-300 rounded-full w-20 h-20 opacity-50 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 bg-green-300 rounded-full w-28 h-28 opacity-50 blur-2xl"></div>
        </section>
    );
};

export default AlHayatSection;
