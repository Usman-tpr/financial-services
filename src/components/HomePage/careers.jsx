import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaClipboardCheck,
  FaUsers,
  FaTasks,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaHandHoldingHeart
} from "react-icons/fa";
import Header from "../Header";
import { Slide } from "react-reveal";

const icons = {
  FaClipboardCheck: <FaClipboardCheck />,
  FaUsers: <FaUsers />,
  FaTasks: <FaTasks />,
  FaChalkboardTeacher: <FaChalkboardTeacher />,
  FaGraduationCap: <FaGraduationCap />,
  FaHandHoldingHeart: <FaHandHoldingHeart />
};

const Careers = () => {
  const { t } = useTranslation();
  const data = t("careers", {
    returnObjects: true
  });

  return (
    <>
      <Header header={data.title} description={data.description} />
      <h1 className="text-center text-prime text-2xl font-bold mt-10">{data.title}</h1>
      <div className="p-8">
        <div className="">
          <h2 className="text-2xl font-bold text-white">{data.recruitmentProcess.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {data.recruitmentProcess.content.map((item, index) => (
              <Slide left bottom duration={2000} key={index}>
                <div className="flex items-start space-x-4 p-4 bg-prime shadow-md rounded-md">
                  <div className="text-blue-500 text-2xl">{icons[item.icon]}</div>
                  <p className="text-white">{item.text}</p>
                </div>
              </Slide>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white">{data.professionalDevelopment.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {data.professionalDevelopment.content.map((item, index) => (
              <Slide left duration={2000} key={index}>
                <div className="flex items-start space-x-4 p-4 bg-prime shadow-md rounded-md">
                  <div className="text-blue-500 text-2xl">{icons[item.icon]}</div>
                  <p className="text-white">{item.text}</p>
                </div>
              </Slide>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white">{data.contact.title}</h2>
          <p className="text-white">{data.contact.content}</p>
        </div>
      </div>
    </>
  );
};

export default Careers;
