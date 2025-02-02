"use client"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { IoIosMenu } from "react-icons/io";
import { IoCartOutline, IoHeartOutline, IoSearch } from "react-icons/io5";
;



export default function Header() {
   
   return (
       <header>
             <div className="hidden md:flex justify-center h-[48px] w-full bg-black pt-3 sm:hidden">
              <span className="text-white">Summer Sale For All Swim And Free Express Delivery-OFF 50%!
                     <a className="font-bold underline" href="/home"> ShopNow</a></span>
                 <select className="bg-black text-white mx-10">
                     <option value="English " >English</option>
                 </select>
             </div>

             <div className="flex gap-11 md:gap-20  pt-6 py-6 border-b-2 mx-2 md:mx-16">
                 <h1 className="text-4xl font-bold pt-4">Exclusive</h1>
                 <nav className="hidden md:block">
                     <ul className=" flex gap-7 pt-7 mx-20 ">
                         <li><Link href="/">Home</Link></li>
                         <li> <Link href="/contact">Contact</Link></li>
                         <li><Link href="/about">About</Link></li>
                         <li><Link href="/signup">Sign Up</Link></li>
                     </ul>
                 </nav>
                 <div className="hidden md:flex bg-slate-100 rounded-md px-4">
                     <input type='text' placeholder="What are you looking for?" className="w-[200px] bg-slate-100">
                     </input>
                     <IoSearch className=" md:text-black size-5 mt-4  " />
                 </div>
                 <div className="flex gap-3 lg:gap-9 sm:ml-6 lg:ml-20">
                 <IoHeartOutline className="text-black size-7 mt-6 " />
                     <IoCartOutline className="text-black size-7 mt-6 " />
 

                   <Sheet>
                        <SheetTrigger className=" md:hidden">
                             <IoIosMenu className="text-black size-7 my-6" />
                         </SheetTrigger>
                         <SheetContent className="bg-black text-white w-28 h-60 text-center">

                             <ul className=" gap-7 pt-7  ">
                                 <li className="py-2 underline underline-offset-8 "><Link href="/">Home</Link></li>
                                 <li className="py-2 underline underline-offset-8"> <Link href="/contact">Contact</Link></li>
                                 <li className="py-2 underline underline-offset-8"><Link href="/about">About</Link></li>
                                 <li className="py-2 underline underline-offset-8"><Link href="/signup">Sign Up</Link></li>
                             </ul>

                         </SheetContent>
                     </Sheet> 
                 </div>
             </div>
         </header>

    )
}


