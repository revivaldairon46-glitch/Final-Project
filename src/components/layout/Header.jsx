import React from 'react'
import Navigation from './Navigation'

export default function Header(){
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container-lg px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center text-gray-900 font-bold">RW</div>
          <div>
            <div className="text-lg font-semibold text-gray-900">Revival Watches</div>
            <div className="text-xs text-gray-600">Time Reborn</div>
          </div>
        </div>
        <Navigation />
      </div>
    </header>
  )
}
