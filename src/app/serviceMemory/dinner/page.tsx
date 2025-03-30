'use client'
import React from 'react';
import Image from "next/image";
import hallOne from "@/app/serviceMemory/hall/icon/hallOne.svg";
import hallTwo from "@/app/serviceMemory/hall/icon/hallTwo.svg";
import hallThree from "@/app/serviceMemory/hall/icon/hallThree.svg";
import DownHeader from "@/app/downHeader/page";
import Link from "next/link";


export  default function Dinner() {

    return (
        <div className="overflow-x-hidden">
            <div className="bg-cover bg-no-repeat overflow-hidden pt-10 mt-[50px]"
                 style={{backgroundImage: 'url("/fonCenter.svg")', minHeight: "calc(100vh)"}}>
                <div className="max-w-[1225px] mx-auto px-7">
                    <div>
                        <p className="text-header-ul font-cormorant text-[35px] md:text-[55px] font-normal">Поминальные обеды</p>
                    </div>
                    <div className="">
                        <p className="text-header-ul font-raleway text-[23px] md:text-[32px] font-thin mt-[55px]">Поминальный обед - неотъемлемая часть похоронной процессии. Это дань уважения памяти усопшего.</p>
                        <p className="text-header-ul font-raleway text-[23px] md:text-[32px] font-thin mt-[71px]">Наша похоронное бюро организовывает качественные и подходящие под ваш бюджет поминальные обеды.</p>
                        <p className="text-header-ul font-raleway text-[23px] md:text-[32px] font-thin mt-[70px]">По уточнению поминального обеда звоните по указанному номеру в <Link href="/contact"><span className="hover:text-micro-text border-b border-dark-text hover:border-micro-text">контактах</span></Link>.</p>
                    </div>
                </div>
            </div>
            <DownHeader/>
        </div>
    );
}

