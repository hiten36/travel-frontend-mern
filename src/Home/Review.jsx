import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCards, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-cards";

const Review = () => {
    return (
        <>
            <div id="Review" className="service review mx-auto mt-10">
                <h1 className="text-5xl mb-5 font-semibold text-center">Clients Review</h1>
                <div>
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true
                        }}
                        loop={true}
                        effect={"cards"}
                        grabCursor={true}
                        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards, Autoplay]}
                        spaceBetween={300}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        className="sdfsdf"
                    >
                        <SwiperSlide>
                            <div className="review1">
                                <img className="review-img" src="/images/avatar.svg" alt="user" />
                                <h3 className="text-3xl mb-3">John Deo</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, quos unde, fuga laboriosam aliquam ad iusto laudantium necessitatibus inventore repellat minima. Debitis, amet.</p>
                                <img className="my-4 star" src="/images/star.png" alt="star" />
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review1">
                                <img className="review-img" src="/images/avatar.svg" alt="user" />
                                <h3 className="text-3xl mb-3">Jane Deo</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, quos unde, fuga laboriosam aliquam ad iusto laudantium necessitatibus inventore repellat minima. Debitis, amet.</p>
                                <img className="my-4 star" src="/images/star.png" alt="star" />
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review1">
                                <img className="review-img" src="/images/avatar.svg" alt="user" />
                                <h3 className="text-3xl mb-3">Stan Morgan</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, quos unde, fuga laboriosam aliquam ad iusto laudantium necessitatibus inventore repellat minima. Debitis, amet.</p>
                                <img className="my-4 star" src="/images/star.png" alt="star" />
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review1">
                                <img className="review-img" src="/images/avatar.svg" alt="user" />
                                <h3 className="text-3xl mb-3">Rose Jack</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, quos unde, fuga laboriosam aliquam ad iusto laudantium necessitatibus inventore repellat minima. Debitis, amet.</p>
                                <img className="my-4 star" src="/images/star.png" alt="star" />
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review1">
                                <img className="review-img" src="/images/avatar.svg" alt="user" />
                                <h3 className="text-3xl mb-3">Kevin Martin</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, quos unde, fuga laboriosam aliquam ad iusto laudantium necessitatibus inventore repellat minima. Debitis, amet.</p>
                                <img className="my-4 star" src="/images/star.png" alt="star" />
                            </div>

                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Review
