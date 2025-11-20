import React from 'react'
import Card from '../common/Card'

const features = [
  {title: 'All-day battery', text: 'Up to 7 days of mixed use on a single charge.', img: '/src/assets/images/feature-battery.jpg'},
  {title: 'Health-first sensors', text: 'Advanced heart-rate, SpO2 and sleep analysis.', img: '/src/assets/images/feature-health.jpg'},
  {title: 'Rugged design', text: 'Water resistant and built for daily wear.', img: '/src/assets/images/feature-rugged.jpg'}
]

export default function Features(){
  return (
    <section id="features" className="py-16 section-muted">
      <div className="container-lg px-6">
        <h2 className="text-2xl font-bold text-gray-900">Features that keep up</h2>
        <p className="mt-2 text-gray-700 max-w-2xl">Purpose-built features for modern life — accessible, accurate and always-on.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f)=> (
            <Card key={f.title} title={f.title} text={f.text} image={f.img} />
          ))}
        </div>
      </div>
    </section>
  )
}
