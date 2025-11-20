import React from 'react'

const quotes = [
  {name: 'Ava R.', quote: 'The battery life is unreal — I barely charge it once a week.'},
  {name: 'Liam H.', quote: 'Comfortable, accurate, and stylish. My daily companion.'},
  {name: 'Maya K.', quote: 'Great customer support and a beautiful product.'}
]

export default function Testimonials(){
  return (
    <section className="py-16 bg-neutralLight/5">
      <div className="container-lg px-6">
        <h3 className="text-2xl font-bold text-gray-900">What People Are Saying</h3>
        <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map(q => (
            <blockquote key={q.name} className="bg-gray-50 rounded-lg p-6 text-gray-700">
              <p className="italic">“{q.quote}”</p>
              <div className="mt-4 font-semibold text-gray-900">{q.name}</div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
