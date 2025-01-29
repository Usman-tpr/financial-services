import React from 'react';
import CountUp from 'react-countup';

const TeamOverview = () => {
  return (
    <div className="w-full mx-auto my-10 px-4 bg-prime bg-opacity-5 p-5 ">
      <h2 className="text-4xl font-bold text-center mb-6">Our Experts: The Backbone of Excellence</h2>
      <p className="text-lg text-center mb-8">
        Our technical team combines specialized expertise, innovative thinking, and years of experience to deliver top-notch solutions in legal, financial, and tax consultancy.
      </p>
      
      <div className="flex justify-around items-center mb-12">
        <div className="text-center border-prime border-2  rounded-badge p-10 bg-prime text-white">
          <h3 className="text-3xl font-bold">
            <CountUp end={100} duration={30} />
          </h3>
          <p>Total Team Members</p>
        </div>
        <div className="text-center border-prime border-2  rounded-badge p-10 bg-prime text-white">
          <h3 className="text-3xl font-bold">
            <CountUp end={20} duration={30} />
          </h3>
          <p>Years of Combined Experience</p>
        </div>
      </div>

      <div className=" grid grid-cols-3">
        <div className=' border-prime border-2 p-10 mx-2 my-2 rounded'>
          <h3 className="text-2xl font-semibold mb-2">1. Team Overview:</h3>
          <p>Departments Covered: [Fill in key departments, e.g., Legal, Finance, Tax]</p>
        </div>
        <div className=' border-prime border-2 p-10 mx-2 my-2 rounded'>
          <h3 className="text-2xl font-semibold mb-2">2. Key Expertise:</h3>
          <p>Areas of Expertise: [Fill in areas of expertise, e.g., Corporate Law, Sharia Law, Tax Strategy, etc.]</p>
          <p>Certifications and Accreditations: [Fill in qualifications and certifications held by the team]</p>
        </div>
        <div className=' border-prime border-2 p-10 mx-2 my-2 rounded'>
          <h3 className="text-2xl font-semibold mb-2">3. Experience:</h3>
          <p>Significant Achievements: [Highlight 2-3 major accomplishments or projects]</p>
        </div>
        <div className=' border-prime border-2 p-10 mx-2 my-2 rounded'>
          <h3 className="text-2xl font-semibold mb-2">4. Values and Approach:</h3>
          <p>Core Values: [Fill in values like integrity, precision, and client focus]</p>
          <p>How We Work: [Highlight teamwork, innovative problem-solving, and a client-centric approach]</p>
        </div>
        <div className=' border-prime border-2 p-10 mx-2 my-2 rounded'>
          <h3 className="text-2xl font-semibold mb-2">5. Visual Element Placeholder:</h3>
          <p>[Placeholder for visual elements like images, charts, etc.]</p>
        </div>
      </div>
    </div>
  );
};

export default TeamOverview;