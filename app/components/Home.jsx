import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Collections from './Collections'
import Products from './Products'
import Footer from './Footer'


function Home() {
  return (
    <div className='bg-zinc-200 pb-10'>
     <Hero />
     <Collections />
     <Products />
    </div>
  )
}

export default Home