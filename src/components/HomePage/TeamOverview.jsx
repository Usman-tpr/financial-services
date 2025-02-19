import { FaBusinessTime, FaFileContract, FaBalanceScale, FaBullseye, FaTrophy, FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('specializedExpertise'),
      description: t('specializedExpertiseDesc'),
      icon: <FaBusinessTime className="text-4xl text-blue-600" />,
    },
    {
      title: t('comprehensiveLegalBusinessServices'),
      description: t('comprehensiveLegalBusinessServicesDesc'),
      icon: <FaFileContract className="text-4xl text-blue-600" />,
    },
    {
      title: t('inDepthKnowledgeOfLocalLaws'),
      description: t('inDepthKnowledgeOfLocalLawsDesc'),
      icon: <FaBalanceScale className="text-4xl text-blue-600" />,
    },
    {
      title: t('strategicGuidance'),
      description: t('strategicGuidanceDesc'),
      icon: <FaBullseye className="text-4xl text-blue-600" />,
    },
    {
      title: t('provenTrackRecord'),
      description: t('provenTrackRecordDesc'),
      icon: <FaTrophy className="text-4xl text-blue-600" />,
    },
    {
      title: t('internationalStandards'),
      description: t('internationalStandardsDesc'),
      icon: <FaGlobe className="text-4xl text-blue-600" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">{t('whyChooseUs')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;