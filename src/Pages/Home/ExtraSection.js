import React from 'react';
import photos22 from '../../Image/photos22.jpg'
import Button from './Shared/Button';

const ExtraSection = () => {
    return (
        <div className="hero min-h-screen">
           
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src= {photos22} className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Gang-16 Updates!</h1>
                    <p className="py-6">This is my school where my heart is located.Each single moment,i miss this complex.A lot of time of a day is pass with my gang-16 friends.</p>
                    <Button></Button>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;
