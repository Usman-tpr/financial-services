import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaClipboardList, FaHandshake, FaUsers, FaPhoneAlt, FaFileAlt, FaInfoCircle,
  FaBuilding, FaSearch, FaTasks, FaVial, FaExclamationTriangle, FaComments, FaFileExport
} from "react-icons/fa";
import Header from "../components/Header";
import { Slide } from "react-reveal";

const icons = {
  FaClipboardList: <FaClipboardList />,
  FaHandshake: <FaHandshake />,
  FaUsers: <FaUsers />,
  FaPhoneAlt: <FaPhoneAlt />,
  FaFileAlt: <FaFileAlt />,
  FaInfoCircle: <FaInfoCircle />,
  FaBuilding: <FaBuilding />,
  FaSearch: <FaSearch />,
  FaTasks: <FaTasks />,
  FaVial: <FaVial />,
  FaExclamationTriangle: <FaExclamationTriangle />,
  FaComments: <FaComments />,
  FaFileExport: <FaFileExport />
};

const AdvisoryPage = () => {
  const { t } = useTranslation();

  const data = t("advisorySections", {
    returnObjects: true
  });

  return (
    <>
      <Header header={t('advisorytitle')} description={t('advisorydescription')} />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-800">{data.header}</h1>
        <p className="text-lg text-gray-600 mt-4">{data.description}</p>

        {data.map((section, index) => (
          <div key={index} className="mt-8 mx-2 sm:mx-28">
            <h2 className="text-2xl font-semibold text-gray-800">{section.header}</h2>
            <p className="text-gray-600 mt-2">{section.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ">
              {section.content.map((item, i) => (
                <div key={i} className="flex items-start space-x-4 p-4 bg-prime shadow-md rounded-md">
                  <Slide right > <div className="text-blue-500 text-2xl">{icons[item.icon]}</div></Slide>
                  <Slide left> <p className="text-white">{item.text}</p> </Slide>
                </div>

              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdvisoryPage;
