import React from 'react'
import Image from 'next/image'

const Categories = () => {
  return (
    <div className='border-b-2 py-20'>
         <div className='text-primary flex gap-6 mt-8 '>
        <button className='bg-primary py-1 px-1 rounded-sm'>a</button>
         <div className='font-semibold mt-1'>Categories</div>
        </div>
        <div className='text-5xl font-semibold py-10'>
            Browse By Category
        </div>
        <div className='grid grid-cols-6 gap-8 '>
            <div  className='border-2 px-16 py-9 text-center'>
                <Image src="/cell.png"alt="" width={100} height={100}/>
                <h3>Phone</h3>
            </div>
            <div className='border-2 px-16 py-9 text-center'>
            <Image src="/computer.png"alt=""width={100}height={100}/>
                <h3>Computer</h3>
            </div>
            <div className='border-2 px-16 py-9 text-center'>
            <Image src="/Watch.png"alt=""width={100}height={100}/>
                <h3>SmartWatch</h3>
            </div>
            <div className='border-2 px-16 py-9 text-center bg-primary'>
            <Image src="/Camerar.png"alt=""width={100}height={100}/>
                 <h3>Camera</h3>
            </div>
            <div className='border-2 px-16 py-9 text-center'>
            <Image src="/Headphone.png"alt=""width={100}height={100}/>
                 <h3>HeadPhones</h3>
            </div>
            <div className='border-2 px-16 py-9 text-center'>
            <Image src="/Gamepad.png"alt=""width={100}height={100}/>
                  <h3>Gaming</h3>
            </div>
            

        </div>
        
    </div>
  )
}

export default Categories