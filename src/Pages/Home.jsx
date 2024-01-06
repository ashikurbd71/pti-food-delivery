import React from 'react';
import Container from '../Shared/Container';
import Navber from '../Component/Navber';
import Banner from '../Component/Banner';
import PopularFood from '../Component/PopularFood';
import RecommendedFood from '../Component/RecommendedFood';

const Home = () => {
    return (
        <div>
          <Container>
            {/* navber */}
            <Navber/>

           {/* banner */}
           <Banner/>
    
      {/* popular Food */}

        <PopularFood/>

       {/* Recomended Food */}

       <RecommendedFood/>

        


          </Container>
        </div>
    );
};

export default Home;