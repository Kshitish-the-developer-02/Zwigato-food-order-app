import React, { useState } from 'react'
import{data} from '../data/Data.js'

function Food() {
    const[foods,setFoods]=useState(data);

    {/* filter by burger/piza/salad/chicken... by foods */}
    const filterType=(category)=>{
      setFoods(
        data.filter((item)=>{
          return item.category===category;
        })
      );
    }

    {/*filter by price */}
    const filterPrice=(price)=>{
        setFoods(
          data.filter((item)=>{
             return item.price===price
          })
        )
    }

  return (
       <div className=' max-w-[1640px] m-auto px-4 py-12'>
          <h1 className=' text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
          {/*Filter Row */}
          <div className=' flex flex-col lg:flex-row justify-between'> {/* filter type */}
             <div>
                <p className=' font-bold text-gray-700'>Filter Type</p>
                <div className=' flex justify-between flex-wrap'>
                    <button onClick={()=>setFoods(data)} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button  onClick={()=>filterType('burger')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burger</button>
                    <button  onClick={()=>filterType('pizza')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={()=>filterType('salad')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                    <button onClick={()=>filterType('chicken')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
             </div>
             {/* Fliter price */}
             <div>
                <p className=' font-bold text-gray-700'>Filter Price</p>
                <div className=' flex justify-between max-w-[390px] w-full'>
                    <button onClick={()=>filterPrice('Rs.500/.')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'> Rs.500/.  </button>
                    <button onClick={()=>filterPrice('Rs.300/.')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'> Rs.300/.  </button>
                    <button onClick={()=>filterPrice('Rs.100/.')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'> Rs.100/.</button>
                    <button onClick={()=>filterPrice('Rs.600/.')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'> Rs.600/. </button>

            
                </div>
             </div>
          </div>

          {/* display foods */}
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6'>
            {foods.map((item,index)=>(
                <div key={index}
                   className=' border shadow-lg rounded-lg hover:scale-105 duration-300'>
                    <img className=' w-full h-[200px]
                           object-cover rounded-t-lg' 
                           src={item.image} alt={item.name} />
                      <div className=' flex justify-between px-2 py-4'>
                        <p className=' font-bold'>{item.name}</p>
                        <p>
                            <span className=' bg-orange-500 rounded-full text-white p-1'>
                                 {item.price}
                            </span>
                        </p>
                      </div>
                </div>
            ))}
          </div>
       </div>
    )
}

export default Food