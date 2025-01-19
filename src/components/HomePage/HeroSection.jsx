import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { Slide } from 'react-reveal'

const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className=' text-white h-[80vh] w-full flex justify-center items-center  bg-cover' style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2020/03/18/20/01/frankfurt-4945405_640.jpg')" }}
      >
        <div className='text-prime flex flex-col  items-center'>
          {/* <Slide top duration={2000}>
            <img src="/images/hero.png" className='w-44 mx-auto mb-3 mt-20' alt="" />
          </Slide> */}
          <Slide top duration={1000}>
            <h1 className='text-2xl font-extrabold text-center'> {t("title")}</h1>
          </Slide>
          <Slide bottom duration={2000}>
            <h1 className='text-lg font-semibold text-center  mx-20 mt-2'> {t("description")}</h1>

          </Slide>
          <div className='flex space-x-5 mt-4 items-center justify-center'>
            <Slide left duration={2000}>
              <div className="flex items-center font-medium">
                <FaEnvelope className="mr-2 text-xl" />
                <span className='text-prime text-xl font-semibold'>  {t("footer.email")}</span>
              </div>
            </Slide>
            <Slide right duration={2000}>
              <div className="flex items-center  font-medium">
                <FaPhoneAlt className="mr-2 text-xl" />
                <span className='text-prime text-xl font-semibold'>{t("footer.phone")}</span>
              </div>
            </Slide>
          </div>
          <Slide bottom duration={2000}>
            <div className="flex items-center font-medium mt-2">
              <ImLocation2 className="mr-2 text-xl" />
              <span className='text-prime text-xl font-semibold'>{t("footer.address")}</span>
            </div>
          </Slide>
          <button className='text-prime bg-yellow-300 px-4   py-2 rounded w-auto text-xl font-semibold mt-5'>Read More</button>
        </div>

      </div>

    </>
  )
}

export default HeroSection