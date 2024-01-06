import React, { Children } from 'react';

const Container = ({children}) => {
    return (
<div className=' lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm mx-auto px-5 lg:px-0'>
            {children}
        </div>
    );
};

export default Container;