import React, { useEffect, useState } from 'react';
import './photos.css'
import SinglePhoto from './Home/Shared/SinglePhoto';


const Photos = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch('photo.json').then(res => res.json()).then(data => setPhotos(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1'>

            {
                photos.map(photo => <SinglePhoto key={photos.id} photo={photo}></SinglePhoto>)
            }
        </div>
    );
};

export default Photos;