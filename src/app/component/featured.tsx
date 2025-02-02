import Image from "next/image"
import { TbTruckDelivery } from "react-icons/tb"
import { RiCustomerServiceFill, RiShieldCheckFill } from "react-icons/ri"

export default function Featured() {
    return (
        <div className="mx-2 md:mx-0">
            <div className='text-primary flex gap-6 mt-20'>
                <button className='bg-primary py-1 px-1 rounded-sm'>a</button>
                <div className='font-semibold mt-1'>Featured</div>
            </div>
            <div>
                <h2 className="text-5xl font-semibold mt-10">
                    New Arrival
                </h2>
            </div>  
            <div className="grid grid-cols-1 md:grid-cols-4 grid-row-2 gap-6 text-white pt-4">
                <div className="bg-black col-span-2 row-span-2 relative">
                    <div className="absolute left-4 bottom-3 text-white">
                        <h1 className="sm:text-lg font-bold md:text-xl">Playstation</h1>
                        <p className="relative bottom-0 text-xs py-1">
                            Black and White version of the PS5 coming out on sale.
                        </p>
                        <button className="text-md font-sans underline underline-offset-8 hover:font-bold">Shop Now</button>
                    </div>
                    <Image src="/ps5.png" alt="" width={500} height={500} />
                </div>
                

                
                    <div className="bg-black col-span-2 row-span-1 relative mt-3 md:mt-0">
                        <div className="absolute left-4 bottom-3">
                            <h1 className="sm:text-lg font-bold md:text-xl">Women&#39;s Collection</h1>
                            <p className="relative bottom-0 text-xs py-1">
                                Black and White version of the PS5 coming out on sale.
                            </p>
                            <button className="text-md font-sans underline underline-offset-8 hover:font-bold">Shop Now</button>
                        </div>
                        <Image src="/woman.png" alt="" width={400} height={400} className="ml-0 md:ml-52"/>
                        </div>


    <div className="bg-black relative h-full w-full mt-3 md:mt-0">
        <div className="absolute left-4 bottom-3">
            <h1 className="sm:text-sm font-bold md:text-xl">Speaker</h1>
            <p className="relative bottom-0 text-xs md:py-1 ">Amazon wireless speakers</p>
            <button className="text-md font-sans underline underline-offset-8 hover:font-bold">Shop Now</button>
        </div>
        <Image src="/clipart.png" alt="" width={200} height={200} className="p-4 ml-16"/>
    </div>
    <div className="bg-black relative h-full w-full mt-3 md:mt-0">
        <div className="absolute left-4 bottom-3">
            <h1 className="sm:text-sm font-bold md:text-xl">Perfume</h1>
            <p className="relative bottom-0 text-xs md:py-1 ">GUCCI INTENSE OUD EDP</p>
            <button className="text-md font-sans underline underline-offset-8 hover:font-bold">Shop Now</button>
        </div>
        <Image src="/perfume3.png" alt="" width={200} height={200} className="p-2 ml-16"/>
    </div>

                   
 </div>
            <div className="md:flex gap-40 justify-center py-24">
            <div className="text-center py-3"><TbTruckDelivery className=" mx-auto size-16 text-white bg-black p-1 rounded-full border-8" />
            <h4 className="font-bold py-2">FREE AND FAST DELIVERY</h4>
            <p>Free delivery for all orders over $140</p>
            </div>
            <div className="text-center py-3"><RiCustomerServiceFill className=" mx-auto size-16 text-white bg-black p-1 rounded-full border-8"/>
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