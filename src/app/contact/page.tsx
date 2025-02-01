"use client"

import { useState } from 'react';
import { BiSolidPhone } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="flex flex-col py-32 md:flex-row gap-12 p-6 max-w-4xl mx-auto">
      {/* Contact Info */}
      <div className="bg-white p-6 shadow-lg rounded-xl w-full md:w-1/3">
        <div className="flex items-center mb-4">
          <span className="text-red-500 text-xl mr-3"><BiSolidPhone /></span>
          <h3 className="text-lg font-semibold">Call To Us</h3>
        </div>
        <p className="text-gray-600 mb-4">We are available 24/7, 7 days a week.</p>
        <p className="font-semibold">Phone: +8801611112222</p>
        <hr className="my-4" />
        <div className="flex items-center mb-4">
          <span className="text-red-500 text-xl mr-3"><MdEmail /></span>
          <h3 className="text-lg font-semibold">Write To Us</h3>
        </div>
        <p className="text-gray-600 mb-2">Fill out our form and we will contact you within 24 hours.</p>
        <p className="font-semibold">customer@exclusive.com</p>
        <p className="font-semibold">support@exclusive.com</p>
      </div>
      
      {/* Form Section */}
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-xl w-full md:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" name="name" placeholder="Your Name *" required
            className="border p-3 rounded-md w-full bg-gray-100" 
            value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email *" required
            className="border p-3 rounded-md w-full bg-gray-100" 
            value={formData.email} onChange={handleChange} />
          <input type="text" name="phone" placeholder="Your Phone *" required
            className="border p-3 rounded-md w-full bg-gray-100" 
            value={formData.phone} onChange={handleChange} />
        </div>
        <textarea name="message" placeholder="Your Message" required
          className="border p-3 rounded-md w-full h-32 bg-gray-100 mt-4"
          value={formData.message} onChange={handleChange} />
        <button type="submit" className="bg-red-500 text-white font-semibold px-6 py-3 rounded-md mt-4 w-full md:w-auto">
          Send Message
        </button>
      </form>
    </div>
  );
}

