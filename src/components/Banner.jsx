import React from 'react'
import BannerCard from '../home/Bannercard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side  */}
            <div className='md:w-1/2 space-y-8'>
                <h2 className='text-6xl font-bold leading-snug text-black'>Buy And Sell Your Books
                <span className='text-blue-700'>For The Best Prices</span></h2>
                <p className='md:w-4/5 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                   Asperiores dolorum atque aperiam veritatis minus dolore quibusdam, 
                   et voluptate at quam veniam? Ab cum quae facilis.</p>
                <div>
                    <input type="search"  name='search' id='search' placeholder='Search a book' className='py-2 px-3 rounded-s-sm outline-none border-none'/>
                    <button className='bg-blue-700 px-5 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>
            {/* right side */}
            <div><BannerCard/></div>
        </div>
    </div>
  )
}

export default Banner