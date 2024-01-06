import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import footer from '../assets/footer-img.png'
import { FaLongArrowAltRight } from "react-icons/fa";



const Footer = () => {
    return (
        <div className='w-full h-[300px] mx-auto px-40 bg-[#F99F1C]'>
           <div className='flex lg:flex-row flex-col justify-between items-center'>
            {/* text */}
            <div>
{/* subscribe */}
<form>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
        Search
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
         
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-3 pl-10 lg:w-[500px] w-[300px] text-sm my-10  rounded-xl "
          placeholder="Enter Your Email"
          required
        />
       <button
          type="submit"
          className="text-white absolute   right-2.5 bottom-1 bg-[#FC6011]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
              <div className='flex items-center gap-3'>
                <h1>Subscribe</h1>
                <FaLongArrowAltRight className='text-lg'/>
              </div>

        </button>
      </div>
    </form>



{/* copyright */}
          <div className='my-3 flex lg:flex-row  flex-col-reverse  justify-between items-center gap-10 '>
         
         <div>
              {/* logo */}
    <h1 className='lg:text-3xl text-xl font-bold text-center lg:text-left mb-5'>pti.</h1>
             <p className='font-semibold text-center lg:text-left'>Copyright&copy;Tripp.AllRight Reserved</p>
         </div>

{/* icon */}
             <div className='flex gap-3 lg:mt-12'>

             <div className=' rounded-full p-3 bg-white text-[#FC6011]'>
             <FaFacebook />
             </div>

             <div className=' rounded-full p-3 bg-white text-[#FC6011]'>
             <FaTwitter/>           
               </div>

             <div className=' rounded-full p-3 bg-white text-[#FC6011]'>
             <FaInstagram/>
             </div>

             </div>

          </div>

          
            </div>

            {/* image */}

            <div>
    <img src={footer} alt="footer-img" className='w-[300px] hidden lg:block'/>
            </div>


           </div>
        </div>
    );
};

export default Footer;