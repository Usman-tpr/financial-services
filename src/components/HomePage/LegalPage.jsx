import React from "react";
import { useTranslation } from "react-i18next";
import {
    FaGavel, FaFileContract, FaHandshake, FaRegFileAlt, FaBusinessTime,
    FaPassport, FaTrashAlt, FaUserTie, FaTruckLoading, FaBuilding,
    FaClipboardCheck, FaCogs, FaBalanceScale, FaSync
} from "react-icons/fa";
import Header from "../Header";
import { Slide } from "react-reveal";

const icons = {
    FaGavel: <FaGavel />,
    FaFileContract: <FaFileContract />,
    FaHandshake: <FaHandshake />,
    FaRegFileAlt: <FaRegFileAlt />,
    FaBusinessTime: <FaBusinessTime />,
    FaPassport: <FaPassport />,
    FaTrashAlt: <FaTrashAlt />,
    FaUserTie: <FaUserTie />,
    FaTruckLoading: <FaTruckLoading />,
    FaBuilding: <FaBuilding />,
    FaClipboardCheck: <FaClipboardCheck />,
    FaCogs: <FaCogs />,
    FaBalanceScale: <FaBalanceScale />,
    FaSync: <FaSync />
};

const LegalPage = () => {
    const { t } = useTranslation();

    const data = t("legalsections", {
        returnObjects: true
    });

    return (
        <>
            <Header header={t('legaltitle')} description={t('legaldescription')} />
            <div className="p-8">

                {data.map((section, index) => (
                    <div key={index} className="mt-8 mx-2 sm:mx-28">
                        <h2 className="text-2xl font-semibold text-gray-800">{t('legaltitle')}</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            {section.content.map((item, i) => (
                                <Slide top duration={2000}>
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

export default LegalPage;
