import React from "react";
import { useTranslation } from "react-i18next";
import { 
  FaClipboardList, FaUsers, FaListAlt, FaEye, FaDatabase, FaFileAlt, 
  FaComments, FaTasks, FaHandshake, FaCalculator, FaFileInvoice 
} from "react-icons/fa";
import Header from "../Header";
import { Slide } from "react-reveal";

const icons = {
  FaClipboardList: <FaClipboardList />,
  FaUsers: <FaUsers />,
  FaListAlt: <FaListAlt />,
  FaEye: <FaEye />,
  FaDatabase: <FaDatabase />,
  FaFileAlt: <FaFileAlt />,
  FaComments: <FaComments />,
  FaTasks: <FaTasks />,
  FaHandshake: <FaHandshake />,
  FaCalculator: <FaCalculator />,
  FaFileInvoice: <FaFileInvoice />
};

const TaxationPage = () => {
  const { t } = useTranslation();

  const data = t("sections", {
    returnObjects: true
  });

  return (
  <>
  <Header header={t('taxationtitle')} description={t('taxationdescription')}/>
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800">{data.header}</h1>
      <p className="text-lg text-gray-600 mt-4">{data.description}</p>

      {data.map((section, index) => (
        <div key={index} className="mt-8 mx-2 sm:mx-28">
          <h2 className="text-2xl font-semibold text-gray-800">{section.header}</h2>
          <p className="text-gray-600 mt-2">{section.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {section.content.map((item, i) => (
                  <div key={i} className="flex items-start space-x-4 p-4 bg-prime shadow-md rounded-md">
                    <Slide right ><div className="text-blue-500 text-2xl">{icons[item.icon]}</div>  </Slide>
                <Slide left><p className="text-white">{item.text}</p></Slide>
              </div>

            ))}
          </div>
        </div>
      ))}
    </div>
  </>
  );
};

export default TaxationPage;
