import React from 'react';
import Banner from './Banner';
import ExtraSection from './ExtraSection';
import Personal from './Shared/Personal';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <h2 className='text-5xl text-center font-extrabold mt-4'>Education Complex</h2>
            <ExtraSection></ExtraSection>
            <Personal></Personal>
            
        </div>
    );
};

export default Home;