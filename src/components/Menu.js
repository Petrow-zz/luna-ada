import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";


//STYLE
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import '../sass/components/Menu.scss'

function Menu() {
    return (
        <div className='menu'>
            <div className="page-wrapper">

                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    //onSlideChange={() => console.log('slide change')}
                    //onSwiper={}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>

                <h1>This title edited from a desktop PC</h1>
            </div>
        </div>
    )
}

export default Menu
