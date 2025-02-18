import React from "react";
import { useTranslation } from "react-i18next";
import { FaBullseye, FaEye } from "react-icons/fa";
import Header from "../components/Header";
import { Slide } from "react-reveal";

const MissionVisionPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header header={t("missionVisionPage.title")} description={t("missionVisionPage.description")} />
      <div className="bg-gray-100 py-12 px-4">
        
        {/* Mission Section */}
        <section className="container mx-auto px-10 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-36 border-l-4 border-yellow-500">
            <div className="w-full md:w-1/2">
              <Slide bottom duration={2000}>
                <img
                  src="https://cdn.pixabay.com/photo/2018/06/11/10/55/businessmen-3468241_640.jpg"
                  alt="Mission"
                  className="rounded-lg shadow-md w-[80%] h-[40vh]  border-4 border-yellow-500"
                />
              </Slide>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                <FaBullseye className="text-yellow-500 mr-3" />
                {t("missionVisionPage.missionTitle")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("missionVisionPage.missionText")}
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="container mx-auto px-10 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-36 border-r-4 border-blue-500">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                <FaEye className="text-blue-500 mr-3" />
                {t("missionVisionPage.visionTitle")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("missionVisionPage.visionText")}
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 ">
              <Slide bottom duration={2000}>
                <img
                  src="https://cdn.pixabay.com/photo/2023/09/26/13/08/investment-8277418_640.jpg"
                  alt="Vision"
                  className="rounded-lg shadow-md w-[80%] h-[40vh] border-4 border-blue-500"
                />
              </Slide>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MissionVisionPage;