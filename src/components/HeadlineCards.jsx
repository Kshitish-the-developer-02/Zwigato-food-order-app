import React from 'react'
import Idli from '../assets/images/idli.jpg'
import Chicken from '../assets/images/chicken.jpg'
import Fried from '../assets/images/fried.jpg'


function HeadlineCards() {
  return (
    <div className='max-w-[1540px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-4'>
    {/* Card */}
        <div className='rounded-xl relative'>
          {/* Overlay */}
               <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                    <p className='px-2'>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
            <img src={Idli} alt="idli"
            className=' max-h-[180px] md:max-h-[200px] w-full
                    object-cover rounded-xl' />
    </div>

    {/* Card */}
    <div className='rounded-xl relative'>
          {/* Overlay */}
               <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Felling <span>Hungry!..</span><br />Make Order Now</p>
                    <p className='px-2 font-bold'>Available in your nearest Resturant</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
            <img src={Chicken} alt="Chicken"
            className=' max-h-[180px] md:max-h-[200px] w-full
                    object-cover rounded-xl' />
    </div>

    {/* Card */}
    <div className='rounded-xl relative'>
          {/* Overlay */}
               <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Loved it . </p>
                    <p className='px-2 font-bold'> make it easy. eat it.</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
            <img src={Fried} alt="fried"
            className=' max-h-[180px] md:max-h-[200px] w-full
                    object-cover rounded-xl' />
    </div>
    </div>

    
  )
}

export default HeadlineCards