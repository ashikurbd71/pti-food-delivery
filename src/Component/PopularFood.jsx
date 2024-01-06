import React, { useEffect, useState } from 'react';
import Container from '../Shared/Container';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';







const PopularFood = () => {

//   api call and data fetch

    const [food,setFood] = useState()

useEffect(() => {
    fetch('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
      .then(response => response.json())
      .then(data => {
        setFood(data);
        console.log(data)
    
      })
      .catch(error => {
      console.log(error)
      });
  }, []);





    return (

<>
        
        <div className='pb-10' >
            <Container>

      <div className='flex justify-between  items-center'>
        <h1 className='lg:text-2xl text-xl font-semibold '>Popular</h1>
        <h1 className='lg:text-xl text-lg font-semibold text-[#FD6011]'>Add More</h1>
      </div>



      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >

       

  <div className=''>
    {/* data map */}
    {
        food?.Items?.map(food =>

            <SwiperSlide key={food.imageUrl}>
        <div className='py-5'>
 <img src={food?.ImageUrl} alt="foodiamage" className='lg:h-[330px] h-[200px] lg:w-[300px] rounded-lg' />
   <h1 className='text-center py-2 lg:text-lg'>{food?.Name}</h1>
        </div> 


        </SwiperSlide>


        )
    }
  </div>

        
        
      </Swiper>

            </Container>
        </div>



</>
    );
};

export default PopularFood;