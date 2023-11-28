
import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { BsSearch,BsSaveFill} from "react-icons/bs";
import { FaShoppingCart,FaWallet, FaUserFriends  } from "react-icons/fa";
import { IoMdClose ,IoMdHelpCircle,IoMdPricetag} from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";

function Navbar() {
  const [nav,setNav]=useState(false);
  return (

    //left side
   <div className=' max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      <div className='flex items-center'>
         <div onClick={()=>setNav(!nav)} 
         className=' cursor-pointer'>
            <HiMenu size={30}/>
          </div>
            <h1 className=' text-2xl sm:text-3xl lg:text-4xl px-2
                           font-bold'>
             Zwigato
            </h1>
          <div className=' hidden lg:flex items-center bg-gray-200 rounded-full
                        p-1 text-[13px]'>
              <p className=' bg-black text-white rounded-full font-bold p-2 '> Delivery</p>
              <p className='p-2 font-bold'>Pickup</p>
           </div>

      {/* search inputs */}    
      </div>

        <div className=' bg-gray-200 rounded-full flex items-center
                         px-2 w-[200px] sm:w-[400px] lg:[500px]'>
            <BsSearch size={20}/>
            <input className=' bg-transparent p-2  w-full focus:outline-none' 
            type="text" placeholder='Search Foods' />
        </div>

        {/* cart button */}

        <button className=' bg-black text-white hidden md:flex
                           items-center py-2 rounded-full'>
           <FaShoppingCart />
           cart
        </button>

        {/*mobile menu */}
        {/* overlay */}
        {nav? <div className=' bg-black/80 fixed w-full h-screen z-10 top-0 left-0'> 
          </div >:''}
       
         
         {/* side drwaer menu */}
        <div className={ nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-3000':
            'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>

            <IoMdClose onClick={()=>setNav(!nav)}
             size={30} className=' absolute right-4 top-4
               cursor cursor-pointer'/> 
             <h2 className='text-3xl p-4 font-bold'>
             Zwigato
             </h2>
             <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                   <li
                    className=' text-xl py-4 flex'>
                      <TbTruckDelivery size={25} className=' mr-4'/>
                     Orders</li>

                     <li
                    className=' text-xl py-4 flex'>
                      <MdFavorite  size={25} className=' mr-4'/>
                     Favourties</li>

                     <li
                    className=' text-xl py-4 flex'>
                      <FaWallet  size={25} className=' mr-4'/>
                     Wallet</li>

                     <li
                    className=' text-xl py-4 flex'>
                      <IoMdHelpCircle size={25} className=' mr-4'/>
                     Help</li>

                     <li
                    className=' text-xl py-4 flex'>
                      < IoMdPricetag size={25} className=' mr-4'/>
                     Promotion</li>

                     <li
                    className=' text-xl py-4 flex'>
                      <BsSaveFill size={25} className=' mr-4'/>
                     Best One</li>

                     <li
                    className=' text-xl py-4 flex'>
                      < FaUserFriends  size={25} className=' mr-4'/>
                     Invite Friends</li>
                </ul>
             </nav>
        </div>
  </div>

  )
}

export default Navbar