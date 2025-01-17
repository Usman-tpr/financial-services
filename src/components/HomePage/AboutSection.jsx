import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Slide } from 'react-reveal';

const AboutSection = () => {
  const { t } = useTranslation()

  return (
    <div className=" py-16 !bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading Section */}
        <Slide left duration={3000}>
          <h1 className="text-lg md:text-2xl font-bold text-prime mb-6 text-center">
            {t("aboutSectionTitle")}
          </h1>
        </Slide>

        {/* Introduction Section */}
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed text-center">
          {t("aboutSectionDesc")}
        </p>

        {/* Services Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: t("aboutSectionCardTitle2"),
              desc: t("aboutSectionCardDesc2"),
              image: "https://cdn.pixabay.com/photo/2022/12/02/11/24/tax-7630744_1280.png"
            },
            {
              title: t("aboutSectionCardTitle3"),
              desc: t("aboutSectionCardDesc3"),
              image: "https://cdn.pixabay.com/photo/2015/02/21/17/46/finantial-644453_640.png"
            },
            {
              title: t("aboutSectionCardTitle4"),
              desc: t("aboutSectionCardDesc4"),
              image: 'https://cdn.pixabay.com/photo/2016/06/13/15/07/presentation-1454403_640.png'
            },
            {
              title: t("aboutSectionCardTitle5"),
              desc: t("aboutSectionCardDesc5"),
              image: "https://cdn.pixabay.com/photo/2016/03/31/20/40/arrow-1295953_640.png"
            },
          ].map((service, index) => (
            <Slide bottom duration={2000}>
              <div
                key={index}
                className="p-6 bg-prime rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                <img src={service.image} alt="" className='w-36 mx-auto' />
                <h3 className="text-2xl font-bold text-yellow-300 mb-2 mt-6 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-center">{service.desc}</p>
              </div>
            </Slide>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-yellow-300 text-gray-900 font-bold rounded-lg hover:bg-yellow-400 transition duration-300">
            {t("aboutSectionButton")}
          </button>
        </div>
      </div>
    </div>

  )
}

export default AboutSection