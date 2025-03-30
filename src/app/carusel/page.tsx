'use client'
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// @ts-ignore
import Slider, {SliderSettings} from 'react-slick'
import {useRef} from "react";
import {data, dataType} from "@/app/carusel/data";


interface SlickSlider extends SliderSettings {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    ref: any;
    nextArrow?: React.ReactElement | null;
    prevArrow?: React.ReactElement | null;
    responsive: any;
}

export default function Carusel() {
    const sliderRef = useRef<Slider<any>>(null);

    const settings: SlickSlider = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: (
            <button
            >
                Next
            </button>
        ),
        prevArrow: (
            <button
            >
                Prev
            </button>
        ),
        ref: sliderRef,
        responsive: [
            {
                breakpoint: 1280, // Если ширина экрана меньше 1280px
                settings: {
                    slidesToShow: 1, // Показываем только 1 отзыв
                }
            }
        ]
    };


    return (
        <div className="mt-[65px] mb-[30px] flex justify-center items-center w-screen">
            <div className="relative xl:max-w-[1050px] md:max-w-[700px] sm:max-w-[600px] xs:max-w-[300px] w-full m-auto">
                <div>
                    <p className="text-header-ul font-cormorant sm:text-[55px] xs:text-[30px] font-normal">Отзывы:</p>
                </div>
                <div className="m-auto">
                    <div className="relative m-auto">
                        <Image src="/arrowCL.svg" alt='-' width={30} height={30}
                               className="absolute top-[50%] left-[-30px] cursor-pointer"
                               onClick={() => sliderRef.current?.slickPrev()}/>
                        <Image src="/arrowCR.svg" alt='-' width={30} height={30}
                               className="absolute top-[50%] right-[-30px] cursor-pointer"
                               onClick={() => sliderRef.current?.slickNext()}/>
                        <Slider {...settings}  className="max-w-[1050px] w-full">
                            {
                                data
                                    .filter(item => item.status !== "Благодарственное письмо")
                                    .map((item, index) => {
                                    return (
                                        <>
                                            <div key={index}
                                                 className="relative w-auto sm:max-w-[500px] xs:max-w-[300px] h-[425px] m-auto bg-memory-card rounded-[20px] sm:pt-[21px] xs:pt-[20px] sm:pl-[43px] xs:pl-[23px]">
                                                <div
                                                    className={`${item.status === "Память" ? "sm:pl-[25px] xs:pl-[20px] xs:pt-[4px] sm:pr-[29px] xs:pr-[19px] xs:pb-[7px]" : "sm:pl-[5px] xs:pl-[2px] xs:pt-[2px] sm:pr-[6px] xs:pr-[2px] sm:pb-[11px] xs:pb-[5px] xs:max-w-[110px] sm:max-w-[170px]"} absolute top-0 right-0 max-w-[180px] h-auto bg-memory-black text-cart-title font-cormorant sm:text-[30px] xs:text-[20px] font-normal rounded-tr-[20px] rounded-bl-[20px]`}>{item.status}</div>
                                                <div>
                                                    <p className="text-header-ul font-cormorant font-normal text-[16px]">{item.data}</p>
                                                    <p className="text-dark-text font-thin text-[20px] font-raleway">{item.name}</p>
                                                </div>
                                                <div
                                                    className="sm:mt-[73px] xs:mt-[50px] text-dark-text max-w-[419px] font-raleway text-[20px]">{item.coment}</div>
                                                <div className="">
                                                    <Link href="/reviews">
                                                        <div
                                                            className="relative sm:w-[318px] sm:h-[44px] xs:w-[200px] xs:h-[25px] rounded-[25px] bg-memory-black hover:bg-hover-phone transition-colors duration-300 flex items-center justify-center sm:mt-[45px] xs:mt-[20px] cursor-pointer">
                                                            <p className="text-text-white sm:text-[20px] xs:text-[15px] font-thin">Читать
                                                                отзыв полностью</p>
                                                            <Image src="/arrowWhite.svg" alt="-" width={9} height={9}
                                                                   className="absolute sm:top-[19px] sm:right-[18px] xs:top-[9px] xs:right-[6px]"/>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>

                                        </>

                                    )
                                })
                            }

                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

