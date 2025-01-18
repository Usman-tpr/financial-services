import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Slide } from 'react-reveal';
import CenterLine from '../../common/CenterLine';

const AboutSection = () => {
  const { t } = useTranslation()

  return (
    <div className=" py-16 !bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading Section */}
        <Slide bottom duration={2000}>
          <h1 className="text-lg md:text-3xl font-extrabold text-prime  text-center">
            {t("aboutSectionTitle")}
          </h1>
        </Slide>
        <CenterLine />

        {/* Introduction Section */}
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed text-center">
          {t("aboutSectionDesc")}
        </p>

        {/* Services Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            {
              title: t("aboutSectionCardTitle2"),
              desc: t("aboutSectionCardDesc2"),
              image: "https://cdn.pixabay.com/photo/2023/07/19/23/04/ai-generated-8138052_640.png"
            },
            {
              title: t("aboutSectionCardTitle3"),
              desc: t("aboutSectionCardDesc3"),
              image: "https://cdn.pixabay.com/photo/2012/04/26/19/51/money-42955_640.png"
            },
            {
              title: t("aboutSectionCardTitle4"),
              desc: t("aboutSectionCardDesc4"),
              image: 'https://cdn.pixabay.com/photo/2016/06/13/15/07/presentation-1454403_640.png'
            },
            {
              title: t("aboutSectionCardTitle5"),
              desc: t("aboutSectionCardDesc5"),
              image: "https://cdn.pixabay.com/photo/2013/07/12/16/31/cost-151072_640.png"
            },
          ].map((service, index) => (
            <Slide>
              <div
                key={index}
                className="p-6 bg-prime flex space-x-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                <Slide bottom duration={2000}>
                  <img src={service.image} alt="" className='w-36 mx-auto' />
                </Slide>
                <Slide right duration={2000}>
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 ">{service.desc}</p>
                  </div>
                </Slide>
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