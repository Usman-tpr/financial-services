import { useTranslation } from 'react-i18next';
import React from 'react'
import HeroSection from '../components/HomePage/HeroSection';
import AboutSection from '../components/HomePage/AboutSection';
import MissionSection from '../components/HomePage/MissionSection';
import WhatWeOffer from '../components/HomePage/WhatWeOffer';
import SubscribeSection from '../components/HomePage/SubscribeSection';
import ContactSection from '../components/HomePage/ContactSection';

const Home = () => {
  const { t } = useTranslation();


  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <WhatWeOffer />
      <SubscribeSection />
      <ContactSection />

    </>
  )
}

export default Home