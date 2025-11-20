import React from 'react'

const stats = [
  {value: '7', label: 'Days Battery'},
  {value: '24/7', label: 'Health Monitoring'},
  {value: '100k+', label: 'Active Users'},
  {value: '4.9', label: 'Avg Rating'}
]

export default function Stats(){
  return (
    <section className="py-8">
      <div className="container-lg px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 rounded-lg p-4">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-gray-900">{s.value}</div>
              <div className="text-sm text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
