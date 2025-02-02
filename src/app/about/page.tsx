import Image from 'next/image'
import Services from '../component/services';
import Owner from '../component/owner';

function  About () {
  return (
    <div>
    <div className='md:flex justify-between'>
    <div className='p-6 md:p-20'>
        <h1 className='text-4xl py-9 font-medium'>Our Story</h1>
        <p className='text align'>Launced in 2015, Exclusive is South Asia’s premier online shopping<br/> makterplace with an active presense in Bangladesh. Supported <br/>by wide range of tailored marketing, data and service solutions,<br/> Exclusive has 10,500 sallers and 300 brands and serves 3 <br/>millioons customers across the region. <br/></p>
        <p className='py-4'> Exclusive has more than 1 Million products to offer, growing at a <br/>very fast. Exclusive offers a diverse assotment in categories<br/> ranging  from consumer.</p>
    </div>
    <div className='mt-0 md:mt-20'>
        <Image src="/girls.jpg" alt="" width={1000} height={1000} className='h-full w-full '/>
    </div>
    </div>
    <Services/>
    <Owner/>
    </div>
  )
}

export default About;