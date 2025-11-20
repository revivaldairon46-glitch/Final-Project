import React from 'react'
import PropTypes from 'prop-types'

export default function Card({title, text, image}){
  return (
    <article className="bg-gray-50 rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <img src={image.startsWith('/') ? image : `${image}?auto=format&fit=crop&w=800&q=60`} alt={title} className="w-full h-44 object-cover" loading="lazy" />
      <div className="p-4">
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="mt-2 text-gray-700 text-sm">{text}</p>
      </div>
    </article>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string
}
