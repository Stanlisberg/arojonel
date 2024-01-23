import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Collections from './Collections'
import ProductNav from './ProductNav'

function Home() {
  return (
    <div>
     <Navbar />
     <Hero />
     <Collections />
     <ProductNav />
    </div>
  )
}

export default Home