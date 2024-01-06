import React from 'react';
import banner from '../assets/banner-img.png'
const Banner = () => {
    return (

<>

          <div className='mt-16'>


            {/* text Mobile view */}
<div className='space-y-5 lg:hidden md:hidden '>
   <h1 className='text-3xl fon font-semibold text-black text-center'>Delivery Food To Your  Door Step| </h1>
   <p className=' text-gray-600 text-center'>Authentic Food|,Quick Service,Fast Delivery</p>
  </div>

          </div>


        <div className='lg:h-[300px] md:h-[272px]  w-full rounded-lg lg:my-28 my-10  lg:bg-[#F99F1C] md:bg-[#F99F1C]  bg-[#FD9460]'>



    <div className='flex justify-between md:flex-row lg:flex-row flex-col md:items-center lg:items-center lg:px-20 md:px-10 '>

{/* text dekstop view */}

  <div className='space-y-5 hidden lg:block md:block'>
   <h1 className='lg:text-4xl md:text-2xl fon font-semibold text-white'>Delivery Food To Your <br /> Door Step| </h1>
   <p className=' text-gray- lg:text-lg md:text-sm'>Authentic Food|,Quick Service,Fast Delivery</p>
  </div>



  {/* image */}

  <div>
<img src={banner} alt="banner-img" className='md:w-[450px] lg:w-[450px] ' />
  </div>


    </div>
            

            
   
        </div>
        </>
    );
};

export default Banner;