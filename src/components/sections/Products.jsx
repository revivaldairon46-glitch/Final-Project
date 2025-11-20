import React from 'react'

// Use all uploaded images in src/assets/images excluding README and feature/hero/about images
const assetImages = [
  '1697474635-ex120-10-ac-ab-abrua.avif',
  '1697475089-oi100-40-aa-ac-a.avif',
  '1712158847-billionaire-iii.avif',
  '1742836115-dtz-tourbillon-v3-2-copy.avif',
  '1743100302-astro-revolution-2024-rg-red-vf-1.avif',
  '1755786764-bu820-30-bd-ua-abrua.avif',
  'image.jpg',
  'paul-cuoco-CO2vOhPqlrM-unsplash (1).jpg',
  'yash-parashar-LWPPpkn6NEQ-unsplash (1).jpg'
]

const products = assetImages.map((file, i) => ({
  title: `Revival Model ${i+1}`,
  price: `$${199 + i * 50}`,
  img: `/src/assets/images/${file}`,
}))

export default function Products(){
  return (
    <section id="products" className="py-16 bg-transparent">
      <div className="container-lg px-6">
        <h2 className="text-2xl font-bold text-gray-900">All Products</h2>
        <p className="text-gray-700 mt-2">Premium smartwatches crafted for everyday life.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map(p => (
            <div key={p.title} className="bg-gray-50 rounded-lg p-3">
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover rounded-md" loading="lazy" />
              <div className="mt-3 text-gray-900 font-semibold">{p.title}</div>
              <div className="text-gray-700 mt-1">{p.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
