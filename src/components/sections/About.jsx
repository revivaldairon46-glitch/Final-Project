import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-16 section-muted">
      <div className="container-lg px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Our story</h3>
          <p className="mt-4 text-gray-700">Revival Watches started with a simple belief: a smartwatch should be built to last both in style and function. We blend durable materials with intuitive software to craft devices that fit seamlessly into the rhythm of daily life.</p>
          <ul className="mt-4 text-gray-700 list-disc pl-5">
            <li>Designed for longevity</li>
            <li>Ethical materials sourcing</li>
            <li>Community-driven product improvements</li>
          </ul>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img src="/src/assets/images/about-watch.jpg" alt="Close-up of Revival watch" className="rounded-lg shadow-md w-full max-w-md" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
