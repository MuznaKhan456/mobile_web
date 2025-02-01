import { AiOutlineDollar } from "react-icons/ai"
import { BiStore } from "react-icons/bi"
import { FaSackDollar } from "react-icons/fa6"
import { SlHandbag } from "react-icons/sl"

export default function Services(){
    return(
        <div className="grid grid-cols-4 gap-9 m-28">
            <div className=" text-center border-2 py-8">
            <BiStore className="mx-auto size-16 text-white bg-black p-1 rounded-full border-8"/>
                <h3 className="font-semibold text-2xl">10.5k</h3>
                <h3>Sallers active our site</h3>
            </div>
            <div  className=" text-center border-2 py-8" >
            <AiOutlineDollar className="mx-auto size-16 text-white bg-black p-1 rounded-full border-8"/>
            <h3 className="font-semibold text-2xl">33k</h3>
            <h3>Monthly Product Sale</h3>
            </div>
            <div  className=" text-center border-2 py-8">
            <SlHandbag  className="mx-auto size-16 text-white bg-black p-1 rounded-full border-8"/>
            <h3 className="font-semibold text-2xl">45.5k</h3>
            <h3>Customer active our site</h3>
            </div>
            <div  className=" text-center border-2 py-8">
            <FaSackDollar className="mx-auto size-16 text-white bg-black p-2 rounded-full border-8"/>
            <h3 className="font-semibold text-2xl">25k</h3>
            <h3>Anual gross sale our site</h3>
            </div>

        </div>
    )
}