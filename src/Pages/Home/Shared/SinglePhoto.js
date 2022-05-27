import React from 'react';

const SinglePhoto = ({photo}) => {
    return (
        <div class=" img-slider  bg-base-100 shadow-2xl">
            <figure class="px-10 pt-10">
                <img src= {photo.img} alt="Photos" class="rounded-xl" />
            </figure>
        </div>
    );
};

export default SinglePhoto;