import React from "react";
import { useTranslation } from "react-i18next";
import { 
  FaBook, FaChartBar, FaDollarSign, FaBoxes, FaLaptop, FaRegClipboard, 
  FaBriefcase, FaUsersCog, FaRegHandshake, FaLightbulb, FaHandsHelping, 
  FaBrain, FaArrowRight, FaExchangeAlt 
} from "react-icons/fa";
import Header from "../Header";
import { Slide } from "react-reveal";

const icons = {
  FaBook: <FaBook />,
  FaChartBar: <FaChartBar />,
  FaDollarSign: <FaDollarSign />,
  FaBoxes: <FaBoxes />,
  FaLaptop: <FaLaptop />,
  FaRegClipboard: <FaRegClipboard />,
  FaBriefcase: <FaBriefcase />,
  FaUsersCog: <FaUsersCog />,
  FaRegHandshake: <FaRegHandshake />,
  FaLightbulb: <FaLightbulb />,
  FaHandsHelping: <FaHandsHelping />,
  FaBrain: <FaBrain />,
  FaArrowRight: <FaArrowRight />,
  FaExchangeAlt: <FaExchangeAlt />
};

const CapacityPage = () => {
  const { t } = useTranslation();

  const data = t("capacitysections", {
    returnObjects: true
  });

  return (
  <>
  <Header header={t('capacitytitle')} description={t('capacitydescription')} />
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800">{data.header}</h1>
      <p className="text-lg text-gray-600 mt-4">{data.description}</p>

      {data.map((section, index) => (
        <div key={index} className="mt-8 mx-2 sm:mx-28">
          <h2 className="text-2xl font-semibold text-gray-800">{section.header}</h2>
          <p className="text-gray-600 mt-2">{section.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {section.content.map((item, i) => (
           <Slide bottom duration={2000}>
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

export default CapacityPage;
