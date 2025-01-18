import React from "react";
import Header from "../Header";
import { useTranslation } from "react-i18next";
import { Slide } from "react-reveal";
import CenterLine from "../../common/CenterLine";

const Services = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header header={"header"} description={"desc"} />
      <div className="bg-gray-50 py-10">
        <h1 className="text-4xl font-bold text-center text-prime ">
          Our Services List
        </h1>
        <CenterLine />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
          {t('services', { returnObjects: true }).map((service, index) => (
            <Slide >
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-5 border border-gray-200"
              >
                <Slide top >
                  <h2 className="text-2xl font-semibold text-white bg-prime p-3 text-center mb-4">
                    {service.category}
                  </h2>
                </Slide>
                <ul className="list-disc list-inside text-prime bg-gray-200 p-4 rounded">
                  {service.points.map((point, idx) => (
                   <Slide bottom>
                     <li className="text-lg font-medium" key={idx}>{point}</li>
                   </Slide>
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
