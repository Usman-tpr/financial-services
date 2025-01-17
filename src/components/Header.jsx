import React from 'react'
import { Slide } from 'react-reveal'

const Header = ({ header, description }) => {
    return (
        <>
            <section className="text-center   bg-prime py-24">
                <Slide top duration={2000}>
                    <h1 className="text-4xl font-bold text-white mb-4">
                        {header}
                    </h1>
                </Slide>
              <Slide bottom duration={2000}>
              <p className="text-lg text-gray-200">
                    {description}
                </p>
              </Slide>
            </section>
        </>
    )
}

export default Header