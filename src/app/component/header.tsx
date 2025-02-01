import Link from "next/link"
import { IoCartOutline, IoHeartOutline, IoSearch } from "react-icons/io5";




export default function Header(){
    return( 

        <header>
        <div className="flex justify-center h-[48px] w-full bg-black pt-3 ">
        <span className="text-white">Summer Sale For All Swim And Free Express Delivery-OFF 50%!
        <a className="font-bold underline" href="/home"> ShopNow</a></span>
        <select  className="bg-black text-white mx-10"> 
            <option value="English " >English</option>
            </select>
          </div>

            <div className="flex gap-20  pt-6 py-6 border-b-2 mx-16">
                <h1 className="text-4xl font-bold pt-4">Exclusive</h1>
                <nav>
                <ul className=" flex gap-7 pt-7 mx-20">
                    <li><Link href="/">Home</Link></li>
                       <li> <Link href="/contact">Contact</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/sign up">Sign Up</Link></li>
                  </ul>
                  </nav>
                  <div className="flex bg-slate-100 rounded-md gap-4 px-4">
              <input type='text' placeholder="What are you looking for?" className="w-[200px] bg-slate-100">
               </input>
              <IoSearch className="text-black size-5 mt-4  " />
              </div>
              <div className="flex gap-9 ml-20">
              <IoHeartOutline className="text-black size-7 mt-6 "/>
              <IoCartOutline className="text-black size-7 mt-6 "/>
              </div>
            </div>
         
            
            </header>
    )
}