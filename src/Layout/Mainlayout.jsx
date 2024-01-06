import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';

const Mainlayout = () => {
    return (
        <div>
            

              <div className='min-h-screen'>
                <Outlet/>
              </div>

               {/* footer */}
               <Footer/>
        </div>
    );
};

export default Mainlayout;