import { useTranslation } from 'react-i18next';
import React from 'react';
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
import CookieConsent from '../components/HomePage/CookieConsent'; // Import the CookieConsent component
import ClientPage from '../components/HomePage/ClientPage';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <AlhayatConfirm />
      {/* <NewsAndMedia /> */}
      <ClientPage />
      <Experties />
      <MissionSection />
      <WhatWeOffer />
      <TeamOverview />
      <SubscribeSection />
      <ContactSection />
      <CookieConsent /> {/* Add CookieConsent here */}
    </>
  );
};

export default Home;
