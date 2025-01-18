import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaChartLine,
  FaDatabase,
  FaClipboard,
  FaTachometerAlt,
  FaLightbulb,
  FaTools,
  FaUsers,
  FaChartBar,
} from "react-icons/fa";
import Header from "../Header";
import { Slide } from "react-reveal";
import CenterLine from "../../common/CenterLine";

const icons = {
  FaChartLine: <FaChartLine />,
  FaDatabase: <FaDatabase />,
  FaClipboard: <FaClipboard />,
  FaTachometerAlt: <FaTachometerAlt />,
  FaLightbulb: <FaLightbulb />,
  FaTools: <FaTools />,
  FaUsers: <FaUsers />,
  FaChartBar: <FaChartBar />,
};

const SectorPage = () => {
  const { t } = useTranslation();

  const data = t("sectorsections", {
    returnObjects: true,
  });

  return (
    <>
      <Header
        header={t("sectortitle")}
        description={t("sectordescription")}
      />
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2">
        {data.map((section, index) => (
          <div key={index} className="mt-8 mx-2 sm:mx-20 border-prime text-white border-2 rounded  bg-prime">
            <h2 className="text-3xl  font-bold text-yellow-300  text-center py-2">
              {section.header}
            </h2>
            <div className="h-1 bg-yellow-300 mx-auto w-[10%]"></div>
            {/* <CenterLine /> */}

            <div className="flex flex-col bg-prime">
              {section.content.map((item, i) => (
                <Slide left duration={2000} key={i}>
                  <div className="flex items-start space-x-4 p-4">
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

export default SectorPage;
