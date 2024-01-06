import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';
import React from 'react';
import { Fragment } from 'react'
import { useForm } from 'react-hook-form';
const AddFood = ({isOpen,closeModal}) => {

    // hook-form

    const { register, formState: { errors },handleSubmit,reset } = useForm()

    const onSubmit =async(data) => {
    
        const imagefile = {image : data?.image[0]}
  
        console.table(imagefile)
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API_KEY}`,imagefile,{

        headers: {
            'content-type': 'multipart/form-data'
        }
        })
      console.log(res)
      
    //  statement

      if (res.data.success) {
          // now send the menu item data to the server with the image url
          const campInfo = {
             
              image: res.data.data.display_url,
       
             
          }
          // 
          console.log(campInfo)
        
      }}
      



    return (
        <div>
             <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10 bg-[#EDF2F4]' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-[#EDF2F4] bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-[#EDF2F4] mt-20 p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-xl font-medium text-center   leading-6 text-[#F99F1C]'
                >
                Add Food
                
                </Dialog.Title>
                <hr className='mt-3 text-2xl font-bold text-black' />
            
                <form onSubmit={handleSubmit(onSubmit)}  className="space-y-4 mt-5">
                <div className=' p-2 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-2 py-2 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                    // onChange={e => handleImageChange(e.target.files[0])}
                      className='text-sm cursor-pointer w-20 hidden'
                      type='file'
                      {...register('image', { required: true })}
                     
                      id='image'
                      accept='image/*'
                      hidden
                    />
                       {errors.image && <span className="text-red-600">image is required</span>}
                    <div className='bg-[#FD6011] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-[#1976D2]'>
                    Upload Food Photo
                    </div>
                  </label>
                </div>
              </div>
            </div>

         
        
            <div>
              <label className="sr-only" >Food Name</label>
              <input
               {...register('food', { required: true })}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Food Name"
                type="text"
             
              />
                {errors.age && <span className="text-red-600">age is required</span>}
            </div>

            <div>
              <label className="sr-only" >Price</label>
              <input
               {...register('price', { required: true })}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Price"
                type="text"
          
              />
                  {errors.phone && <span className="text-red-600">phone is required</span>}
            </div>


            <div>
  

  
</div>
      

   


        
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-[#F99F1C] px-10 py-3 font-medium text-white sm:w-auto"
            >
             Add Food
            </button>

          </div>
        </form>

               
            
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
        </div>
    );
};

export default AddFood;