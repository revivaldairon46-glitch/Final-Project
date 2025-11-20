import React from 'react'
import Button from '../common/Button'

export default function Contact(){
  return (
    <section id="contact" className="py-16">
      <div className="container-lg px-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900">Stay in the loop</h3>
        <p className="mt-3 text-gray-700">Sign up for updates, release notes, and early access offers.</p>
        <div className="mt-6 flex justify-center">
          <form className="w-full max-w-xl flex gap-3">
            <input aria-label="Email" type="email" placeholder="you@domain.com" className="flex-1 px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-900" />
            <Button variant="primary">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
