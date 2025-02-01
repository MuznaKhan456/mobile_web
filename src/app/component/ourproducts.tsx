import React from 'react'
import Image from 'next/image'

import { IoEyeOutline, IoHeartOutline } from 'react-icons/io5'

const Ourproducts = () => {
  return (
    <div>
          <div className='text-primary flex gap-6 mt-20'>
        <button className='bg-primary py-1 px-1 rounded-sm'>a</button>
         <div className='font-semibold mt-1'>Our Products</div>
        </div>
            <div>
                <h2 className="text-5xl font-semibold mt-10">
                    Explore Our Products
                </h2>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-row-2 gap-4 mt-16'>
                {/* 1 */}
                <div>
                <div className='bg-gray-200 p-10 rounded-md '>
                    <div className='-mt-7'>
                        <IoHeartOutline className='bg-white size-7 rounded-full px-1 mx-60 ' />
                        <IoEyeOutline className='bg-white size-7 rounded-full px-1 mx-60 mt-4' />
                        <Image src="/dogfood.png" alt="" width={2000} height={5000} className='h-48 w-28 mx-16 -mt-6' />
                        </div>
                        </div>
                        <h3>HAVIT HV-G92 Gampepad</h3>
                        <h3><span className='text-primary'>$120</span> $160</h3>
                         <Image src="/fivestar.png" alt="" width={5000} height={5000} className='h-6 w-28'/>
                 </div>

                {/* 2 */}
                <div>
                <div className='bg-gray-200 p-16 rounded-md '>
                    <div className='-mt-12'>
                        <IoHeartOutline className='bg-white size-7 rounded-full px-1 mx-56' />
                        <IoEyeOutline className='bg-white size-7 rounded-full px-1 mx-56 mt-4' />
                        <Image src="/camera.png" alt="" width={1000} height={1000} className='h-36 w-40 mx-6 -mt-1' />
                    </div>
                    </div>
                    <h3>AK-900 Wired Keyboard</h3>
                    <h3><span className='text-primary'>$960 </span>$1160</h3>
                    <Image src="/Fourstar.png" alt="" width={5000} height={5000} className='h-6 w-28'/>
                </div>

                {/* 3 */}
                   <div>
                    <div className='bg-gray-200 p-16 rounded-md'>
                        <div className='-mt-12'>
                            <IoHeartOutline className='bg-white size-7 rounded-full px-1 mx-56' />
                            <IoEyeOutline className='bg-white size-7 rounded-full px-1 mx-56 mt-4' />
                            <Image src="/laptop.png" alt="" width={1000} height={1000} className='h-36' />
                        </div> 
                        </div>
                        <h3>IPS LCD Gaming Monitor</h3>
                        <h3><span className='text-primary'>$370</span> $400</h3>
                        <Image src="/Fivestar.png" alt="" width={5000} height={5000} className='h-6 w-28'/>
                    </div>
                {/* 4 */}
                       <div>
                        <div className='bg-gray-200 p-1 pl-24 rounded-md'>
                            <div className='mt-2'>
                                <IoHeartOutline className='bg-white size-7 rounded-full px-1 mx-48' />
                                <IoEyeOutline className='bg-white size-7 rounded-full px-1 mx-48 mt-4' />
                                <Image src="/chair.png" alt="" width={1000} height={1000} className='h-52 w-28' />
                            </div>
                            </div>
                            <h3>S-Series Comfort Chair</h3>
                            <h3><span className='text-primary'>$375 </span>$400</h3>
                            <Image src="/Fourhalfstar.png" alt="" width={5000} height={5000} className='h-6 w-28'/>
                        </div>
                {/* 5 */}
                        <div>
                        <div className='bg-gray-200 p-1 pl-24 rounded-md'>
                            <div className='mt-3'><button className='bg-[#00FF66] py-1 px-4 rounded-md text-white -mx-20  '>NEW</button></div>
                            <div className='-mt-8'>
                                <IoHeartOutline className='bg-white size-7 rounded-full px-1 mx-48' />
                                <IoEyeOutline className='bg-white size-7 rounded-full px-1 mx-48 mt-4' />
                                <Image src="/car.png" alt="" width={1000} height={1000} className='h-48 w-36 ' />
                            </div>
                            </div>
                            <h3>S-Series Comfort Chair</h3>
                            <h3><span className='text-primary'>$375 </span>$400</h3>
                            <Image src="/Fourhalfstar.png" alt="" width={5000} height={5000} className='h-6 w-28'/>
                        </div>
                {/* 6 */}
                     <div>
                        <div className='bg-gray-200 p-1 pl-24 rounded-md'>
                            <div className='mt-3'>
                                <IoHeartOutline className='bg-white size-7 rounded-full px-1 mx-48' />
                                <IoEyeOutline className='bg-white size-7 rounded-full px-1 mx-48 mt-4' />
                                <Image src="/shoe.png" alt="" width={1000} height={1000} className='h-48 w-32' />
                            </div>
                            </div>
                            <h3>S-Series Comfort Chair</h3>
                            <h3><span className='text-primary'>$375 </span>$400</h3>
                            <Image src="/Fourhalfstar.png" alt="" width={5000} height={5000} className='h-6 w-28'/>
                        </div>
                {/* 7 */}
                        <div>
                            <div className='bg-gray-200 p-1 pl-24 rounded-md'>
                            <div className='mt-3'>
                                <button className='bg-[#00FF66] py-1 px-4 rounded-md text-white -mx-20  '>NEW</button></div>
                           <div className='-mt-8'>
                                <IoHeartOutline className='bg-white size-7 rounded-full px-1 mx-48' />
                                <IoEyeOutline className='bg-white size-7 rounded-full px-1 mx-48 mt-4' />
                                </div>
                                <Image src="/blackremote.png" alt="" width={1000} height={1000} className='h-48 w-40 ' />
                           
                            </div>
                            <h3>S-Series Comfort Chair</h3>
                            <h3><span className='text-primary'>$375 </span>$400</h3>
                            <Image src="/Fourhalfstar.png" alt="" width={5000} height={5000} className='h-6 w-28'/>
                        </div>
                {/* 8 */}
                        <div>
                        <div className='bg-gray-200 p-1 pl-24 rounded-md'>
                            <div className='mt-3'>
                                <IoHeartOutline className='bg-white size-7 rounded-full px-1 mx-48' />
                                <IoEyeOutline className='bg-white size-7 rounded-full px-1 mx-48 mt-4' />
                                <Image src="/blackjacket.png" alt="" width={1000} height={1000} className='h-48 w-36' />
                            </div>
                            </div>
                            <h3>S-Series Comfort Chair</h3>
                            <h3><span className='text-primary'>$375 </span>$400</h3>
                            <Image src="/Fourhalfstar.png" alt="" width={5000} height={5000} className='h-6 w-28'/>
                        </div>
                        
                  
                    </div>
                    <div className='py-9 text-center'>
                        <button className='bg-primary py-2 px-9 rounded-sm text-white'>View All Product</button>
                    </div>

     
    </div>
  )
}

export default Ourproducts