import React from 'react'
import Header from '../Header'
import { Slide } from 'react-reveal'

const ClientPage = () => {
    const images = [
        { "image": "/images/1.png" },
        { "image": "/images/2.png" },
        { "image": "/images/3.png" },
        { "image": "/images/4.png" },
        { "image": "/images/5.png" },
        { "image": "/images/6.png" },
        { "image": "/images/7.jpeg" },
        { "image": "/images/8.png" },
        { "image": "/images/9.png" },
        { "image": "/images/10.jpeg" },
        { "image": "/images/11.png" },
        { "image": "/images/12.png" },
    ]
    return (
        <>
            <Header header={'KeyClient'} />
            <h1 className='text-center text-prime text-3xl font-bold my-10'>Our Key Clients</h1>
            <div className='grid grid-cols-1 sm:grid-cols-4 mx-2 sm:mx-28 gap-2 my-10'>
                {
                    images.map((e, index) => (
                        <Slide bottom duration={2000} key={index}>
                        <div className='border-2 border-prime rounded flex justify-center items-center'>
                        <img src={e.image} alt={`Client ${index + 1}`} className='w-44 object-cover' />
                        </div>
                        </Slide>
                    ))
                }
            </div>
        </>
    )
}

export default ClientPage
