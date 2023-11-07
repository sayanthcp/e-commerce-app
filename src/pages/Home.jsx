import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import TopProducts from '../components/TopProducts'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slider />
      <Categories />
      <TopProducts />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
