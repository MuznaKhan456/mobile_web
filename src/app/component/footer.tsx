import Image from "next/image"
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6"
import { TfiTwitter } from "react-icons/tfi"
export default function Footer  () {
    return(
<div className="bg-black text-white py-10">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 px-6">
  <div>
    <h3 className="font-bold text-lg">Exclusive</h3>
    <p className="mt-2">Subscribe</p>
    <p className="text-gray-400">Get 10% off your first order</p>
    <div className="flex mt-3 border border-gray-400 rounded-md overflow-hidden">
      <input type="email" placeholder="Enter your email" className="p-2 bg-black text-white w-full focus:outline-none" />
      <button className="bg-white text-black p-2">➜</button>
    </div>
  </div>
  <div>
    <h3 className="font-bold">Support</h3>
    <p className="text-gray-400">111 Bijoy sarani, Dhaka, Bangladesh.</p>
    <p className="text-gray-400">exclusive@gmail.com</p>
    <p className="text-gray-400">+88015-88888-9999</p>
  </div>
  <div>
    <h3 className="font-bold">Account</h3>
    <ul className="text-gray-400 space-y-2">
      <li>My Account</li>
      <li>Login / Register</li>
      <li>Cart</li>
      <li>Wishlist</li>
      <li>Shop</li>
    </ul>
  </div>
  <div>
    <h3 className="font-bold">Quick Link</h3>
    <ul className="text-gray-400 space-y-2">
      <li>Privacy Policy</li>
      <li>Terms Of Use</li>
      <li>FAQ</li>
      <li>Contact</li>
    </ul>
  </div>
  <div>
    <h3 className="font-bold">Download App</h3>
    <p className="text-gray-400">Save $3 with App New User Only</p>
    <div className="flex gap-2 mt-3">
      <Image src="/GooglePlay.png" alt="Google Play" width={120} height={40} />
      <Image src="/appstore.png" alt="App Store" width={120} height={40} />
    </div>
    <div className="flex gap-3 mt-3 text-xl">
      <span><FaFacebook /></span>
      <span><TfiTwitter /></span>
      <span><FaInstagram /></span>
      <span><FaLinkedinIn /></span>
    </div>
  </div>
</div>
<p className="text-center text-gray-500 mt-6">© Copyright Rimel 2022. All rights reserved</p>
</div>
)
}