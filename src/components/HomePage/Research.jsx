import React from "react";
import { useTranslation } from "react-i18next";
import { 
  FaChartLine, FaDatabase, FaClipboard, FaTachometerAlt, 
  FaLightbulb, FaTools, FaUsers, FaChartBar 
} from "react-icons/fa";
import Header from "../Header";
import { Slide } from "react-reveal";

const icons = {
  FaChartLine: <FaChartLine />,
  FaDatabase: <FaDatabase />,
  FaClipboard: <FaClipboard />,
  FaTachometerAlt: <FaTachometerAlt />,
  FaLightbulb: <FaLightbulb />,
  FaTools: <FaTools />,
  FaUsers: <FaUsers />,
  FaChartBar: <FaChartBar />
};

const Research = () => {
  const { t } = useTranslation();

  const data = t("researchsections", {
    returnObjects: true
  });

  return (
  <>
  <Header header={t('researchtitle')} description={t('researchdescription')} />
    <div className="p-8">

      {data.map((section, index) => (
        <div key={index} className="mt-8 mx-2 sm:mx-36">
          <h2 className="text-2xl font-semibold text-gray-800">{t('researchtitle')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {section.content.map((item, i) => (
           <Slide left duration={2000}>
               <div key={i} className="flex items-start space-x-4 p-4 bg-prime shadow-md rounded-md">
                <div className="text-blue-500 text-2xl">{icons[item.icon]}</div>
                <p className="text-white">{item.text}</p>
              </div>
           </Slide>
            ))}
          </div>
        </div>
      ))}
    </div>
  </>
  );
};

export default Research;
