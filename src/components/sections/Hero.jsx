import React from 'react'
import Button from '../common/Button'
import ResponsiveImage from '../common/ResponsiveImage'
import heroImg from '../../assets/images/1747160177-table-clock-front-hd-vf-copy-1.avif'

export default function Hero(){
  return (
    <section className="relative">
      <div className="container-lg px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-gray-900">Revival — The smartwatch reimagined</h1>
          <p className="mt-6 text-gray-700 max-w-xl">Engineered for longevity and designed for life. Seamless health tracking, unbeaten battery life, and timeless style.</p>
          <div className="mt-8 flex gap-4">
            <Button variant="primary">Shop the Collection</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
            <ResponsiveImage
            src={heroImg}
            alt="Revival smartwatch product image"
            className="w-full max-w-[560px] rounded-xl shadow-2xl border border-gray-200 bg-white object-contain"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
        {/* Stats bar injected by Stats component area spacing handled in App */}
      </div>
    </section>
  )
}
