import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import list from '../../public/list.json'
import Cards from './Cards';

const Free = () => {

    const filterData = list.filter((data) => data.category === 'free');
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    console.log(filterData);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='font-bold pb-2 text-2xl' >
            Free offered course
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempora! Lorem ipsum dolor sit amet.</p>
 
        </div>
           
    <div>
    <Slider {...settings}>
  {filterData.map((item) => (
    <Cards item={item} key={item.id}/>
  ))}
</Slider>

    </div>
    </div>
    </>
  )
}

export default Free