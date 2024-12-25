import React from 'react'
import SliderComponent from './Slider1'
import Navbar from './Navigation'
import CustomSlider from './Nakles'
import ProductCard from './ProductCard'
import Parfect from './Parfect'
import ProductSlider from './ProductSlider'
import HeroSection from './Fit'

const Homepage = () => {
  return (
     <>
     <div className="container">
     

     <section className='slider1 mt-4'>
        
        <SliderComponent />
     </section>

     <section className='nakles mt-5'>
        <CustomSlider/>
     </section>

     <section className='productcard'>
        <ProductCard/>
     </section>

     <section className='hearing'>
        <CustomSlider />
     </section>

      

     <section className='parfect mt-5'>
      <Parfect/>
     </section>

     <section className='product_slider'>
      <ProductSlider/>
     </section>
     </div>  
     </>
  )
}

export default Homepage
