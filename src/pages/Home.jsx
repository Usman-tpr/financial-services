import { useTranslation } from 'react-i18next';
import React from 'react'
import HeroSection from '../components/HomePage/HeroSection';
import AboutSection from '../components/HomePage/AboutSection';
import MissionSection from '../components/HomePage/MissionSection';
import WhatWeOffer from '../components/HomePage/WhatWeOffer';
import SubscribeSection from '../components/HomePage/SubscribeSection';
import ContactSection from '../components/HomePage/ContactSection';
import AlhayatConfirm from '../components/HomePage/AlhayatConfirm';
import Experties from '../components/HomePage/Experties';
import NewsAndMedia from '../components/HomePage/News&Media';
import TeamOverview from '../components/HomePage/TeamOverview';

const Home = () => {
  const { t } = useTranslation();


  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <AboutSection />
      <AlhayatConfirm />
      <NewsAndMedia />
      <Experties />
      <MissionSection />
      <WhatWeOffer />
      <TeamOverview />
      <SubscribeSection />
      <ContactSection />


    </>
  )
}

export default Home