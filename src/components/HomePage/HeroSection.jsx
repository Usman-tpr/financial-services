import React from 'react'
import { useTranslation } from 'react-i18next'
import { Slide } from 'react-reveal'

const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className='mt-10 text-white h-[80vh] w-full flex justify-center items-start' style={{ backgroundImage: "url('/images/header.svg')" }}
      >
        <div>
          <Slide top duration={2000}>
            <img src="/images/hero.png" className='w-44 mx-auto mb-3 mt-20' alt="" />
          </Slide>
          <Slide left duration={1000}>
            <h1 className='text-2xl font-extrabold text-center'> {t("title")}</h1>
          </Slide>
          <Slide right duration={2000}>
            <h1 className='text-lg font-semibold text-center text-gray-300 mx-20 mt-2'> {t("description")}</h1>

          </Slide>
        </div>

      </div>

    </>
  )
}

export default HeroSection