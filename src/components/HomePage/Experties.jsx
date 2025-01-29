import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaInfoCircle } from "react-icons/fa";
import { FaUpRightFromSquare } from 'react-icons/fa6';
import { Slide } from 'react-reveal'
import { Link } from 'react-router-dom'

const Experties = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className='my-10 text-white bg-black/50 bg-[url("https://cdn.pixabay.com/photo/2020/08/09/06/44/business-5474697_1280.jpg")] bg-cover '>
          
                    <div className='bg-black bg-opacity-50  flex flex-col items-center justify-center pt-10'>
                        <h1 className='text-lg md:text-4xl font-bold flex items-center gap-3'>  {t("h2")}</h1>
                        <div className='w-36 h-1 bg-prime mx-auto my-2'></div>
                
                        <div className="flex justify-center gap-10  my-10 mx-36">
                            <div className="w-[50%] flex">
                                <div className="p-5 flex flex-col items-start border-2 space-y-4 w-full">
                                    <h1 className="text-lg md:text-4xl font-bold flex items-center gap-3 mx-auto">
                                        {t("h2")}
                                    </h1>
                                    <Slide bottom>
                                        <h1 className="text-lg md:text-xl font-semibold flex items-center gap-3">
                                            <FaInfoCircle className="text-prime bg-white rounded-full border-prime border-2" size={50}/>
                                            {t("t3")}
                                        </h1>
                                    </Slide>
                                </div>
                            </div>
                            <div className="w-[50%] flex">
                                <div className="p-5 flex flex-col items-start border-2 space-y-4 w-full">
                                    <h1 className="text-lg md:text-4xl font-bold flex items-center gap-3 mx-auto">
                                        {t("h3")}
                                    </h1>
                                    <Slide bottom>
                                        <h1 className="text-lg md:text-xl font-semibold flex items-center gap-3">
                                            <FaInfoCircle className="text-prime  rounded-full bg-white h-12" size={130}/>
                                            {t("t4")}
                                        </h1>
                                    </Slide>
                                </div>
                            </div>
                        </div>
             
                    </div>
             
            </div>


            <Slide >
                <div className='flex items-center justify-center mt-10'>
                    <Link to='/about' className='hover:bg-prime hover:text-white duration-700  text-prime underline underline-offset-4 rounded text-xl font-bold  px-10 py-2 flex  items-center '>{t("readMore")}  <FaUpRightFromSquare className='pl-2 mt-1 text-2xl' /></Link>
                </div>
            </Slide>
        </>
    )
}

export default Experties