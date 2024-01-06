import React from 'react';
import Container from '../Shared/Container';
import Navber from '../Component/Navber';
import Footer from '../Component/Footer';
import Banner from '../Component/Banner';

const Home = () => {
    return (
        <div>
          <Container>
            {/* navber */}
            <Navber/>

           

           {/* banner */}
           <Banner/>






            {/* footer */}
            <Footer/>
          </Container>
        </div>
    );
};

export default Home;