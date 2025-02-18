import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { Slide } from 'react-reveal'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className=' text-white   bg-cover' style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className='bg-prime bg-opacity-10 flex justify-center items-center h-[80vh] w-full'>
        <div className='text-white flex flex-col  items-center bg-prime bg-opacity-20 p-5 rounded'>
          {/* <Slide top duration={2000}>
            <img src="/images/hero.png" className='w-44 mx-auto mb-3 mt-20' alt="" />
          </Slide> */}
          <Slide top duration={1000}>
            <h1 className='text-4xl font-bold border-b-2 border-white  p-3 tracking-wider'> {t("title")}</h1>
          </Slide>
          <Slide bottom duration={2000}>
            <h1 className='text-lg font-medium text-center  mx-20 mt-6 tracking-wide'> {t("description")}</h1>

          </Slide>
          <div className='flex space-x-5 mt-4 items-center justify-center'>
            <Slide bottom duration={2000}>
              <div className="flex items-center font-medium">
                <FaEnvelope className="mr-2 text-xl text-prime" />
                <span className='text-white text-xl font-medium'>  {t("footer.email")}</span>
              </div>
            </Slide>
            <Slide bottom duration={2000}>
              <div className="flex items-center  font-medium">
                <FaPhoneAlt className="mr-2 text-xl text-prime" />
                <span className='text-white text-xl font-medium'>{t("footer.phone")}</span>
              </div>
            </Slide>
            <Slide bottom duration={2000}>
            <div className="flex items-center font-medium ">
              <ImLocation2 className="mr-2 text-xl text-prime" />
              <span className='text-white text-xl font-medium'>{t("footer.address")}</span>
            </div>
          </Slide>
          </div>
      
          <Link to='/services' className='text-prime hover:bg-white hover:border-prime hover:rounded-2xl duration-300 bg-yellow-300 px-4   py-2 rounded w-auto text-xl font-semibold mt-5'>Read More</Link>
        </div>
        </div>

      </div>

    </>
  )
}

export default HeroSection