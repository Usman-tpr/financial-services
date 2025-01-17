import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import { Slide } from "react-reveal";

const MissionVisionPage = () => {
  const { t } = useTranslation();

  return (
  <>
  <Header header={t("missionVisionPage.title")} description={t("missionVisionPage.description")}/>
    <div className="bg-gray-100 py-12 px-4">


      {/* Mission Section */}
      <section className="container mx-auto mb-12">
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
           <Slide bottom duration={2000}>
           <img
              src={t("missionVisionPage.missionImage")}
              alt="Mission"
              className="rounded-lg shadow-md w-96"
            />
           </Slide>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t("missionVisionPage.missionTitle")}
            </h2>
            <p className="text-lg text-gray-700">
              {t("missionVisionPage.missionText")}
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="container mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t("missionVisionPage.visionTitle")}
            </h2>
            <p className="text-lg text-gray-700">
              {t("missionVisionPage.visionText")}
            </p>
          </div>
          <div className="w-full md:w-1/2">
         <Slide bottom duration={2000}>
         <img
              src={t("missionVisionPage.visionImage")}
              alt="Vision"
              className="rounded-lg shadow-md w-96"
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
