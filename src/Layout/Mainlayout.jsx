import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Component/Navber';
import Footer from '../Component/Footer';

const Mainlayout = () => {
    return (
        <div>
            

              <div className='min-h-screen'>
                <Outlet/>
              </div>

           
        </div>
    );
};

export default Mainlayout;