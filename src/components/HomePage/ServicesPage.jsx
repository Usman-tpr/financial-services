import React from "react";
import Header from "../Header";
import { useTranslation } from "react-i18next";
import { Slide } from "react-reveal";

const Services = () => {
    const { t } = useTranslation()
  return (
  <>
  <Header  header={"header"} description={"desc"} />
    <div className="bg-gray-50 py-10">
      <h1 className="text-4xl font-bold text-center text-prime mb-8">
        Our Services List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {t('services' , { returnObjects: true }).map((service, index) => (
      <Slide left duration={2000}>
            <div
            key={index}
            className="bg-white shadow-md rounded-lg p-5 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-white bg-prime p-3 text-center mb-4">
              {service.category}
            </h2>
            <ul className="list-disc list-inside text-prime">
              {service.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
      </Slide>
        ))}
      </div>
    </div>
  </>
  );
};

export default Services;
