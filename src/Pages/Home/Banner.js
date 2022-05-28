import React from 'react';
import photos1 from '../../Image/photos1.jpg'
import photos2 from '../../Image/photos2.jpg'
import photos7 from '../../Image/photos7.jpg'
import photos9 from '../../Image/photos9.jpeg'
import photos10 from '../../Image/photos10.jpeg'
import photos26 from '../../Image/photos26.jpg'
import photos29 from '../../Image/photos29.jpg'
import photos40 from '../../Image/photos40.jpg'
import photos37 from '../../Image/photos37.jpg'
import photos32 from '../../Image/photos32.jpg'
import photos30 from '../../Image/photos30.jpg'
 

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src= {photos1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src= {photos2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src= {photos9} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src= {photos10} className="w-full" />
                </div>
                <div id="item5" className="carousel-item w-full">
                    <img src= {photos7} className="w-full" />
                </div>
                <div id="item6" className="carousel-item w-full">
                    <img src= {photos29} className="w-full" />
                </div>
                <div id="item7" className="carousel-item w-full">
                    <img src= {photos26} className="w-full" />
                </div>
                <div id="item8" className="carousel-item w-full">
                    <img src= {photos40} className="w-full" />
                </div>
                <div id="item9" className="carousel-item w-full">
                    <img src= {photos37} className="w-full" />
                </div>
                <div id="item10" className="carousel-item w-full">
                    <img src= {photos32} className="w-full" />
                </div>
                <div id="item11" className="carousel-item w-full">
                    <img src= {photos30} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
                <a href="#item6" className="btn btn-xs">6</a>
                <a href="#item7" className="btn btn-xs">7</a>
                <a href="#item8" className="btn btn-xs">8</a>
                <a href="#item9" className="btn btn-xs">9</a>
                <a href="#item10" className="btn btn-xs">10</a>
                <a href="#item11" className="btn btn-xs">11</a>
            </div>
        </div>
    );
};

export default Banner;