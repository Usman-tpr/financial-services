import { FaBalanceScale, FaUserTie, FaGavel, FaRegBuilding } from 'react-icons/fa';
import Header from '../components/Header';

const OurTeam = () => {
  const teamMembers = [
    {
      role: 'Sharia Law Experts',
      description: 'Providing specialized guidance on Islamic law for family, inheritance, and business matters.',
      icon: <FaBalanceScale className="text-4xl text-blue-600" />,
    },
    {
      role: 'Expert Lawyers',
      description: 'Lawyers with expertise in corporate law, tax law, real estate law, dispute resolution, and foreign investment.',
      icon: <FaGavel className="text-4xl text-blue-600" />,
    },
    {
      role: 'Retired Judges',
      description: 'Experienced former judges offering insights into legal proceedings and case strategy, helping to navigate Afghanistan\'s legal system effectively.',
      icon: <FaUserTie className="text-4xl text-blue-600" />,
    },
    {
      role: 'Finance & Investment Consultants',
      description: 'Specialists in finance, foreign investment, and business setup, offering a deep understanding of the local market, regulations, and opportunities for growth.',
      icon: <FaRegBuilding className="text-4xl text-blue-600" />,
    },
  ];

  return (
   <>
   <Header header="Our Team" description="Alhayat Legal Office is made up of a skilled and diverse team of legal professionals and financial experts." />

    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Team</h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Alhayat Legal Office is made up of a skilled and diverse team of legal professionals and financial experts.
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 text-center hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
              <div className="mb-6">
                <div className="bg-blue-100 p-4 rounded-full inline-block">
                  {member.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{member.role}</h3>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
   </>
  );
};

export default OurTeam;
