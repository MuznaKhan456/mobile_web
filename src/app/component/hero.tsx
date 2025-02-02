
import React from "react"
import { FaApple } from "react-icons/fa6"
import { IoIosArrowForward } from "react-icons/io"
import Image from "next/image"
export default function Hero(){

return (
<div className="flex justify-center items-center px-10">
<div className="max-w-[14440px] flex gap-6 justify-center">
<div className="border-r-2 border-neutral-200 p-10 hidden md:block">
  <ul>
    {[
      "Women's Fashion",
      "Men's Fashion",
      "Electronics",
      "Home & Lifestyle",
      "Medicine",
      "Sports & Outdoor",
      "Baby's & Toys",
      "Groceries & Pets",
      "Health & Beauty",
    ] .map((item, index) => (
      <li
      key={index}
      className="flex justify-between items-center text-slate-800 leading-loose hover:underline cursor-pointer hover-text-blue-500 transition-all duration-150">
    <span>{item}</span>
    {index < 2 && (
      <IoIosArrowForward className="text-lg ml-2"/>
    )}
      </li>
    )
  )
    }
  </ul>
    </div>
      
  <div className="md:flex items-center bg-black rounded-lg p-6 px-10 mt-0 md:mt-7">
    <div className=" text-white flex flex-col justify-center space-y-5 h-[400px] w-[220px] md:w-[300px] lg:w-[400px]">
        <div className="flex items-center gap-2">
<FaApple className="text-2xl md:text-4xl"/>
<span className="text-sm md:text-base font-semibold">iphone 14 Series</span>
        </div>
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">Up to 10% off Voucher</h1>
<button  className="underline underline-offset-4 hover:font-semibold flex items-center gap-2">

Shop Now</button>
    </div>

    <div className="">
        <Image src="/phone.jpeg" alt="" height={500} width={500} className="-mt-16 md:-mt-0"/>
    </div>

    </div>   
  </div>
</div>
)
}