import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaCheckCircle } from 'react-icons/fa'
import { Slide } from 'react-reveal'
import { Link } from 'react-router-dom'
import { FaUpRightFromSquare } from "react-icons/fa6";
const AlhayatConfirm = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className='my-10 text-white bg-black/50 bg-[url("https://cdn.pixabay.com/photo/2018/01/17/04/14/businessman-3087395_960_720.jpg")] bg-cover '>
                    <div className='bg-black bg-opacity-50 p-20 flex items-center justify-center'>
                        <div >
                            <Slide bottom reset>
                                <h1 className='text-lg md:text-4xl font-bold flex items-center gap-3'> <FaCheckCircle className='text-prime bg-white rounded-full border-prime border-2' /> {t("h1")}</h1>
                            </Slide>
                            <Slide bottom  duration={3000}>
                                <p className='px-20 font-sans flex items-center gap-3 mt-3'><FaCheckCircle size={30} className='text-prime bg-white rounded-full border-prime border-2' />{t("t1")}</p>

                            </Slide>
                            <Slide bottom duration={4000}>
                                <p className='px-44 font-semibold text-xl flex items-center gap-3 mt-3'><FaCheckCircle size={30} className='text-prime bg-white rounded-full border-prime border-2' />{t("t2")}</p>

                            </Slide>

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

export default AlhayatConfirm