import React from 'react'
import Image from 'next/image'
import { IoEyeOutline, IoHeartOutline } from 'react-icons/io5'

const Todays = () => {
    return (
        <div className='border-b-2 pb-14 mx-2 md:mx-0'>

            <div className='text-primary flex gap-6 mt-20'>
                <button className='bg-primary py-1 px-1 rounded-sm'>a</button>
                <div className='font-semibold mt-1'>Todays</div>
            </div>
            <div className='lg:flex gap-56 mt-0 md:mt-10 py-9'>

                <div className='font-semibold text-3xl md:text-4xl lg:text-5xl'>
                    Flash Sales
                </div>
                <div>
                    <Image src="/timer.png" alt="" height={1000} width={1000} className='mt-4 md:mt-0 w-60' />
                </div>
               
            </div>




            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 '>
            <div>
                <div className='bg-gray-200 p-10 rounded-md '>
                    <div className='-mt-6'><button className='bg-primary py-1 px-4 rounded-md text-white -mx-6 '>-40%</button></div>
                    <div className='-mt-7'>
                        <IoHeartOutline className='bg-white size-7 rounded-full px-1 mx-56 md:mx-60 ' />
                        <IoEyeOutline className='bg-white size-7 rounded-full px-1 mx-56 md:mx-60 mt-4' />
                        <Image src="/redremote.png" alt="" width={2000} height={5000} className='h-34 w-48' />
                        </div>
                        </div>
                        <h3>HAVIT HV-G92 Gampepad</h3>
                        <h3><span className='text-primary'>$120</span> $160</h3>
                         <Image src="/star5.png" alt="" width={5000} height={5000} className='h-6 w-28'/>
                 </div>


                 <div>
                <div className='bg-gray-200 p-16 rounded-md '>
                    <div className='-mt-12'><button className='bg-primary py-1 px-4 rounded-md text-white -mx-12  '>-35%</button></div>
                    <div className='-mt-7'>
                        <IoHeartOutline className='bg-white size-7 rounded-full px-1 mx-52 md:mx-56' />
                        <IoEyeOutline className='bg-white size-7 rounded-full px-1 mx-52 md:mx-56 mt-4' />
                        <Image src="/keyboard.png" alt="" width={1000} height={1000} className='h-36 w-48' />
                    </div>
                    </div>
                    <h3>AK-900 Wired Keyboard</h3>
                    <h3><span className='text-primary'>$960 </span>$1160</h3>
                    <Image src="/star4.png" alt="" width={5000} height={5000} className='h-6 w-28'/>
                </div>


                   <div>
                    <div className='bg-gray-200 p-16 rounded-md'>
                        <div className='-mt-12'><button className='bg-primary py-1 px-4 rounded-md text-white -mx-12  '>-30%</button></div>
                        <div className='-mt-7'>
                            <IoHeartOutline className='bg-white size-7 rounded-full px-1 mx-52 md:mx-56' />
                            <IoEyeOutline className='bg-white size-7 rounded-full px-1 mx-52 md:mx-56 mt-4' />
                            <Image src="/monitor.png" alt="" width={1000} height={1000} className='h-36 ' />
                        </div> 
                        </div>
                        <h3>IPS LCD Gaming Monitor</h3>
                        <h3><span className='text-primary'>$370</span> $400</h3>
                        <Image src="/star5.png" alt="" width={5000} height={5000} className='h-6 w-28'/>
                    </div>
                       <div>
                        <div className='bg-gray-200 p-1 pl-24 rounded-md'>
                            <div className='mt-2'><button className='bg-primary py-1 px-4 rounded-md text-white -mx-20  '>-25%</button></div>
                            <div className='-mt-7'>
                                <IoHeartOutline className='bg-white size-7 rounded-full px-1 mx-44 md:mx-48' />
                                <IoEyeOutline className='bg-white size-7 rounded-full px-1 mx-44 md:mx-48 mt-4' />
                                <Image src="/chair.png" alt="" width={1000} height={1000} className='h-52 w-28' />
                            </div>
                            </div>
                            <h3>S-Series Comfort Chair</h3>
                            <h3><span className='text-primary'>$375 </span>$400</h3>
                            <Image src="/star4.5.png" alt="" width={5000} height={5000} className='h-6 w-28'/>
                        </div>

                    </div>
                    <div className='py-9 text-center'>
                        <button className='bg-primary py-2 px-9 rounded-sm text-white'>View All Product</button>
                    </div>
                </div>

            
        

            )
}

            export default Todays;