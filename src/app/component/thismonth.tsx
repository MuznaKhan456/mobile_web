import React from 'react'
import Image from 'next/image'
import { IoEyeOutline, IoHeartOutline } from 'react-icons/io5'

const Thismonth = () => {
    return (
        <div>
            <div className='text-primary flex gap-6 mt-20'>
                <button className='bg-primary py-1 px-1 rounded-sm'>a</button>
                <div className='font-semibold mt-1'>This Month</div>
            </div>
            <div className='flex justify-between py-10'>
                <div className=' text-5xl font-semibold '>
                    Best Selling Products
                </div>


                <div>
                    <button className='bg-primary py-2 px-6 rounded-sm text-white'>View All</button>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-9'>
                <div>
                    <div className='bg-gray-200 p-11'>
                        <div className='ml-8 -mt-6'>
                    <IoHeartOutline className='bg-white size-7 rounded-full px-1 mx-48' />
                    <IoEyeOutline className='bg-white size-7 rounded-full px-1 mx-48 mt-4' />
                    </div>
                        <Image src="/jacket.png" alt="" width={500} height={500} className='w-44 -mt-5 ml-4' />
                    </div>
                    <h3>The north coat</h3>
                    <h3><span className='text-primary'>$260</span> $360</h3>
                    <Image src="/Fivestar.png" alt="" width={5000} height={5000} className='h-6 w-28'/>
                </div>
                <div>
                    <div className='bg-gray-200 p-16 '>
                    <div className='ml-4 -mt-11'>
                    <IoHeartOutline className='bg-white size-7 rounded-full px-1 mx-48' />
                    <IoEyeOutline className='bg-white size-7 rounded-full px-1 mx-48 mt-4' />
                    </div>
                        <Image src="/bag.png" alt="" width={1000} height={1000} className='h-36 w-60' />
                    </div>
                    <h3>Gucci Duffle bag</h3>
                    <h3><span className='text-primary'>$960</span> $360</h3>
                    <Image src="/Fourhalfstar.png" alt="" width={5000} height={5000} className='h-6 w-28'/>
                </div>
                <div>
                    <div className='bg-gray-200 p-11 py-20 '>
                    <div className='ml-8 -mt-16'>
                    <IoHeartOutline className='bg-white size-7 rounded-full px-1 mx-48' />
                    <IoEyeOutline className='bg-white size-7 rounded-full px-1 mx-48 mt-4' />
                    </div>
                        <Image src="/speaker.png" alt="" width={1000} height={1100} className='mt-6' />
                    </div>
                    <h3>RGB liquid CPU Cooler</h3>
                    <h3><span className='text-primary'>$160</span> $170</h3>
                    <Image src="/Fourhalfstar.png" alt="" width={5000} height={5000} className='h-6 w-28'/>
                </div>
                <div>
                    <div className='bg-gray-200 p-14'>
                    <div className='ml-5 -mt-10'>
                    <IoHeartOutline className='bg-white size-7 rounded-full px-1 mx-48' />
                    <IoEyeOutline className='bg-white size-7 rounded-full px-1 mx-48 mt-4' />
                    </div>
                        <Image src="/table.png" alt="" width={500} height={500} className='w-32 ml-4' />
                    </div>
                    <h3>Small BookSell</h3>
                    <h3><span className='text-primary'>$360</span></h3>
                    <Image src="/Fivestar.png" alt="" width={5000} height={5000} className='h-6 w-28'/>
                </div>

            </div>
            <div className='flex justify-around bg-black mt-40 bg-cover'>
                <div className='py-9'>
                    <h3 className='text-green-500'>Categories</h3>
                    <h2 className='text-white text-5xl font-semibold pt-5'>Enhance Your</h2>
                    <h2 className='text-white text-5xl font-semibold py-2'>Music Experience</h2>
        
                    <div className='flex gap-4 py-6'>
                        <button className=' bg-white text-black rounded-full px-5 py-3'><span className='font-bold'>23</span><br/> Hours</button>
                        <button className=' bg-white text-black rounded-full px-6'><span className='font-bold'>05</span><br/> Days</button>
                        <button className=' bg-white text-black rounded-full px-3'><span className='font-bold'>59</span><br/> Minutes</button>
                        <button className=' bg-white text-black rounded-full px-3 py-4'><span className='font-bold'>35</span><br/> Seconds</button>
                    </div>
                    <button className='bg-green-500 rounded-sm px-9 py-1 mt-8 text-white'>Buy Now!</button>
                </div>
                
                <div className='shadow-white pt-6'>
                    <Image src="/music.png"alt=""width={1000} height={1000} className='h- w-full'/>
                </div>
            </div>

        </div>
    )
}

export default Thismonth