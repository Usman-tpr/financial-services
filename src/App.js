import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import Navbar from './components/Navbar'
import Footer from './components/HomePage/Footer'
import OurValues from './pages/OurValues'
import MissionVisionPage from './pages/MissionVisionPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import Services from './components/HomePage/ServicesPage'
import AdvisoryPage from './pages/AdvisoryPage'
import TaxationPage from './components/HomePage/TaxationPage'
import CapacityPage from './components/HomePage/CapacityPage'
import LegalPage from './components/HomePage/LegalPage'
import Research from './components/HomePage/Research'
import AssetPage from './components/HomePage/AssetPage'
import SectorPage from './components/HomePage/SectorPage'
import PublicSector from './components/HomePage/PublicSector'
import PrivateSector from './components/HomePage/PrivateSector'
import NGOSector from './components/HomePage/NGOSector'
import ClientPage from './components/HomePage/ClientPage'
import Careers from './components/HomePage/careers'
import Contact from './components/HomePage/Contact'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/our-values' element={<OurValues />} />
        <Route path='/our-mission&vision' element={<MissionVisionPage />} />
        <Route path='/privacy&policy' element={<PrivacyPolicyPage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/advisory' element={<AdvisoryPage />} />
        <Route path='/taxation' element={<TaxationPage />} />
        <Route path='/capacity' element={<CapacityPage />} />
        <Route path='/legal' element={<LegalPage />} />
        <Route path='/research' element={<Research />} />
        <Route path='/asset' element={<AssetPage />} />
        <Route path='/sectors' element={<SectorPage />} />
        <Route path='/public-sector' element={<PublicSector />} />
        <Route path='/private-sector' element={<PrivateSector />} />
        <Route path='/ngo-sector' element={<NGOSector />} />
        <Route path='/our-clients' element={<ClientPage />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App