import React, { useContext } from 'react'
import Layout from '../../components/Layout/Layout'
// import MyContext from '../../Context/data/MyContext'
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
import Testimonial from '../../components/testimonial/Testimonial';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart, deleteFromCart } from '../../redux/cartSlice';
function Home() {
    // const context = useContext(MyContext);
    // console.log(context)
    // const dispatch = useDispatch();
    // const cartItem = useSelector((state)=>state.cart)
    // console.log(cartItem)
    // const addCart = () => {
    //   dispatch(addToCart("shirt"));
    // }
    // const deleteCart = () => {
    //   dispatch(deleteFromCart("shirt"));
    // }
  return (
    <Layout>
      {/* <div className="flex gap-5 justify-center">
        <button className=' bg-gray-300 p-5' onClick={()=> addCart()}>add</button>
        <button className=' bg-gray-300 p-5' onClick={()=> deleteCart()}>del</button>
      </div> */}
      <HeroSection/>
      <Filter/>
      <Testimonial/>
    </Layout>
  )
}

export default Home