import { FaBusinessTime, FaFileContract, FaBalanceScale, FaBullseye, FaTrophy, FaGlobe } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Specialized Expertise',
      description: 'We help foreign investors and startups grow their businesses in Afghanistan.',
      icon: <FaBusinessTime className="text-4xl text-blue-600" />,
    },
    {
      title: 'Comprehensive Legal & Business Services',
      description: 'From contract writing to investment consulting and tax compliance.',
      icon: <FaFileContract className="text-4xl text-blue-600" />,
    },
    {
      title: 'In-depth Knowledge of Local Laws',
      description: 'Ensuring your business stays compliant and minimizes risks.',
      icon: <FaBalanceScale className="text-4xl text-blue-600" />,
    },
    {
      title: 'Strategic Guidance',
      description: 'Practical business-focused advice for navigating Afghanistan’s market conditions.',
      icon: <FaBullseye className="text-4xl text-blue-600" />,
    },
    {
      title: 'Proven Track Record',
      description: 'Successfully assisted numerous clients in business establishment and legal compliance.',
      icon: <FaTrophy className="text-4xl text-blue-600" />,
    },
    {
      title: 'International Standards',
      description: 'Ensuring compliance with Afghan regulations and global best practices.',
      icon: <FaGlobe className="text-4xl text-blue-600" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why Choose Us?</h2>
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
