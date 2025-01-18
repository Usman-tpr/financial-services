import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaUsers,
  FaChartLine,
  FaClipboard
} from "react-icons/fa";
import Header from "../Header";
import { Slide } from "react-reveal";

const icons = {
  FaUsers: <FaUsers />,
  FaChartLine: <FaChartLine />,
  FaClipboard: <FaClipboard />
};

const PrivateSector = () => {
  const { t } = useTranslation();
  const data = t("privatesector", {
    returnObjects: true
  });

  return (
    <>
      <Header header={data.title} description={data.description} />
      <div className="p-8">
        <div className="flex flex-col  bg-prime rounded gap-4 mt-4">
        <h1 className="text-3xl font-bold text-center text-yellow-300 pt-3">{data.title}</h1>
        <div className="h-1 bg-yellow-300 w-[10%] mx-auto"></div>
          {data.content.map((item, index) => (
            <Slide left duration={2000} key={index}>
              <div className="flex items-start space-x-4 p-4 bg-gray-950">
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

export default PrivateSector;
