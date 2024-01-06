import React from 'react';
import { FaRegUser } from "react-icons/fa6";
const Navber = () => {
    return (
        <div className='flex md:justify-between lg:justify-between justify-center md:flex-row lg:flex-row lg:gap-10 gap-10  my-4'>
            {/* logo */}
            <div>

                <h1 className='lg:text-3xl text-xl font-bold '>pti.</h1>

            </div>

{/* searchber */}

       <div className='flex gap-5'>

       <div>
       <form>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
        Search
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-[#FD6011] dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-2 pl-10 lg:w-[400px] w-[180px] text-sm  rounded-lg "
          placeholder="Search AudioBook"
          required
        />
       
      </div>
    </form>
       </div>

{/* menu */}
       <div>
       <div>
 

  <select
    name="HeadlineAct"
    id="HeadlineAct"
    className="block p-2 rounded-lg lg:w-full w-[100px]  text-sm font-semibold bg-none"
  >
    <option className=' font-semibold p hover:text-[#FD6011]' value=""><h1>MENU</h1></option>
    <option  className='  font-medium hover:text-[#FD6011]' value="Home">Home</option>
    <option  className=' font-medium hover:text-[#FD6011]' value="Details">Details</option>
    <option  className=' font-medium hover:text-[#FD6011]' value="Category">Category</option>
    <option  className=' font-medium hover:text-[#FD6011]' value="My Favorites">My Favorites</option>
    <option  className=' font-medium hover:text-[#FD6011]' value="Profile">Profile</option>
    <option  className=' font-medium hover:text-[#FD6011]' value="Log in/Sign Up">Log in/Sign Up</option>
 
  </select>
</div>

       </div>

       </div>



{/* user icon */}

  <div className='hidden md:block lg:block'>
  <FaRegUser  className='text-4xl rou rounded-full text-white p-2  bg-[#FD6011]' />
  </div>


        </div>
    );
};

export default Navber;