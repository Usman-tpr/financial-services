import React from "react";
import { FaFileDownload, FaCheckCircle, FaGavel, FaBalanceScale } from "react-icons/fa";
import Header from "../Header";
import { Slide } from "react-reveal";
import CenterLine from "../../common/CenterLine";

const laws = [
    { title: "Investment Law of Afghanistan", file: "/documents/investment-law.pdf" },
    { title: "Corporate Tax Regulations", file: "/documents/corporate-tax.pdf" },
    { title: "Labor Law and Employment Rights", file: "/documents/labor-law.pdf" },
    { title: "Import & Export Regulations", file: "/documents/import-export.pdf" },
    { title: "Business Licensing Requirements", file: "/documents/business-licensing.pdf" },
];

const whyChooseUs = [
    { text: "Specialized Expertise: We help foreign investors and startups grow their businesses in Afghanistan." },
    { text: "Comprehensive Legal & Business Services: From contract writing to investment consulting and tax compliance." },
    { text: "In-depth Knowledge of Local Laws: Ensuring your business stays compliant and minimizes risks." },
    { text: "Strategic Guidance: Practical business-focused advice for navigating Afghanistan’s market conditions." },
    { text: "Proven Track Record: Successfully assisted numerous clients in business establishment and legal compliance." },
    { text: "International Standards: Ensuring compliance with Afghan regulations and global best practices." },
];

const LawsAndRegulations = () => {
    return (
        <>
            <Header header="Laws & Regulations" description="Download key legal documents and get free advisory on legal, financial, and tax matters." />
            <h1 className="text-center text-prime text-4xl font-bold mt-10">Laws & Regulations</h1>
            <CenterLine />

            {/* Laws & Regulations Section */}
            <div className="p-4 mx-10">
                <h2 className="text-2xl font-bold text-prime">Downloadable Legal Documents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {laws.map((law, index) => (
                        <Slide left duration={1500} key={index}>
                            <div className="flex items-center justify-between p-4 bg-gray-100 shadow-md rounded-md">
                                <div className="flex items-center space-x-3">
                                    <FaGavel className="text-blue-600 text-2xl" />
                                    <p className="text-gray-900 font-medium">{law.title}</p>
                                </div>
                                <a href={law.file} download className="text-white bg-prime px-3 py-1 rounded flex items-center">
                                    <FaFileDownload className="mr-2" /> Download
                                </a>
                            </div>
                        </Slide>
                    ))}
                </div>
            </div>

            {/* Free Advisory Section */}
            <div className="mt-10 p-4 mx-10">
                <h2 className="text-2xl font-bold text-prime">Need Free Legal, Financial, or Tax Advice?</h2>
                <p className="text-gray-700 mt-2">
                    Our experts are available to assist you with ordinary legal, financial, and tax matters. 
                    Feel free to <span className="font-semibold text-blue-600">contact us</span> for guidance.
                </p>
            </div>

            {/* Why Choose Us Section */}
            <div className="mt-10 p-4 mx-10">
                <h2 className="text-2xl font-bold text-prime">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {whyChooseUs.map((point, index) => (
                        <Slide bottom duration={1500} key={index}>
                            <div className="flex items-start space-x-4 p-4 bg-gray-100 shadow-md rounded-md">
                                <FaCheckCircle className="text-green-500 text-2xl" />
                                <p className="text-gray-900">{point.text}</p>
                            </div>
                        </Slide>
                    ))}
                </div>
            </div>
        </>
    );
};

export default LawsAndRegulations;
