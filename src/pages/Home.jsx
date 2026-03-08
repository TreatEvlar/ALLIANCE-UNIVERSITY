import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Rankings from '../components/Rankings'
import AboutMBA from '../components/AboutMBA'
import Specializations from '../components/Specializations'
import AboutUs from '../components/AboutUs'
import TransformSection from '../components/TransformSection'
import ProgramOutcome from '../components/ProgramOutcome'
import FAQ from '../components/FAQ'
import VisionMission from '../components/VisionMission'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="font-sans">
        <Navbar />
        <Hero />
        <Rankings />
        <AboutMBA />
        <Specializations />
        <AboutUs />
        <TransformSection />
        <ProgramOutcome />
        <FAQ />
        <VisionMission />
        <Footer />
    </div>
  )
}

export default Home
