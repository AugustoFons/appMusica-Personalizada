import React from 'react'
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';

const SwiperCard = (props) => (
    <>
    <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                style={{
                    '--swiper-navigation-color': '#F9C95A',
                    '--swiper-pagination-color': '#F9C95A',
                    height: '280px',
                    '--swiper-pagination-top': '258px',
                    '--swiper-navigation-top-offset': '42%'
                }}
                grabCursor={true}
                breakpoints={{
                    540: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        },
                    640: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    },
                    1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                    },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >    
                {props.children}
        </Swiper>
    </>
)

export default SwiperCard