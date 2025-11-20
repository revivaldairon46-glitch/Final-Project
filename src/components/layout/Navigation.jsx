import React from 'react'

export default function Navigation(){
  return (
    <nav>
      <ul className="flex items-center gap-6 text-sm">
        <li><a href="#features" className="hover:text-primary text-gray-900">Features</a></li>
        <li><a href="#about" className="hover:text-primary text-gray-900">About</a></li>
        <li><a href="#products" className="hover:text-primary text-gray-900">Products</a></li>
        <li><a href="#contact" className="hover:text-primary text-gray-900">Contact</a></li>
        <li><a href="#" className="px-4 py-2 bg-primary text-gray-900 rounded-md">Buy now</a></li>
      </ul>
    </nav>
  )
}
