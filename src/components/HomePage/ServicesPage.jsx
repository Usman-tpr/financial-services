import React from "react";
import Header from "../Header";
import { useTranslation } from "react-i18next";
import { Slide } from "react-reveal";
import CenterLine from "../../common/CenterLine";
import { FaBalanceScale, FaMoneyBillWave, FaFileInvoiceDollar } from "react-icons/fa";

const Services = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header header={t("servicesHeader.title")} description={t("servicesHeader.description")} />
      <div className="bg-gray-200 py-10">
        <h1 className="text-4xl font-bold text-center text-prime mb-6">{t("servicesHeader.title")}</h1>
        <CenterLine />

        <div className="space-y-10 px-5 mt-10">
          {t("services", { returnObjects: true }).map((service, index) => (
            <Slide key={index} bottom>
              <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-300 max-w-5xl mx-auto transition-transform transform hover:scale-105 hover:shadow-2xl">
                <Slide top>
                  <h2 className="text-2xl font-semibold text-white bg-prime py-4 rounded-t-lg text-center flex items-center justify-center gap-3">
                    {service.icon === "legal" && <FaBalanceScale size={28} />}
                    {service.icon === "financial" && <FaMoneyBillWave size={28} />}
                    {service.icon === "tax" && <FaFileInvoiceDollar size={28} />}
                    {service.category}
                  </h2>
                </Slide>
                
                <div className="p-5">
                  {service.points.map((point, idx) => (
                    <Slide bottom key={idx}>
                      <div className="bg-gray-100 p-4 rounded-lg mb-4 shadow-sm hover:bg-gray-200 transition duration-300">
                        <h3 className="text-lg font-bold text-prime">{point.split(":")[0]}:</h3>
                        <p className="text-gray-700 mt-1">{point.split(":")[1]}</p>
                      </div>
                    </Slide>
                  ))}
                </div>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
