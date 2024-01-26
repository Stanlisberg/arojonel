import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Collections from './Collections'
import Products from './Products'
import Footer from './Footer'


function Home() {
  return (
    <div>
     {/* <Navbar /> */}
     <Hero />
     <Collections />
     <Products />
     <Footer />
    </div>
  )
}

export default Home