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
    };


    return (
        <div className="mt-[65px] mb-[30px]">
            <div className="">
                <div>
                    <p className="ml-[391px] text-header-ul font-cormorant text-[55px] font-normal">Отзывы:</p>
                </div>
                <div>
                    <div className="relative w-[1050px] m-auto">
                        <Image src="/arrowCL.svg" alt='-' width={30} height={30}
                               className="absolute top-[50%] left-[-50px] cursor-pointer"
                               onClick={() => sliderRef.current?.slickPrev()}/>
                        <Image src="/arrowCR.svg" alt='-' width={30} height={30}
                               className="absolute top-[50%] right-[-30px] cursor-pointer"
                               onClick={() => sliderRef.current?.slickNext()}/>
                        <Slider {...settings}>
                            {
                                data
                                    .filter(item => item.status !== "Благодарственное письмо")
                                    .map((item, index) => {
                                    return (
                                        <>
                                            <div key={index}
                                                 className="relative w-[500px] h-[425px] bg-memory-card rounded-[20px] pt-[21px] pl-[43px]">
                                                <div
                                                    className={`${item.status === "Память" ? "pl-[25px] pt-[4px] pr-[29px] pb-[7px]" : "pl-[5px] pt-[2px] pr-[6px] pb-[11px]"} absolute top-0 right-0 max-w-[180px] h-auto bg-memory-black text-cart-title font-cormorant text-[30px] font-normal rounded-tr-[20px] rounded-bl-[20px]`}>{item.status}</div>
                                                <div>
                                                    <p className="text-header-ul font-cormorant font-normal text-[16px]">{item.data}</p>
                                                    <p className="text-dark-text font-thin text-[20px] font-raleway">{item.name}</p>
                                                </div>
                                                <div
                                                    className="mt-[73px] text-dark-text max-w-[419px] font-raleway text-[20px]">{item.coment}</div>
                                                <div className="">
                                                    <Link href="/reviews">
                                                        <div
                                                            className="relative w-[318px] h-[44px] rounded-[25px] bg-memory-black hover:bg-hover-phone transition-colors duration-300 flex items-center justify-center mt-[45px] cursor-pointer">
                                                            <p className="text-text-white text-[20px] font-thin">Читать
                                                                отзыв полностью</p>
                                                            <Image src="/arrowWhite.svg" alt="-" width={9} height={9}
                                                                   className="absolute top-[19px] right-[18px]"/>
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

