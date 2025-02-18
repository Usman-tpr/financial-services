import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaBuilding,
  FaGavel,
  FaGlobe,
  FaUserTie,
} from "react-icons/fa";
import Header from "../Header";
import { Slide } from "react-reveal";
import CenterLine from "../../common/CenterLine";

const sectors = [
  {
    title: "Corporations",
    description:
      "From small enterprises to large corporations, Alhayat provides a full suite of services including corporate structuring, compliance advisory, and financial planning. Our experts help businesses streamline operations, manage risks, and ensure regulatory compliance in an evolving economic landscape.",
    icon: <FaBuilding />,
    points: [
      "Company registration and licensing assistance.",
      "Tax planning and compliance solutions.",
      "Financial auditing and risk assessment.",
      "Corporate governance and regulatory advisory.",
    ],
  },
  {
    title: "Government Entities",
    description:
      "Alhayat partners with Afghan government bodies to enhance governance efficiency through legal, tax, and financial advisory. We provide strategic consulting to improve fiscal policies, optimize revenue collection, and strengthen transparency in public finance management.",
    icon: <FaGavel />,
    points: [
      "Legal advisory for policy development and implementation.",
      "Public-private partnership facilitation.",
      "Revenue optimization strategies.",
      "Regulatory and compliance support for government projects.",
    ],
  },
  {
    title: "Foreign Investors",
    description:
      "For international businesses and investors looking to enter or expand in Afghanistan, Alhayat offers specialized market entry solutions. Our team provides due diligence, investment structuring, and risk mitigation strategies to ensure a smooth transition into the Afghan business environment.",
    icon: <FaGlobe />,
    points: [
      "Investment advisory and market research.",
      "Legal framework guidance for foreign businesses.",
      "Business incorporation and licensing.",
      "Risk assessment and investment security solutions.",
    ],
  },
  {
    title: "Individuals",
    description:
      "We offer customized financial solutions for individuals, including estate planning, wealth management, and Sharia-compliant investment advisory. Our goal is to help individuals secure their financial future while aligning with ethical and religious principles.",
    icon: <FaUserTie />,
    points: [
      "Estate planning and asset protection.",
      "Wealth management and investment strategies.",
      "Sharia-compliant financial advisory.",
      "Tax efficiency planning for individuals and families.",
    ],
  },
];

const SectorPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header
        header={t("sectortitle")}
        description={t("sectordescription")}
      />
      <div className="p-8 space-y-10 ">
        {sectors.map((sector, index) => (
          <Slide key={index} bottom>
            <div className="max-w-7xl mx-auto bg-prime text-white border-2 border-yellow-300 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <h2 className="text-3xl font-bold text-yellow-300 text-center py-4 flex items-center justify-center gap-3">
                {sector.icon} {sector.title}
              </h2>
              <div className="h-1 bg-yellow-300 mx-auto w-[10%]"></div>
              <div className="p-6">
                <p className="text-lg">{sector.description}</p>
                <ul className="mt-4 space-y-3">
                  {sector.points.map((point, i) => (
                    <Slide left duration={1500} key={i}>
                   <div className="flex justify-start mx-auto ">
                   <li className="w-[60%] mx-auto items-center text-center bg-gray-100 text-gray-900 rounded-lg p-3 shadow-sm hover:bg-gray-200 transition duration-300">
                        {point}
                      </li>
                   </div>
                    </Slide>
                  ))}
                </ul>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </>
  );
};

export default SectorPage;
