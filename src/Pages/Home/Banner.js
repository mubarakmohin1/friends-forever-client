import React from 'react';
import photos1 from '../../Image/photos1.jpg'
import photos2 from '../../Image/photos2.jpg'
import photos9 from '../../Image/photos9.jpeg'
import photos10 from '../../Image/photos10.jpeg'
import photos7 from '../../Image/photos7.jpg'

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <img src= {photos1} class="w-full" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src= {photos2} class="w-full" />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src= {photos9} class="w-full" />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img src= {photos10} class="w-full" />
                </div>
                <div id="item5" class="carousel-item w-full">
                    <img src= {photos7} class="w-full" />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
                <a href="#item5" class="btn btn-xs">5</a>
            </div>
        </div>
    );
};

export default Banner;