import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import { Slide } from "react-reveal";

const AboutPage = () => {
    const { t } = useTranslation();

    const services = [
        {
            title: t("individualsInvestors"),
            description: t("individualsDescription"),
            image: "https://cdn.pixabay.com/photo/2024/05/20/08/38/business-8774165_640.png", // Replace with your image paths
        },
        {
            title: t("smallBusinesses"),
            description: t("smallBusinessesDescription"),
            image: "https://cdn.pixabay.com/photo/2020/02/18/11/03/dollar-4859143_640.png",
        },
        {
            title: t("mediumBusinesses"),
            description: t("mediumBusinessesDescription"),
            image: "https://cdn.pixabay.com/photo/2013/07/12/18/05/administration-152960_640.png",
        },
        {
            title: t("largeBusinesses"),
            description: t("largeBusinessesDescription"),
            image: "https://cdn.pixabay.com/photo/2024/09/17/05/27/money-9052877_640.png",
        },
        {
            title: t("authoritiesOrganizations"),
            description: t("authoritiesDescription"),
            image: "https://cdn.pixabay.com/photo/2020/08/03/10/00/cellphone-5459707_640.png",
        },
        {
            title: t("ngos"),
            description: t("ngosDescription"),
            image: "https://cdn.pixabay.com/photo/2019/11/23/09/25/marketing-4646598_640.png",
        },
    ];

    return (
        <>
            <Header header={t("aboutPage.title")} description={t("aboutPage.description")} />

            <div className="bg-gray-100 py-12 px-4">

                {/* About Section */}
                <section className="container mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-prime mb-6 text-center">
                        {t("aboutPage.glanceTitle")}
                    </h2>
                    <p className="text-prime mb-6 text-center">
                        {t("aboutPage.glanceDescription")}
                    </p>
                </section>

                {/* Scope of Services Section */}
                <section className="container mx-auto">
                    <h2 className="text-3xl font-bold text-prime mb-6 text-center">
                        {t("aboutPage.servicesTitle")}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10 mx-0 sm:mx-24">
                        {services.map((service, index) => (
                        <Slide left duration={2000}>
                             <div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                            >
                              <Slide bottom >
                              <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-60 object-cover"
                                />
                              </Slide>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-prime mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-5">{service.description}</p>
                                </div>
                            </div>
                        </Slide>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutPage;
