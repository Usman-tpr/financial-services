import React from 'react'
import { useTranslation } from 'react-i18next'
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
          <button className='text-prime bg-yellow-300 px-4   py-2 rounded w-auto text-xl font-semibold mt-5'>Read More</button>
        </div>

      </div>

    </>
  )
}

export default HeroSection