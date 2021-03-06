import React from 'react';

const SinglePhoto = ({photo}) => {
    return (
        <div className=" img-slider  bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
                <img src= {photo.img} alt="Photos" className="rounded-xl" />
            </figure>
        </div>
    );
};

export default SinglePhoto;