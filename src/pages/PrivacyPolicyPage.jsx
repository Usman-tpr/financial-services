import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();

  return (
  <>
  <Header header={t("privacyPolicyPage.title")}  description={t("privacyPolicyPage.description")}/>
    <div className="bg-gray-50 py-12 px-6">

      {/* Main Content */}
      <section className="container mx-auto bg-white rounded-lg shadow-lg p-8 space-y-8">
        {/* Privacy Commitment */}
        <div className="bg-prime text-white p-4 rounded">
          <h2 className="text-3xl font-bold mb-4">
            {t("privacyPolicyPage.commitmentTitle")}
          </h2>
          <p className="text-lg">
            {t("privacyPolicyPage.commitmentText")}
          </p>
        </div>

        {/* Personal Information Policy */}
        <div className="bg-gray-200 text-white p-4 rounded">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t("privacyPolicyPage.personalInfoTitle")}
          </h2>
          <p className="text-lg text-gray-700">
            {t("privacyPolicyPage.personalInfoText")}
          </p>
        </div>

        {/* Rules of Conduct */}
        <div className="bg-gray-300 text-white p-4 rounded">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t("privacyPolicyPage.rulesTitle")}
          </h2>
          <p className="text-lg text-gray-700">
            {t("privacyPolicyPage.rulesText")}
          </p>
        </div>

        {/* Recourse Section */}
        <div className="bg-prime text-white p-4 rounded">
          <h2 className="text-3xl font-bold  mb-4">
            {t("privacyPolicyPage.recourseTitle")}
          </h2>
          <p className="text-lg  mb-4">
            {t("privacyPolicyPage.recourseText")}
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2 text-xl text-green-600">✔</span>
              <strong>{t("privacyPolicyPage.phoneLabel")}: </strong>{" "}
              {t("privacyPolicyPage.phone")}
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-xl text-green-600">✔</span>
              <strong>{t("privacyPolicyPage.emailLabel")}: </strong>{" "}
              <a
                href={`mailto:${t("privacyPolicyPage.email")}`}
                className="text-blue-600 underline"
              >
                {t("privacyPolicyPage.email")}
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-xl text-green-600">✔</span>
              <strong>{t("privacyPolicyPage.addressLabel")}: </strong>{" "}
              {t("privacyPolicyPage.address")}
            </li>
          </ul>
        </div>
      </section>
    </div>
  </>
  );
};

export default PrivacyPolicyPage;
