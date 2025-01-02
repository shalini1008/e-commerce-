import React, { useContext } from 'react'
import Layout from '../../components/Layout/Layout'
import MyContext from '../../Context/data/MyContext'
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
import Testimonial from '../../components/testimonial/Testimonial';
function Home() {
    const context = useContext(MyContext);
    console.log(context)
  return (
    <Layout>
      <HeroSection/>
      <Filter/>
      <Testimonial/>
    </Layout>
  )
}

export default Home