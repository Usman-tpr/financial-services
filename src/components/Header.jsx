import React from 'react'
import { Slide } from 'react-reveal'

const Header = ({ header, description }) => {
    return (
        <>
            <section className="text-center bg-contain bg-no-repeat  " style={{ backgroundImage: "url('/images/logo.png')" }}>
           <div className='bg-prime bg-opacity-80 py-24 text-white'>
           <Slide top duration={2000}>
                    <h1 className="text-4xl font-bold mb-4">
                        {header}
                    </h1>
                </Slide>
              <Slide bottom duration={2000}>
              <p className="text-lg ">
                    {description}
                </p>
              </Slide>
           </div>
            </section>
        </>
    )
}

export default Header