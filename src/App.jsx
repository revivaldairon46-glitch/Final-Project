import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import Features from './components/sections/Features'
import Products from './components/sections/Products'
import Testimonials from './components/sections/Testimonials'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col text-neutralDark">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <Products />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
