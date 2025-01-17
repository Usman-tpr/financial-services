import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaLightbulb,
  FaClipboard,
  FaChartBar
} from "react-icons/fa";
import Header from "../Header";
import { Slide } from "react-reveal";

const icons = {
  FaLightbulb: <FaLightbulb />,
  FaClipboard: <FaClipboard />,
  FaChartBar: <FaChartBar />
};

const PublicSector = () => {
  const { t } = useTranslation();
  const data = t("publicsector", {
    returnObjects: true
  });

  return (
    <>
      <Header header={data.title} description={data.description} />
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {data.content.map((item, index) => (
            <Slide left duration={2000} key={index}>
              <div className="flex items-start space-x-4 p-4 bg-prime shadow-md rounded-md">
                <div className="text-blue-500 text-2xl">{icons[item.icon]}</div>
                <p className="text-white">{item.text}</p>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </>
  );
};

export default PublicSector;
