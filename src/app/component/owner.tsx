import Image from "next/image"
import { TbTruckDelivery } from "react-icons/tb"
import { RiCustomerServiceFill, RiShieldCheckFill } from "react-icons/ri"
export default function Owner(){
    return(
        <div>
        <div className="grid grid-cols-3 grid-row-1 gap-6 mx-40">
            <div className="border-2 ">
                <div  className="bg-slate-200 px-9" >
                < Image src="/image 46.png" alt="" width={1000}height={1000} className="h-full w-full"/>
                </div>
                <h2 className="text-3xl">Tom Cruise</h2>
                <h3>Founder & Chairman</h3>
            </div>
            <div className="border-2">
                <div className="bg-slate-200  ">
            < Image src="/image 51.png" alt="" width={10000}height={1000}className=" h-full w-full"/>
            </div>
                <h2 className="text-3xl">Emma Watson</h2>
                <h3>Managing Director</h3> 
            </div>
            <div className="border-2">
                <div className="bg-slate-200">
            < Image src="/image 47.png" alt="" width={1000}height={1000}className="h-[510px] w-full"/>
            </div>
                <h2 className="text-3xl">Will Smith</h2>
                <h3>product Designer</h3>
            </div>
       </div>
    
                   <div className="flex gap-40 justify-center py-24">
                   <div className="text-center"><TbTruckDelivery className=" mx-auto size-16 text-white bg-black p-1 rounded-full border-8" />
                   <h4 className="font-bold py-2">FREE AND FAST DELIVERY</h4>
                   <p>Free delivery for all orders over $140</p>
                   </div>
                   <div className="text-center "><RiCustomerServiceFill className=" mx-auto size-16 text-white bg-black p-1 rounded-full border-8"/>
                   <h4 className="font-bold py-2">24/7 CUSTOMER SERVICES</h4>
                   <p>Friendly 24/7 customer support</p>
                   </div>
                   <div className="text-center py-3"><RiShieldCheckFill className="mx-auto size-16 text-white bg-black p-1 rounded-full border-8" />
                   <h4 className="font-bold py-2">MONEY BACK GURANTEE</h4>
                   <p>We return money within 30 days</p>
                   </div>
                   </div>
               </div>
    )
}