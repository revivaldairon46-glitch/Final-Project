import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white border-t border-gray-200 py-12 mt-12">
      <div className="container-lg px-6 text-sm text-gray-700 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="text-gray-900 font-semibold">Revival Watches</div>
          <div className="mt-2 text-gray-700">Time Reborn — crafted smartwatches built to last.</div>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Links</div>
          <ul className="mt-2 space-y-1">
            <li><a className="text-gray-700 hover:text-gray-900" href="#features">Features</a></li>
            <li><a className="text-gray-700 hover:text-gray-900" href="#about">About</a></li>
            <li><a className="text-gray-700 hover:text-gray-900" href="#products">Products</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Contact</div>
          <div className="mt-2 text-gray-700">support@revivalwatches.example</div>
        </div>
        <div className="col-span-full text-center text-gray-500 mt-6">© {new Date().getFullYear()} Revival Watches — All rights reserved</div>
      </div>
    </footer>
  )
}
