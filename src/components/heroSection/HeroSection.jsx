import React, { useContext } from 'react'
import MyContext from '../../Context/data/MyContext'

function HeroSection() {
  const context= useContext( MyContext);
  const {mode}=context
  return (
    <div>
        {/* <img  src="https://static.vecteezy.com/system/resources/previews/013/176/531/non_2x/gifts-in-shopping-cart-on-black-background-black-friday-stoke-illustration-vector.jpg" alt="" /> */}
        <section className={mode === "dark" ? "py-12 bg-gray-900 sm:pb-16 lg:pb-20 xl:pb-24" : "py-12"}>
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="grid items-center max-w-5xl grid-cols-1 mx-auto gap-y-8 lg:grid-cols-5 gap-x-16">
                <div class="max-w-md mx-auto text-center lg:max-w-none lg:col-span-3">
                <h1 className={`text-4xl font-normal text-white uppercase sm:text-5xl lg:text-6xl xl:text-8xl`}>Get things at<span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">lowest Price</span></h1>
                    <p class="mt-6 text-lg font-normal text-white sm:text-xl">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam.</p>
                    <div class="mt-8 sm:mt-10">
                        <a href="#" title="" class="inline-flex items-center justify-center px-8 py-4 text-base font-normal text-white transition-all duration-200 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:contrast-150" role="button">Shop Now</a>
                    </div>

                    <p class="max-w-xs mx-auto mt-4 text-base font-normal text-gray-400 sm:mt-8">
                        Discount till 31 Dec .<br />
                        Flat $500 off
                    </p>
                </div>

                <div class="lg:col-span-2 lg:order-first">
                    <img class="w-full max-w-sm mx-auto" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/3/iphone-mockup.png" alt="" />
                </div>
            </div>
        </div>
    </section>
    </div>
  
    
  )
}

export default HeroSection
